import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'

const Experience = () => {
  const { experience } = usePortfolio()
  const experiences = experience?.experiences || []
  const education = experience?.education || []

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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader title="Experience" />
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="relative"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-accent-cyan to-transparent" />
              )}

              <div className="glass rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan">
                    <FiBriefcase className="text-2xl text-dark-bg" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-accent-cyan text-lg">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.responsibilities?.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <FiCheckCircle className="text-accent-cyan flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FiBriefcase className="text-accent-cyan" />
            Education & Training
          </h3>
          <div className="glass rounded-lg p-8">
            <ul className="space-y-3 text-gray-300">
              {education.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-accent-cyan flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
