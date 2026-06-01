import React, { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LoadingFallback from './components/LoadingFallback'
import ErrorMessage from './components/ErrorMessage'
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Experience = lazy(() => import('./components/Experience'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

const AppContent = () => {
  const { loading, error } = usePortfolio()

  if (loading) {
    return <LoadingFallback />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <main>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Blog />
        <Contact />
      </Suspense>
    </main>
  )
}

function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-dark-bg text-white">
        <Navigation />
        <AppContent />
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </PortfolioProvider>
  )
}

export default App
