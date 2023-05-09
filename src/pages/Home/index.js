import downarrow from "./assets/downarrow.png"
import React from "react";
import "./style.css";

export const Home = (props) => {

    const handleUnderlineShow = () => {
        document.querySelector("#underline")
            .setAttribute("style", "width: 76%;");
    }

    const handleUnderlineHide = () => {
        document.querySelector("#underline")
            .setAttribute("style", "width: 0");
    }

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
        <button onClick={props.showForm}>Contact Me</button>
        <a href="#projects" onMouseOver={handleUnderlineShow} onMouseOut={handleUnderlineHide}>
            <img src={downarrow} alt="An arrow facing downward."></img>
            <p>See my work</p>
            <hr id="underline"></hr>
        </a>
      </section>
    </section>
  );
};

export default Home;
