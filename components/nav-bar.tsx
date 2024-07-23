import React from 'react';
import '../styles/nav-bar.css';
export default function Navbar() {
  return (
    <nav>
      <a className="logo" href="#">
        Siya
      </a>

      <div className="nav-right">
        <a href="#aboutUs">About us</a>
        <a href="#advantages">Advantages</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
