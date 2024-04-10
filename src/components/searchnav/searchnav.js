
import React from 'react';
import './searchnav.css';

const searchNavbar = () => {

  const specialties = ["Yoga", "Weight Training", "Cardio", "Pilates", "Crossfit", "Dance", "Martial Arts"];
const locations = ["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"];
const experiences = ["1 year", "2 years", "5 years", "10 years", "3 years", "4 years", "6 years", "7 years", "8 years", "9 years"];


  return (
    <div className="nav">
      <div className="select-options">
      <select name="gender">
  <option value="" disabled selected>Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>

<select name="specialty">
  <option value="" disabled selected>Specialty</option>
  {specialties.map((specialty, index) => (
    <option key={index} value={specialty}>{specialty}</option>
  ))}
</select>

<select name="location">
  <option value="" disabled selected>Location</option>
  {locations.map((location, index) => (
    <option key={index} value={location}>{location}</option>
  ))}
</select>

<select name="experience">
  <option value="" disabled selected>Experience</option>
  {experiences.map((experience, index) => (
    <option key={index} value={experience}>{experience}</option>
  ))}
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
