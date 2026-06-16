import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'
import { getCertificationImageUrl } from '../hooks/useProjectAssets'

const Certifications = () => {
  const { certifications } = usePortfolio()
  console.log('Certifications:', certifications) // Debugging line to check the certifications data

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
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader title="Certifications" />
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
              className="group glass rounded-lg p-6 cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-secondary" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-accent-cyan text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>

                <FiArrowRight className="text-accent-cyan mt-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Continuously pursuing professional development and staying updated with industry standards.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications
