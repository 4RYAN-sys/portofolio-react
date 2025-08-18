import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfilePic from "./components/ProfilePic";

import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Skills from "./components/Skills"; 

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Profile Picture selalu ada di tengah */}
      <ProfilePic />

      {/* Bagian konten berubah-ubah */}
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
