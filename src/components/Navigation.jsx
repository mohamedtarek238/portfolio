import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePortfolio } from '../context/PortfolioContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { profile } = usePortfolio()
  const initials = profile?.name?.split(' ').map((part) => part.charAt(0)).join('') || 'MT'

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold gradient-text">{initials}</h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-cyan-300 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 glass-dark">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleClick(item.href)
              }}
              className="block px-3 py-2 rounded-md text-base text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation
