import React from 'react';
import '../styles/nav-bar.css';
export default function Navbar() {
  return (
    <nav>
      <a className="logo" href="#">
        Siya
      </a>

      <div className="nav-right">
        <a href="#">About us</a>
        <a href="#">Advantages</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
