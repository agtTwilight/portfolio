import React from 'react'
import "./style.css"

export const Home = () => {
  return (
    <section id='home-wrap'>
        <h2>Hi, I'm Lukas</h2>
        <section id='rotating-text-container'>
            <h1 id='rotating-text'>Full-Stack Developer<br />
                Back-End Specialist<br />
                &amp;
                Data Scientist
            </h1>
        </section>
    </section>
  )
}

export default Home;