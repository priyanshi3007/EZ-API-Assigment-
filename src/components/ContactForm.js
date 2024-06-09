// src/components/ContactForm.js
import React, { useState } from 'react';
import '../App.css'; // Updated import

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://34.225.132.160:8002/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        if (email.endsWith('@ez.works')) {
          setMessage(data.error);
        }
      } else if (data.status === 200) {
        setMessage('Form Submitted');
      }
    })
    .catch(error => {
      setMessage('An error occurred: ' + error.message);
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Contact Me</button>
      <div className="error">{message}</div>
    </form>
  );
};

export default ContactForm;
