import React from 'react';
import downarrow from './assets/downarrow.png';
import './style.css';
// TODO get another downarrow image and change between correct color on hover.
export const Home = () => {
	return (
		<section id="home">
			<h2>Lukas MacMillen</h2>
			<h1 id="rotating-text">Full Stack Developer</h1>
			<p id="elevator-pitch">
				I am a Seattle-based Full Stack Developer and Data Scientist. I
				specialize in developing API surfaces, databases, and internal
				applications.
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
