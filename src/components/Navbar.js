import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="logo.png" alt="Foodie Logo" className="logo" />
      <button className="header-btn">Join the Waitlist</button>
    </nav>
  );
}

export default Navbar;
