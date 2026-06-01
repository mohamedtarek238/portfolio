import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'
import { getIconByName } from '../utils/iconMap'

const Skills = () => {
  const { skills } = usePortfolio()

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          <SectionHeader title="Technical Skills" />
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-accent-cyan mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = getIconByName(skill.icon)
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover="hover"
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-dark-tertiary hover:bg-gradient-to-br hover:from-accent-blue/20 hover:to-accent-cyan/20 transition-all cursor-pointer group"
                    >
                      <SkillIcon className="text-3xl text-accent-cyan mb-2 group-hover:text-accent-blue transition-colors" />
                      <p className="text-sm text-gray-300 text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
