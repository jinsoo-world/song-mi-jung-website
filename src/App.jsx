import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import RepresentativeSection from './components/RepresentativeSection'
import ServicesSection from './components/ServicesSection'
import InstructorsSection from './components/InstructorsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="app">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="main-content">
        <Hero />
        <ServicesSection />
        <InstructorsSection />
        <AboutSection />
        <RepresentativeSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
