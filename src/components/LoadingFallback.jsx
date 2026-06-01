import React from 'react'

const LoadingFallback = ({ message = 'Loading content...' }) => {
  return (
    <div className="py-24 text-center text-gray-400">
      <p>{message}</p>
    </div>
  )
}

export default LoadingFallback
