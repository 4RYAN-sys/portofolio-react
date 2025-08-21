import React from "react";
import Skills from "../components/Skills"; 
import "../styles/Skills.css"; 

export default function SkillsPage() {
  return (
    <section id="skills" className="skills-page">
      <div className="skills-inner card">
        <h2>My Skills</h2>
        <Skills />
      </div>
    </section>
  );
}
