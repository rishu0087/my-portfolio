import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_koy0mf4', 'template_7eouwz9', form.current, 'LNeNIhvhx3sCS04cd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>E-mail</h4>
            <h5>rishabhagrawal0087@gmail.com</h5>
            <a href="mailto:rishabhagrawal0087@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsMessenger />
            <h4>Messanger</h4>
            <a href="https://www.facebook.com/profile.php?id=100007612787455" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+91-9106717215</h5>
            <a href="https://api.whatsapp.com/send?phone=919106717215" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your E-mail' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact