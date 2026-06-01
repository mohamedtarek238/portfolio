const projectModules = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', { query: '?url', import: 'default', eager: true })
const certificationModules = import.meta.glob('../assets/certifications/*.{png,jpg,jpeg,webp,svg}', { query: '?url', import: 'default', eager: true })

const normalizedProjectAssets = Object.entries(projectModules).reduce((map, [path, url]) => {
  const fileName = path.split('/').pop()
  map[fileName] = url
  return map
}, {})

const normalizedCertificationAssets = Object.entries(certificationModules).reduce((map, [path, url]) => {
  const fileName = path.split('/').pop()
  map[fileName] = url
  return map
}, {})

export const getProjectImageUrl = (imageName) => {
  if (!imageName) return null
  return normalizedProjectAssets[imageName] || null
}

export const getCertificationImageUrl = (imageName) => {
  if (!imageName) return null
  return normalizedCertificationAssets[imageName] || null
}
