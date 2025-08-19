import React from 'react'
import ProfilePic from '../components/ProfilePic'
import '../styles/Home.css'

export default function Home(){
  return (
    <section id="home" className="home">
      <div className="home-grid container">
        <div className="hero card">
          <div className="intro">
            <small className="small">Hello, Iam Aryan —</small>
            <h1>ARYAN PRATAMA SUSANTO</h1>
            <p className="small">
              Seorang siswa SMKN 8 MALANG yang sedang belajar RPL. 
            </p>
            <div className="cta">
              <a href="#about" className="btn">About me</a>
              <a href="#info" className="btn ghost">Infooo</a>
            </div>
          </div>
        </div>
        <aside className="side">
          <ProfilePic />
        </aside>
      </div>
    </section>
  )
}
