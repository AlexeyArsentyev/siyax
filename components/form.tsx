import React, { useState } from 'react';
import '../styles/form.css';
import { SubmitBtn } from './submit-btn';
export function Form() {
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const message = formData.get('message');

    setEmailError(!email);
    setNameError(!name);
    setMessageError(!message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="label-container">
        <label htmlFor="name">Name:</label>{' '}
        {nameError && <span className="ml-4 text-lg text-red-300">Please provide your name</span>}
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
        {emailError && <span className="ml-4 text-lg text-red-300">Please provide your email</span>}
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
        {messageError && (
          <span className="ml-4 text-lg text-red-300">Please provide your message</span>
        )}
      </div>

      <textarea
        rows={1}
        name="message"
        id="message"
        placeholder="Hello, im interested in..."
        className=" focus:border-second-100"
      ></textarea>

      <SubmitBtn />
    </form>
  );
}
