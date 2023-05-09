import ContactForm from "../../components/ContactForm";
import React from "react";
import "./style.css";

export const Contact = (props) => {
    // TODO make a function that closes the contact form when user clicks outside of open form
    // if(window.screen.width >= 1000) {
    //     let count = 0
    //     document.addEventListener("click", (e) => {
    //         if(document.querySelector("#contactForm").style.transform && count === 1) {
    //             document.querySelector("#contactForm").setAttribute('style', 'transform: translateX(100);');
    //             count = 0
    //         } else if(document.querySelector("#contactForm").style.transform) {
    //             count ++
    //         }
    //         console.log(count)
    //     }, {once:true}) 
    // }
  return (
    <section id="contact-section">
      <h2>What's Next?</h2>
      <button onClick={props.showForm}>Contact Me!</button>
      <ContactForm />
    </section>
  );
};

export default Contact;
