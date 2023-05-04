import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import React from "react";

export const Pages = () => {
  return (
    <section>
      <Home />
      <About />
      <Projects />
      <Contact />
    </section>
  );
};

export default Pages;
