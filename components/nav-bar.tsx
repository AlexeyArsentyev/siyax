import React from 'react';
import '../styles/nav-bar.css';
export default function Navbar() {
  return (
    <nav>
      <p className="logo">Siya</p>
      <div className="nav-right">
        <p>About us</p>
        <p>Advantages</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
