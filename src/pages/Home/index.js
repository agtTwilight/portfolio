import portrait from "./assets/portrait.png";
import React from "react";
import "./style.css";

export const Home = () => {
  return (
    <section id="home-wrap">
      <h2>Hi, I'm Lukas</h2>
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
      {/* <section id="bottom-home">
        <div id="bottom-home-left">
            <h2>Highlights:</h2>
        </div>
        <div id="bottom-home-right">
          <img id="portrait" src={portrait} alt="Portrait of Lukas"></img>
          <div id="home-buttons">
            <button>About Me</button>
            <button>Contact Me</button>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default Home;
