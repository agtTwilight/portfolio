import emailjs from "@emailjs/browser";
import exit from "../../components/Header/assets/exit.png";
import React, { useEffect, useRef } from "react";
import "./style.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // TODO add .env file
    emailjs
      .sendForm(
        "service_zo7n8zv",
        "template_3qonnuo",
        form.current,
        "qAGcWm6fIZZLN4Dsa"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target) && document.querySelector("#contactForm").style.transform && window.screen.width > 999) {
      hideForm();
    }
  };

  function hideForm() {
    document
      .querySelector("#contactForm")
      .setAttribute("style", "transform: translateX(100);");
  }

  return (
    <section id="form-ref" ref={refOne}>
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <img
          id="form-close-desktop"
          onClick={hideForm}
          src={exit}
          alt="An X to close the nav on mobile"
        ></img>
        <h2>Get In Touch!</h2>
        <section id="contactInputs">
          <div>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email" />
          </div>
          <textarea name="message" placeholder="Type your message here" />
        </section>
        <input id="contactBtn" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default ContactForm;
