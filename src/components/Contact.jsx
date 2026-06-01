import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { usePortfolio } from '../context/PortfolioContext'
import { getIconByName } from '../utils/iconMap'

const Contact = () => {
  const { profile, socials } = usePortfolio()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: 'FiMail',
      label: 'Email',
      value: profile?.email,
      href: profile?.email ? `mailto:${profile.email}` : '#',
    },
    profile?.phone
      ? {
          icon: 'FiPhone',
          label: 'Phone',
          value: profile.phone,
          href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`,
        }
      : null,
    profile?.linkedin
      ? {
          icon: 'FiLinkedin',
          label: 'LinkedIn',
          value: profile.linkedin,
          href: profile.linkedin,
        }
      : null,
    profile?.github
      ? {
          icon: 'FiGithub',
          label: 'GitHub',
          value: profile.github,
          href: profile.github,
        }
      : null,
  ].filter(Boolean)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
          <SectionHeader title="Get In Touch" subtitle={profile?.contactText} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            {contactMethods.map((method, index) => {
              const IconComponent = getIconByName(method.icon)
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="glass rounded-lg p-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                      <IconComponent className="text-2xl text-dark-bg" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{method.label}</h4>
                      <p className="text-accent-cyan group-hover:text-accent-blue transition-colors">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const IconComponent = getIconByName(social.icon)
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                      className="p-3 rounded-lg glass text-accent-cyan hover:text-accent-blue hover:border-accent-cyan border-2 border-transparent transition-all"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-2xl" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary text-white border border-gray-700 focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary text-white border border-gray-700 focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary text-white border border-gray-700 focus:border-accent-cyan focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary text-white border border-gray-700 focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan text-dark-bg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>

            {submitted && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 rounded-lg bg-green-500/20 text-green-400 text-sm text-center">
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
