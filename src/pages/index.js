import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

export const Pages = () => {
	return (
		<section id="all-pages">
			<Home />
			<About />
			<Projects />
			<Contact />
		</section>
	);
};

export default Pages;
