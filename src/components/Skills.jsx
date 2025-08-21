import React from 'react'
import '../styles/Skills.css'

export default function Skills(){
  const skills = ['React','JavaScript','C#','Unity','Git','Github','Canva', 'Figma', 'Html', 'Css', 'vite', 'Node.js', ]
  return (
    <div className="skills card">
      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map(s => <span key={s} className="chip">{s}</span>)}
      </div>
    </div>
  )
}
