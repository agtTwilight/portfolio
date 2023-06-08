import React from 'react';
import collaboration from './assets/collaboration.png';
import documentation from './assets/documentation.png';
import innovation from './assets/innovation.png';
import './style.css';

export const About = () => {
	return (
		<section id="about">
			<section id="about-top">
				<div id="about-hook">
					<h2>From Research to Development</h2>
					<p>
						Hello, my name is Lukas. I like to build API surfaces, full-stack
						applications, and dabble in data analysis. I found my passion for
						programming during my time as a research scientist, where I used
						Python, MATLAB, and R to analyze genetic and neurobiological data
						sets.
						<br></br>
						<br></br>
						I've transitioned into software development to code full-time,
						further study system design, and build efficient back-end
						infrastructures to sustain phenomanal end user experiences. I'm
						currently looking for a role that will help me develop into a mentor
						within the field.
					</p>
				</div>
				<div id="about-img-box">
					<img id="about-img" src="" alt=""></img>
					<p id="dot1"></p>
					<p id="dot2"></p>
				</div>
				<div id="about-bg-box"></div>
			</section>
			<h2 id="values">Core Values:</h2>
			<section id="about-bottom">
				<div>
					<img src={collaboration} alt=""></img>
					<h3>Collaboration</h3>
					<p>Mentoring one another</p>
				</div>
				<div>
					<img src={innovation} alt=""></img>
					<h3>Innovation</h3>
					<p>Researching new ideas</p>
				</div>
				<div>
					<img src={documentation} alt=""></img>
					<h3>Documentaion</h3>
					<p>Communicting our work</p>
				</div>
			</section>
		</section>
	);
};

export default About;
