import React, { useState } from 'react';
import '../styles/form.css';
import { SubmitBtn } from './submit-btn';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function Form() {
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [thankyou, setThankyou] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('start');

      const formData = new FormData(event.target);
      const email = formData.get('email');
      const name = formData.get('name');
      const message = formData.get('message');

      // setEmailError(!email);
      // setNameError(!name);
      // setMessageError(!message);
      // if (email && name && message) {
      //   setThankyou(true);
      // }
      const docRef = await addDoc(collection(db, 'feedback'), {
        name,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="form-wrapper mt-14">
      <form onSubmit={handleSubmit}>
        <h2 id="contact" className="mb-2 ">
          Contact us
        </h2>
        <div className="label-container">
          <label htmlFor="name">Name:</label>
          {nameError && <span className="ml-4 text-lg text-second-100">Name required</span>}
        </div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Somebody "
          className="active:border-b focus:border-first-100"
        />

        <div className="label-container">
          <label htmlFor="email">Email:</label>
          {emailError && <span className="ml-4 text-lg text-second-100">Email required</span>}
        </div>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="somebody@gmail.com"
          className="active:border-b focus:border-third-100"
        />

        <div className="label-container">
          <label htmlFor="message" className="message-label">
            Message:
          </label>
          {messageError && <span className="ml-4 text-lg text-second-100">Message required</span>}
        </div>

        <textarea
          rows={1}
          name="message"
          id="message"
          placeholder="Hello, im interested in..."
          className=" focus:border-second-100"
        ></textarea>

        <SubmitBtn />
        {thankyou && <p className="text-3xl">Thank you for your message!</p>}
      </form>
      <h6 className="contact-phrase">Great things start small...</h6>
    </div>
  );
}
