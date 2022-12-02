import React from "react";
import { useState } from 'react';
import { send } from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  //service_g07ug0q

  const [toSend, setToSend] = useState({
    from_name:'',
    from_emial:'',
    message:''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_g07ug0q',
      'template_qdgz9ct',
      toSend,
      '1cYQp5bqH11bvhqrl'
    ).then((response) => {
      alert('Email send correctly!');
      console.log('SUCCESS', response.status, response.text);
    }).catch((err) => {
      console.log('FAILERD', err);
    })
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  }

  return (
    <div className="page-container">
      <div className="title center">
        <h1>Contact</h1>
        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      </div>
      <div className="description form-container">
        <form onSubmit={onSubmit} className="center">
          <label>Name</label>
          <input type="text" name="from_name" placeholder="Enter your name" onChange={handleChange}/>
          <label>Email</label>
          <input type="email" name="from_email" placeholder="Enter your email" onChange={handleChange}/>
          <label>Message</label>
          <textarea className="message"type="text" name="message" placeholder="Enter your message" onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
