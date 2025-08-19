import React from 'react'
import Skills from '../components/Skills'
import '../styles/About.css'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="about-inner card">
        <h2>About me</h2>
        <p className="small">
         Saya suka nonton film dengar musik, dan bermain game.
         Saya ada quote yang saya suka yaitu "As long as we are under the same sky, we should not be sad when we part,"
        </p>
        <div className="split">
          <div>
            <h4>What I do</h4>
            <ul>
              <li>UI/UX design</li>
              <li>Web development</li>

            </ul>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  )
}
