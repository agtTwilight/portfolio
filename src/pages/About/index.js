import React from 'react';
import collaboration from './assets/collaboration.png';
import documentation from './assets/documentation.png';
import github from './assets/github.png';
import innovation from './assets/innovation.png';
import linkedin from './assets/linkedin.png';
import './style.css';

export const About = () => {
	return (
		<section id="about">
			<section id="about-top">
				<div id="about-hook">
					<h2>About Me</h2>
					<p>
						Hello, my name is Lukas. I like to build API surfaces, design
						databases, and maintain internal full-stack applications. I found my
						passion for programming during my time as a research scientist,
						where I used Python, MATLAB, and R to analyze genetic and
						neurobiological data sets.
						<br></br>
						<br></br>
						I've transitioned into software development to code full-time,
						further study system design, and build efficient internal
						applications and back-end infrastructures that enhance the developer
						and end user experience. I'm currently looking for a role that will
						help me develop into a mentor within the field, so I can pursue my
						goal of becoming a senior software developer.
						<br></br>
						<br></br>
						When I'm not coding, I like to game, cook, adventure outside, and
						spend time with my partner and our cat, Snickerdoodle. I also love
						to read, and I'm currently taking suggestions for new books!
					</p>
				</div>
				<div id="about-img-box">
					<img id="about-img" src="" alt=""></img>
					<h2 id="temp">Headshot photo coming soon</h2>
					<p id="dot1"></p>
					<p id="dot2"></p>
					<div id="about-links">
						<a
							href="https://github.com/agtTwilight"
							target="_blank"
							rel="noreferrer"
						>
							<img id="about-github" src={github} alt="github logo"></img>
						</a>
						<a
							href="https://www.linkedin.com/in/lukas-macmillen/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedin} alt="linkedin logo"></img>
						</a>
					</div>
				</div>
				<div id="about-bg-box"></div>
			</section>
			<h2 id="values">What I value in a team</h2>
			<section id="about-bottom">
				<div>
					<img src={collaboration} alt=""></img>
					<h3>Collaboration</h3>
					<p>Support, mentorship, and clear communication</p>
				</div>
				<div>
					<img src={innovation} alt=""></img>
					<h3>Innovation</h3>
					<p>Cross-functional teams & research centered design</p>
				</div>
				<div>
					<img src={documentation} alt=""></img>
					<h3>Code Quality</h3>
					<p>Efficiency, documentation, and review</p>
				</div>
			</section>
		</section>
	);
};

export default About;
