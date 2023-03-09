import React, {useState} from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../style/Contact.css'

import {validateEmail} from '../../utils/helpers';

const Result = () => {
  return (
    <p>Message successfully sent! I will contact you back ASAP</p>
  )
};

// const NameInput = () => {
//   return (
//     <p>Please enter your name</p>
//   )
// };

// const EmailValidation = () => {
//   return (
//     <p>Please enter a valid email</p>
//   )
// };

// const MessageInput = () => {
//   return (
//     <p>Please enter a message</p>
//   )
// };

export default function Contact() {
  const [result, showResult] = useState(false);

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();


    emailjs.sendForm("gmail_service", "template_xby6m0n", form.current, "tYk5_UArLITlqQJKE")
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className='contactContainer'>
      <h3 className='title'>Contact Me</h3>
      <hr className='divider'></hr>
      <form ref={form} onSubmit={handleFormSubmit}>
        <div className='forms'>
          <label className='textboxLabel'>Name</label> <br/>
          <input id='name' className='textbox' type="text" name="user_name" />
        </div>
        <div className='forms'>
          <label className='textboxLabel'>Email</label> <br/>
          <input id='email' className='textbox' type="email" name="user_email" />
        </div>
        <div className='forms'>
          <label className='textboxLabel'>Message</label> <br/>
          <textarea id='message' className='textbox' rows={12} name="user_message" />
        </div>
        <div className='btnContainer'>
          <input className='submitBtn' type="submit" value="Submit" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>  
      </form>

      <div className='result'>{result ? <Result /> : null}</div>

    </div>
  );
}