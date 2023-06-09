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

	return (
		<nav id="#header">
			<a href="#home" onClick={hideNav}>
				<p>Logo</p>
			</a>
			<div id="nav-links" onClick={hideNav}>
				<a id="first-link" href="#about">
					About
				</a>
				<a href="#projects" onClick={hideNav}>
					Projects
				</a>
				<a href="#contact" onClick={hideNav}>
					Contact
				</a>
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
		</nav>
	);
};

export default Header;
