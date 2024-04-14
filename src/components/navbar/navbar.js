import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Brand from '../../assets/images/brand.png';
import NavbarLogRes from '../navbarLogResPage/nav';
import session from '../../pages/session';

const Navbar = () => {
  
  const user = JSON.parse(localStorage.getItem('userDetails'));

  console.log('Navbar is working fine');
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
    // Clear user authentication data from localStorage
    localStorage.removeItem('userDetails');


    window.location.reload();

    console.log('userDetails is after remove the userdetails for the localstorage', userDetails);

    navigate('/');
  };
  
  
  return (
   
    !user?<><nav className="navbar">
    <div className="navbar-brand">
      <img src={Brand} alt="Brand Logo" />
    </div>
  </nav></>:<><nav className="navbar">
      <div className="navbar-brand">
        <img src={Brand} alt="Brand Logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

      {user && (
          <>
            <Link to={`/profile/${user.firstname}`}>Profile</Link>
            <Link to={`/professional/${user.firstname}`}>Professional</Link>
            <Link to={`/workplans/${user.firstname}`}>WorkPlans</Link>
            <Link to={`/admin/${user.firstname}`}>Admin</Link>
          </>
        )}
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav></>

    
  );
};

export default Navbar;
