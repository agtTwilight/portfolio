import React from 'react';
import HighlightProject from '../../components/HighlightProject';
import Project from '../../components/Project';
import './style.css';

export const Projects = () => {
	return (
		<section id="projects">
			<h2>Project Highlights</h2>
			<div id="highlight-projects">
				<HighlightProject />
				<HighlightProject />
				<HighlightProject />
			</div>
			<section id="projects-lower">
				<h2>Other Projects</h2>
				<div id="extra-projects">
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</section>
		</section>
	);
};

export default Projects;
