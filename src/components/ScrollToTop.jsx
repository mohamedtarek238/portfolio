import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-bg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="text-2xl" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
