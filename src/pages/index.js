import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import React from "react";

export const Pages = () => {
  function showForm() {
    const contactForm = document.querySelector("#contactForm");
    if (window.screen.width < 1000) {
      contactForm.setAttribute("style", "transform: translateX(0);");
      document
        .querySelector("#body-wrap")
        .setAttribute(
          "style",
          "max-height: calc(100vh - 12rem); min-height: 0;"
        );

      document
        .querySelector("#nav-open")
        .setAttribute("style", "display: none;");

      document
        .querySelector("#form-close")
        .setAttribute("style", "display: block;");
    } else {
        contactForm.setAttribute('style', 'transform: translateX(0);');
    }
  }
  return (
    <section>
      <Home showForm={showForm} />
      <About />
      <Projects />
      <Contact showForm={showForm} />
    </section>
  );
};

export default Pages;
