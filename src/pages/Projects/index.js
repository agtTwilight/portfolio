import React from 'react';
import HighlightProject from '../../components/HighlightProject';
import Project from '../../components/Project';
import data from './data';
import './style.css';

export const Projects = () => {
	return (
		<section id="projects">
			<h2>Project Highlights</h2>
			<div id="highlight-projects">
				{data.highlights.map((project, index) => {
					return (
						<HighlightProject
							key={index}
							title={project.title}
							description={project.description}
							techUsed={project.techUsed}
							github={project.github}
							deployed={project.deployed}
						/>
					);
				})}
			</div>
			<section id="projects-lower">
				<h2>Other Projects</h2>
				<div id="extra-projects">
					{data.noteworthy.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								description={project.description}
								techUsed={project.techUsed}
								github={project.github}
							/>
						);
					})}
				</div>
			</section>
		</section>
	);
};

export default Projects;
