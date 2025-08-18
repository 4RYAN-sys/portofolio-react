import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/info"><button>Info</button></Link>
      <Link to="/skills"><button>Skills</button></Link>
    </nav>
  );
};

export default Navbar;
