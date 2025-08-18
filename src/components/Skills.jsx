import "../styles/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiJavascript, SiVite, SiFigma, SiCanva, SiVercel, SiGithub, SiGitlab, SiNetlify } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

export default function Skills() {
  return (
    <div className="page skills">
      <h1>💻 Tech Stack</h1>
      <p>Bahasa pemrograman & tools yang pernah saya pelajari:</p>
      <div className="skills-icons">
        <div className="skill-item"><FaHtml5 color="#e34f26" size={50}/> <p>HTML5</p></div>
        <div className="skill-item"><FaCss3Alt color="#1572b6" size={50}/> <p>CSS3</p></div>
        <div className="skill-item"><SiJavascript color="#f7df1e" size={50}/> <p>JavaScript</p></div>
        <div className="skill-item"><FaReact color="#61dafb" size={50}/> <p>React</p></div>
        <div className="skill-item"><SiVite color="#646cff" size={50}/> <p>Vite</p></div>
        <div className="skill-item"><FaGitAlt color="#f34f29" size={50}/> <p>Git</p></div>
        <div className="skill-item"><SiCsharp color="#9b4f96" size={50}/> <p>C#</p></div>
        <div className="skill-item"><FaJava color="#f89820" size={50}/> <p>Java</p></div>
        <div className="skill-item"><SiCanva color="#00c4cc" size={50}/> <p>Canva</p></div>
        <div className="skill-item"><SiFigma color="#f24e1e" size={50}/> <p>Figma</p></div>
        <div className="skill-item"><SiVercel color="#000000" size={50}/> <p>Vercel</p></div>
        <div className="skill-item"><SiGithub color="#ffffff" size={50}/> <p>GitHub</p></div>
        <div className="skill-item"><SiGitlab color="#fc6d26" size={50}/> <p>GitLab</p></div>
        <div className="skill-item"><SiNetlify color="#00c7b7" size={50}/> <p>Netlify</p></div>
      </div>
    </div>
  );
}
