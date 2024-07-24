import React from 'react';
import '../styles/form.css';
export function Form() {
  return (
    <form className="contact">
      <p>
        <label htmlFor="name">Name:&nbsp;</label>
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
        <textarea
          rows={1}
          name="message"
          id="message"
          placeholder="Hello, im interested in..."
          className="active:border-b focus:border-second-100"
        ></textarea>
      </p>
    </form>
  );
}
