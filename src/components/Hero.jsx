import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi'
import { usePortfolio } from '../context/PortfolioContext'
import { getCvUrl } from '../hooks/useCvUrl'

const Hero = () => {
  const { profile } = usePortfolio()
  const cvUrl = getCvUrl()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleScroll = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    if (!cvUrl) {
      console.warn('CV file not found in src/assets/cv/')
      return
    }

    const link = document.createElement('a')
    link.href = cvUrl
    link.download = cvUrl.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-purple opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-accent-cyan text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">{profile?.name}</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light">
          {profile?.title}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12 text-accent-cyan text-lg"
        >
          {profile?.techStack?.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-lg glass">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {profile?.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="group px-8 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-bg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-blue/50 transition-all"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleDownloadCV}
            className="group px-8 py-3 rounded-lg glass text-accent-cyan font-semibold flex items-center justify-center gap-2 hover:border-accent-cyan border-2 border-transparent transition-all"
          >
            Download CV
            <FiDownload className="group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScroll('#contact')}
            className="group px-8 py-3 rounded-lg glass text-accent-cyan font-semibold flex items-center justify-center gap-2 hover:border-accent-cyan border-2 border-transparent transition-all"
          >
            Contact Me
            <FiMail className="group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-accent-cyan"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
