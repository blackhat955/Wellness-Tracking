import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/profile">Profile</Link>
        <Link to="/professional">Professional</Link>
        <Link to="/workplans">Work Plans</Link>
        <Link to="/admin">Admin</Link>
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
