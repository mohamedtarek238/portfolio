import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { usePortfolio } from '../context/PortfolioContext'
import { getIconByName } from '../utils/iconMap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { profile, socials } = usePortfolio()

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden bg-dark-secondary/50 backdrop-blur-lg border-t border-gray-700">
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-purple opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">{profile?.name}</h3>
              <p className="text-gray-400 mb-4">{profile?.title}</p>
              <p className="text-gray-500 text-sm">Building scalable infrastructure and automating workflows.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleClick(link.href)
                      }}
                      className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2"
                    >
                      <FiExternalLink className="text-xs" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const IconComponent = getIconByName(social.icon)
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                      className="p-3 rounded-lg glass text-accent-cyan hover:text-accent-blue hover:border-accent-cyan border-2 border-transparent transition-all"
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-20" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
            <p className="text-gray-500 text-sm">© {currentYear} {profile?.name}. All Rights Reserved.</p>

            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Sitemap
              </a>
            </div>

            <p className="text-gray-500 text-sm">Crafted with passion using React & Tailwind</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
