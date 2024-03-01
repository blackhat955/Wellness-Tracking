// Card.js

import React from 'react';
import './cards.css'; // Import the CSS file

const Card = (props) => {
const { name, gender, speciality, location, experience, imageUrl } = props.user;

  return (
    <div className="card-container">
      <img className="user-image" src={imageUrl} alt="User" />
      <h3 className="user-name">{name}</h3>
      <div className="user-details">
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Speciality:</strong> {speciality}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Experience:</strong> {experience}</p>
      </div>
    </div>
  );
};

export default Card;
