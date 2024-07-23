import React from 'react';
import '../styles/form.css';
export function Form() {
  return (
    <form className="contact">
      <p>
        <label htmlFor="name">Name:&nbsp;</label>
        <input type="text" id="name" name="name" placeholder="Somebody" />
      </p>
      <p>
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="email" name="email" id="email" placeholder="somebody@gmail.com" />
      </p>
      <p>
        <label htmlFor="message" className="message-label">
          Message:&nbsp;
        </label>
        <textarea name="message" id="message" placeholder="Hello, im interested in..."></textarea>
      </p>
    </form>
  );
}
