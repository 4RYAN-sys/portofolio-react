import React from 'react'
import '../styles/Navbar.css'

export default function Navbar(){
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <div className="brand">A.P.S<span className="dot">.</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#info">Info</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  )
}
