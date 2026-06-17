import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { usePortfolio } from '../context/PortfolioContext'
import { getIconByName } from '../utils/iconMap'
import { getProjectImageUrl } from '../hooks/useProjectAssets'
import SectionHeader from './SectionHeader'

const Projects = () => {
  const { projects } = usePortfolio()
  const [activeFilter, setActiveFilter] = useState('Featured')

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map((project) => project.category).filter(Boolean)))
    return ['Featured', 'All', ...uniqueCategories]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    if (activeFilter === 'Featured') {
      return projects.filter((project) => project.featured)
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [projects, activeFilter])
  console.log('Projects:', projects) // Debugging line to check the projects data
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            title="Featured Projects"
            subtitle="Browse real projects built with automation, monitoring, and cloud infrastructure best practices."
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === category
                  ? 'bg-accent-cyan text-dark-bg shadow-lg shadow-cyan-500/20'
                  : 'bg-dark-tertiary text-gray-300 hover:bg-dark-secondary'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div variants={itemVariants} className="text-center text-gray-400 py-12">
            No projects found for this filter.
          </motion.div>
        ) : (
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const imageUrl = getProjectImageUrl(project.image)
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group glass rounded-lg overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
                    {imageUrl ? (
                      <img src={imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : null}
                    <div className="absolute inset-0 bg-dark-secondary/10 group-hover:bg-transparent transition-colors" />
                    {project.featured && (
                      <span className="absolute top-4 left-4 bg-accent-cyan/90 text-dark-bg text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="space-y-2 text-xs text-gray-500 mb-4">
                      {project.problem && (
                        <p>
                          <span className="font-semibold text-gray-300">Problem:</span> {project.problem}
                        </p>
                      )}
                      {project.solution && (
                        <p>
                          <span className="font-semibold text-gray-300">Solution:</span> {project.solution}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => {
                        const TechIcon = getIconByName(tech.icon)
                        return (
                          <div
                            key={techIndex}
                            className="flex items-center gap-1 px-3 py-1 rounded-full bg-dark-tertiary text-accent-cyan text-xs hover:bg-accent-cyan/20 transition-colors"
                          >
                            <TechIcon className="text-sm" />
                            {tech.name}
                          </div>
                        )
                      })}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-700">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-dark-tertiary hover:bg-accent-cyan/20 text-accent-cyan hover:text-white transition-all"
                      >
                        <FiGithub size={16} />
                        <span className="text-sm">GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-dark-tertiary hover:bg-accent-cyan/20 text-accent-cyan hover:text-white transition-all"
                      >
                        <FiExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects
