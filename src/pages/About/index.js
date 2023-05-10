import React from "react";
import "./style.css";

export const About = () => {
  return (
    <section id="about">
      <section id="about-top">
        <div id="about-hook">
          <h2>From Research to Development</h2>
          <p>
            Hello! My name is Lukas, I like to build API surfaces, full-stack
            applications, and occasionally dabble in data analysis. My interest
            in development started after being introduced to programming and
            data analysis in Python and MATLAB during my last year of undergrad.
            I graduated from the University of Oregon with a B.S. in Biology, a
            yearning to code, and a year of{" "}
            <a
              href="https://nadiasinghlab.org/"
              target="_blank"
              rel="noreferrer"
            >
              post-bac resarch
            </a>{" "}
            ahead of me. That year, I got to handle data analysis for the
            project I was working on, and started learning the fundamentals of
            web development. Towards the end of my post-bac research, I
            registered for a coding bootcamp at the University of Washington to
            continue pursuing my passions for development. I completed my
            bootcamp in early 2023, and I'm currently looking for work as a
            full-stack developer specializing in building back-end
            infrastructures.<br></br>
            <br></br>I love working on small to medium size teams that regularly
            work cross-functionally between teams. I find these team sizes to be
            perfect for sustaining a welcoming work environment where being
            engaged is easy, and asking for mentorship is even easier. I want to
            help build teams that work together wherever I can.
          </p>
        </div>
        <div id="about-img-box">
          <img id="about-img" src="" alt=""></img>
          <p id="dot1"></p>
          <p id="dot2"></p>
        </div>
        <div id="about-bg-box"></div>
      </section>
      <section id="about-bottom">
        <h2>Two Things I'll Bring to Your Team</h2>
        <section id="about-things">
          <section id="thing1">
            <h3>Thing 1</h3>
            <p></p>
          </section>
          <div id="about-bottom-line"></div>
          <section id="thing2">
            <h3>Thing 2</h3>
            <p></p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
