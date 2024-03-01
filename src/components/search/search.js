// Navbar.jsx
import React, { useState } from 'react';
import './search.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <div className={`menu ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="nav-item">Gender</div>
        <div className="nav-item">Specialty</div>
        <div className="nav-item">Experience</div>
        <div className="nav-item">Location</div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="burger" onClick={handleToggle}>
        <div className={`bar ${isCollapsed ? '' : 'active'}`} />
        <div className={`bar ${isCollapsed ? '' : 'active'}`} />
        <div className={`bar ${isCollapsed ? '' : 'active'}`} />
      </div>
    </nav>
  );
};

export default Navbar;
