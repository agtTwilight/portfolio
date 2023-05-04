import React from 'react'
import ContactForm from '../../components/ContactForm'
import './style.css'

export const Contact = () => {
  return (
    <section id='contact-section'>
        <h2>What's Next?</h2>
        <button>Contact Me!</button>
        <ContactForm />
    </section>
  )
}

export default Contact;
