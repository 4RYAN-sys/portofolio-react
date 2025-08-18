import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Info.css";

const Info = () => {
  return (
    <div className="info">
      <h2>Hubungi Saya</h2>
      <div className="info-links">
        {/* WhatsApp */}
        <a
          href="https://wa.me/6285746868762"
          target="_blank"
          rel="noopener noreferrer"
          className="info-icon whatsapp"
        >
          <FaWhatsapp size={40} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/4RYAN-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="info-icon github"
        >
          <FaGithub size={40} />
        </a>

        {/* Email */}
        <a
          href="mailto:dragoniczero229@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="info-icon email"
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </div>
  );
};

export default Info;
