import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className="py-24 text-center text-red-400">
      <p className="font-semibold">Unable to load portfolio data.</p>
      <p className="mt-2 text-sm text-gray-300">{message}</p>
    </div>
  )
}

export default ErrorMessage
