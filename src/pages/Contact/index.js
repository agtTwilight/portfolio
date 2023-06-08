import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './style.css';

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		// TODO add .env file
		emailjs
			.sendForm(
				'service_zo7n8zv',
				'template_3qonnuo',
				form.current,
				'qAGcWm6fIZZLN4Dsa'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const refOne = useRef(null);
	return (
		<section id="contact">
			<section id="form-ref" ref={refOne}>
				<form id="contactForm" ref={form} onSubmit={sendEmail}>
					<section id="contactTop">
						<h2>Send me a message!</h2>
						<p>
							Have any questions or want to collaborate? My inbox is always
							open.
						</p>
					</section>
					<section id="contactInputs">
						<div id="contactInfo">
							<div className="inputContainer">
								<label for="name">Your Name</label>
								<input
									id="name"
									type="text"
									name="user_name"
									placeholder="Enter your name"
								/>
							</div>
							<div className="inputContainer">
								<label for="email">Your Email</label>
								<input
									id="email"
									type="email"
									name="user_email"
									placeholder="Enter your email address"
								/>
							</div>
						</div>
						<div className="inputContainer">
							<label for="message">Your Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Hi Lukas, we need an API surface for our application. When are you available to discuss ERD design and implementation?"
							/>
						</div>
					</section>
					<input id="contactBtn" type="submit" value="Send" />
				</form>
			</section>
		</section>
	);
};

export default Contact;
