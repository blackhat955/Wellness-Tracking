// Navbar.jsx
import React, { useState } from 'react';
import './navbar.css';
import Brand from '../../assets/images/brand.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Brand} alt="Brand Logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <span>Profile</span>
        <span>Professional</span>
        <span>Work Plans</span>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
