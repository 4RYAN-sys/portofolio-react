import React from 'react'
import '../styles/Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} A.P.S — crafted with focus.</div>
        <div className="social small">Made with ❤️ </div>
      </div>
    </footer>
  )
}
