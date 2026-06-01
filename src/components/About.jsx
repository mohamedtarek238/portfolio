import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'
import { getIconByName } from '../utils/iconMap'

const About = () => {
  const { profile } = usePortfolio()

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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader title="About Me" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">{profile?.about}</p>
            <p className="text-gray-300 text-lg leading-relaxed">My expertise spans across multiple domains including:</p>

            <ul className="space-y-3 text-gray-400">
              {profile?.expertise?.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-accent-cyan">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed pt-4">
              I am committed to continuous learning and staying updated with the latest trends in DevOps and cloud infrastructure. My goal is to contribute to building and maintaining high-performance systems that drive business success.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile?.highlights?.map((highlight, index) => {
              const Icon = getIconByName(highlight.icon)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="glass rounded-lg p-6 group cursor-pointer"
                >
                  <Icon className="text-accent-cyan text-3xl mb-4 group-hover:text-accent-blue transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
