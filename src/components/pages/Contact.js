import React, {useState} from 'react';

import '../style/Contact.css'

import {validateEmail} from '../../utils/helpers';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage("Please enter your name")
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a message")
      return;
    }
    alert("Message sent!");

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <h3 className='title'>Contact Me</h3>
      <form>
        <div className='forms'>
          <label className='textboxLabel'>Name:</label><br></br>
          <input
            className='textbox'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
        </div>
        
        <div className='forms'>
          <label className='textboxLabel'>Email:</label><br></br>
          <input
            className='textbox'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        </div>
        
        <div className='forms'>
          <label className='textboxLabel'>Message:</label><br></br>
          <textarea
            rows={12}
            className='textbox'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="textarea"
          />
        </div>
        
        <button type='button' className='submitBtn' onClick={handleFormSubmit}>Submit</button>

      </form>

      {errorMessage && (
        <div className='forms'>
          <p className='errorMessage'>{errorMessage}</p>
        </div>
      )}

    </div>
  );
}