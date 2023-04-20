import menu from "./assets/menu.png"
import React from "react";
import resume from "./assets/resume.pdf";
import "./style.css";

export const Header = () => {
    async function displayNav() {
        const nav = document.querySelector("#nav-links");
        nav.setAttribute("style", "transform: translateX(0);");
        hideNav(nav);
    }

    function hideNav(nav) {
        document.addEventListener("click", (e) => {
            if(window.screen.width <= 576) {
                if(!nav.contains(e.target) && e.target !== document.querySelector("#nav-toggle")) {
                    nav.setAttribute("style", "transform: translateX(100%);")
                }
            }
        });
    }

  return (
    <nav>
      <p>Lukas</p>
      <div id="nav-links">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a id="resume" href={resume}>Resume</a>
      </div>
      <img id="nav-toggle" onClick={displayNav} src={menu} alt="hamburger button"></img>
    </nav>
  );
};

export default Header;
