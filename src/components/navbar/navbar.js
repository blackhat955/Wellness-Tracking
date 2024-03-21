import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Brand from '../../assets/images/brand.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const userDetailsData = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetailsData) {
      setUserDetails(userDetailsData);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem('userDetails');
    // Redirect to login page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Brand} alt="Brand Logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

      {userDetails.firstname && (
          <>
            <Link to={`/profile/${userDetails.firstname}`}>Profile</Link>
            <Link to={`/professional/${userDetails.firstname}`}>Professional</Link>
            <Link to={`/workplans/${userDetails.firstname}`}>WorkPlans</Link>
            <Link to={`/admin/${userDetails.firstname}`}>Admin</Link>
          </>
        )}
        <button className="logout" onClick={handleLogout}>Logout</button>
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
