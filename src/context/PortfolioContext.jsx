import React, { createContext, useContext } from 'react'
import { usePortfolioData } from '../hooks/usePortfolioData'

const PortfolioContext = createContext(null)

export const PortfolioProvider = ({ children }) => {
  const portfolio = usePortfolioData()

  return <PortfolioContext.Provider value={portfolio}>{children}</PortfolioContext.Provider>
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}
