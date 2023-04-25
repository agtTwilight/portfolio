import arrowdown from "./assets/arrowdown.png"
import React from "react";
import "./style.css";

export const Home = () => {
  return (
    <section id="home-wrap">
      <h2>(logo) Lukas MacMillen</h2>
      <section id="rotating-text-container">
        <h1 id="rotating-text">
          Full-Stack Developer
          <br />
          Back-End Specialist
          <br />
          &amp; Data Scientist
        </h1>
      </section>
      <p id="elevator-pitch">
        I am a Seattle-based software developer trained in Full-Stack
        Development and Data Science. I'm specializing in, and focused on,
        developing API surfaces and Back-End infrastructures.
      </p>
      <section id="home-buttons">
        <button>Contact</button>
        <a href="#projects">
            <img src={arrowdown} alt="An arrow facing downward."></img>
            <p>See my work</p>
        </a>
      </section>
    </section>
  );
};

export default Home;
