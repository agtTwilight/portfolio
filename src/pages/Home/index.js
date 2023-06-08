import React from 'react';
import downarrow from './assets/downarrow.png';
import './style.css';
// TODO get another downarrow image and change between correct color on hover.
export const Home = (props) => {
	return (
		<section id="home">
			<h2>(logo) Lukas MacMillen</h2>
			<h1 id="rotating-text">Full-Stack Developer</h1>
			<p id="elevator-pitch">
				I am a Seattle-based software developer trained in Full-Stack
				Development and Data Science. I currently specialize in developing API
				surfaces and Back-End infrastructures.
			</p>
			<section id="home-buttons">
				<a href="#contact">
					<button id="contact-button">Contact Me</button>
				</a>
				<a id="underlined-btn" href="#projects">
					<img src={downarrow} alt="An arrow facing downward."></img>
					<p>See my work</p>
				</a>
			</section>
		</section>
	);
};

export default Home;
