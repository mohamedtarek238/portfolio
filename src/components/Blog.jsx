import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiArrowRight, FiTag } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'

const Blog = () => {
  const { blog } = usePortfolio()

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
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader title="Latest Articles" subtitle="Read the latest technical posts on cloud, automation, and security." />
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
          {blog.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group glass rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-secondary/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-accent-cyan" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 h-16">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags?.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex items-center gap-1 px-2 py-1 rounded-md bg-dark-tertiary text-accent-cyan text-xs hover:bg-accent-cyan/20 transition-colors"
                    >
                      <FiTag className="text-xs" />
                      {tag}
                    </div>
                  ))}
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors"
                >
                  <span className="text-sm font-semibold">Read Article</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Blog
