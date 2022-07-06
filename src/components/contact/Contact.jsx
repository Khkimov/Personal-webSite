import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fabaf7g', 'template_6uyhkwe', form.current, 'bQLwenvccnFw8Fqbm')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>khakim198765@gmail.com</h5>
            <a href="mailto:khakim198765@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@ilyas_khakimov</h5>
            <a href="https://t.me/ilyas_khakimov" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79080821181</h5>
            <a href="https://api.whatsapp.com/send?phone=+79080821181" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
