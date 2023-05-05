import React from 'react'
import ContactForm from '../../components/ContactForm'
import './style.css'

export const Contact = () => {
    function showForm() {
        const contactForm = document.querySelector('#contactForm');
        contactForm.setAttribute('style', 'transform: translateX(0);');
      }

  return (
    <section id='contact-section'>
        <h2>What's Next?</h2>
        <button onClick={showForm}>Contact Me!</button>
        <ContactForm />
    </section>
  )
}

export default Contact;
