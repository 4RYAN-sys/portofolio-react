import React from 'react'
import '../styles/Info.css'

export default function Info(){
  const socials = [
    { name: 'WhatsApp', url: 'https://wa.me/6285746868762' },
    { name: 'GitHub', url: 'https://github.com/4RYAN-sys' },
    { name: 'Gmail', url: 'mailto:dragoniczero229@gmail.com' },
  ]

  return (
    <section id="info" className="info">
      <div className="info-card card">
        <h2>Connect with me</h2>
        <div className="grid">
          {socials.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
