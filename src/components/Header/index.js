import React from 'react';
import exit from './assets/exit.png';
import menu from './assets/menu.png';
import resume from './assets/resume.pdf';
import './style.css';

export const Header = () => {
	async function displayNav() {
		const nav = document.querySelector('#nav-links');
		const exitBtn = document.querySelector('#nav-close');
		const menuBtn = document.querySelector('#nav-open');
		nav.setAttribute('style', 'transform: translateX(0);');
		menuBtn.setAttribute('style', 'display: none;');
		exitBtn.setAttribute('style', 'display: block;');
	}

	function hideNav() {
		const nav = document.querySelector('#nav-links');
		const exitBtn = document.querySelector('#nav-close');
		const menuBtn = document.querySelector('#nav-open');
		nav.setAttribute('style', 'transform: translateX(100%);');
		menuBtn.setAttribute('style', 'display: block;');
		exitBtn.setAttribute('style', 'display: none;');
	}

	function hideForm() {
		const contactForm = document.querySelector('#contactForm');
		contactForm.setAttribute('style', 'transform: translateX(100%);');

		document
			.querySelector('#body-wrap')
			.setAttribute('style', 'max-height: 0; min-height: 100vh;');

		document
			.querySelector('#nav-open')
			.setAttribute('style', 'display: block;');

		document
			.querySelector('#form-close')
			.setAttribute('style', 'display: none;');
	}

	return (
		<nav id="#header">
			<a href="#home-wrap">
				<p>Logo</p>
			</a>
			<div id="nav-links">
				<a id="first-link" href="#about">
					About
				</a>
				<a href="#projects">Projects</a>
				<a href="#contact-section">Contact</a>
				<a id="resume" href={resume} target="_blank" rel="noreferrer">
					Resume
				</a>
			</div>
			<img
				id="nav-open"
				onClick={displayNav}
				src={menu}
				alt="hamburger button to open the nav on mobile"
			></img>
			<img
				id="nav-close"
				onClick={hideNav}
				src={exit}
				alt="An X to close the nav on mobile"
			></img>
			<img
				id="form-close"
				onClick={hideForm}
				src={exit}
				alt="An X to close the nav on mobile"
			></img>
		</nav>
	);
};

export default Header;
