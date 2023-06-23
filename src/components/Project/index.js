import React from 'react';
import './style.css';

export const Project = (props) => {
	return (
		<a href={props.github}>
			<section className="project-card">
				{/* <img></img> */}
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<ul className="tech-used">
					{props.techUsed.map((tech, index) => {
						return <li key={index}>{tech}</li>;
					})}
				</ul>
			</section>
		</a>
	);
};

export default Project;
