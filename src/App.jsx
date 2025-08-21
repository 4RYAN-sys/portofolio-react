import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Skills from './components/Skills'
import './App.css'
import SkillsPage from './pages/SkillsPage'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <SkillsPage />
        <Info />
      </main>
      <Footer />
    </div>
  )
}
