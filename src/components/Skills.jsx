import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", level: "80%" },
    { name: "Vite", level: "80%" },
    { name: "CSS", level: "75%" },
    { name: "JavaScript", level: "75%" },
    { name: "HTML", level: "90%" },
    { name: "Node.js", level: "75%" },
    { name: "Github", level: "90%" },
    { name: "Flutter", level: "10%" },
    { name: "Git", level: "75%" },
    { name: "Vervel, dkk", level: "80%" },
    { name: "Figma", level: "50%" },
    { name: "C#", level: "40%" },
    { name: "Canva", level: "100%" },
    { name: "Java", level: "70%" },
  ];

  return (
    <div className="skills">
      <h3>Skill</h3>
      {skills.map((skill, i) => (
        <div key={i} className="skill-bar">
          <div className="skill-label">{skill.name}</div>
          <div className="skill-progress">
            <span style={{ width: skill.level }}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
