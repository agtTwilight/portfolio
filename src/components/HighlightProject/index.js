import React from 'react';
import github from './assets/github.png';
import link from './assets/link.png';
import './style.css';

export const HighlightProject = () => {
	return (
		<section className="highlight-card">
			<div className="highlight-content">
				<h2 className="highlight-title">Projct Title</h2>
				<p>A brief description of the project</p>
				<ul className="tech-list">
					<li>HTML</li>
					<li>CSS</li>
					<li>JavScript</li>
				</ul>
			</div>
			<div className="highlight-links">
				<a>
					<img src={github} alt="the github logo"></img>
				</a>
				<a>
					<img src={link} alt="an external link"></img>
				</a>
			</div>
		</section>
	);
};

export default HighlightProject;
