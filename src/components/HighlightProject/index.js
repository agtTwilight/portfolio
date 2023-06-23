import React from 'react';
import github from './assets/github.png';
import link from './assets/link.png';
import './style.css';

export const HighlightProject = (props) => {
	return (
		<section className="highlight-card">
			<div className="highlight-content">
				<h2 className="highlight-title">{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<ul className="tech-list">
				{props.techUsed.map((tech, index) => {
					return <li key={index}>{tech}</li>;
				})}
			</ul>
			<div className="highlight-links">
				<a href={props.github} target="_blank" rel="noreferrer">
					<img src={github} alt="the github logo"></img>
				</a>
				<a href={props.deployed} target="_blank" rel="noreferrer">
					<img src={link} alt="an external link"></img>
				</a>
			</div>
		</section>
	);
};

export default HighlightProject;
