import React from "react";
import resume from "./assets/resume.pdf";
import "./style.css";

export const Header = () => {
  return (
    <nav>
      <p>Lukas</p>
      <div id="nav-links">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a id="resume" href={resume}>Resume</a>
      </div>
      <button id="nav-toggle"></button>
    </nav>
  );
};

export default Header;
