import "../styles/Skills.css";
import { FaReact, FaJava, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiVite, SiJavascript, SiHtml5, SiCss3, SiDotnet, SiCanva, SiFigma, SiVercel, SiNetlify } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Vite", icon: <SiVite color="#BD34FE" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "C#", icon: <SiDotnet color="#239120" /> },
    { name: "Java", icon: <FaJava color="#E76F00" /> },
    { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
    { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
    { name: "Vercel", icon: <SiVercel color="#fff" /> },
    { name: "GitHub", icon: <FaGithub color="#fff" /> },
    { name: "GitLab", icon: <FaGitlab color="#FC6D26" /> },
    { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">MY SKILLS</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div style={{ fontSize: "2rem" }}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
