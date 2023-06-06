import React from 'react';
import ContactForm from '../../components/ContactForm';
import './style.css';

export const Contact = (props) => {
	return (
		<section id="contact-section">
			<h2>What's Next?</h2>
			<button className="contact-button" onClick={props.showForm}>
				Contact Me!
			</button>
			<ContactForm />
		</section>
	);
};

export default Contact;
