import React from "react";
import { FaReact, FaJsSquare, FaUnity, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiCanva, SiVite, SiCsharp } from "react-icons/si";
import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "JavaScript", icon: <FaJsSquare className="icon js" /> },
    { name: "C#", icon: <SiCsharp className="icon csharp" /> },
    { name: "Unity", icon: <FaUnity className="icon unity" /> },
    { name: "Git", icon: <FaGitAlt className="icon git" /> },
    { name: "Github", icon: <FaGithub className="icon github" /> },
    { name: "Canva", icon: <SiCanva className="icon canva" /> },
    { name: "Figma", icon: <FaFigma className="icon figma" /> },
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "Vite", icon: <SiVite className="icon vite" /> },
    { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  ];

  return (
    <div className="skills card">
      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map((s) => (
          <span key={s.name} className="chip">
            {s.icon} {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
