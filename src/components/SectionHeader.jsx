import React from 'react'

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto" />
      {subtitle && <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
