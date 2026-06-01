import { useEffect, useMemo, useState } from 'react'

const dataFiles = {
  profile: '../data/profile.json',
  skills: '../data/skills.json',
  projects: '../data/projects.json',
  certifications: '../data/certifications.json',
  blog: '../data/blog.json',
  socials: '../data/socials.json',
  experience: '../data/experience.json',
}

const dataLoaders = import.meta.glob('../data/*.json')

const validateData = (name, data, fallback) => {
  if (data == null) {
    console.warn(`Missing ${name} data.`)
    return fallback
  }

  if (Array.isArray(data) && data.length === 0) {
    console.warn(`${name} data is empty.`)
    return fallback
  }

  if (typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 0) {
    console.warn(`${name} data is empty.`)
    return fallback
  }

  return data
}

export const usePortfolioData = () => {
  const [data, setData] = useState({
    profile: null,
    skills: [],
    projects: [],
    certifications: [],
    blog: [],
    socials: [],
    experience: { experiences: [], education: [] },
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const loadFiles = async () => {
      try {
        const entries = await Promise.all(
          Object.entries(dataFiles).map(async ([key, path]) => {
            const loader = dataLoaders[path]
            if (!loader) {
              throw new Error(`Unable to locate data file: ${path}`)
            }
            const module = await loader()
            return [key, module.default ?? module]
          })
        )

        if (!cancelled) {
          const loaded = Object.fromEntries(entries)
          setData({
            profile: validateData('profile', loaded.profile, {}),
            skills: validateData('skills', loaded.skills, []),
            projects: validateData('projects', loaded.projects, []),
            certifications: validateData('certifications', loaded.certifications, []),
            blog: validateData('blog', loaded.blog, []),
            socials: validateData('socials', loaded.socials, []),
            experience: validateData('experience', loaded.experience, { experiences: [], education: [] }),
          })
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err)
          setError(err.message)
          setLoading(false)
        }
      }
    }

    loadFiles()

    return () => {
      cancelled = true
    }
  }, [])

  return useMemo(() => ({
    ...data,
    loading,
    error,
  }), [data, loading, error])
}
