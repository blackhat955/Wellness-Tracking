
import React from 'react';
import './searchnav.css';

const searchNavbar = () => {
  return (
    <div className="nav">
      <div className="select-options">
        <select >
        <option value="" disabled selected>Gender</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <select>
        <option value="" disabled selected>Specialty</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <select>
        <option value="" disabled selected>Location</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <select>
        <option value="" disabled selected>Experience</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <div className="search-bar">
        <input id="search"type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default searchNavbar;
