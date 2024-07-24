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
      <p>
        <label htmlFor="name">Name:&nbsp;</label>{' '}
        {nameError && <span className="ml-4 text-lg text-red-300">Please provide your name</span>}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Somebody "
          className="active:border-b focus:border-first-100"
        />
      </p>
      <p>
        <label htmlFor="email">Email:&nbsp;</label>
        {emailError && <span className="ml-4 text-lg text-red-300">Please provide your email</span>}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="somebody@gmail.com"
          className="active:border-b focus:border-third-100"
        />
      </p>
      <p>
        <label htmlFor="message" className="message-label">
          Message:&nbsp;
        </label>
        {messageError && (
          <span className="ml-4 text-lg text-red-300">Please provide your message</span>
        )}
        <textarea
          rows={1}
          name="message"
          id="message"
          placeholder="Hello, im interested in..."
          className=" focus:border-second-100"
        ></textarea>
      </p>

      <SubmitBtn />
    </form>
  );
}
