// RegistrationPage.jsx
import React, { useState } from 'react';
import './register.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    userType: 'professional', // Default to professional
  });
  const handleLinkClick = () => {
    // Navigate to another page
    window.location.href = 'http://localhost:3000/login';
  };

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    checkPasswordStrength(value);
  };
  const checkPasswordStrength = (password) => {
    // Simple criteria for demonstration purposes
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Determine strength based on criteria
    if (password.length >= minLength && hasLetter && hasNumber && hasSpecialChar) {
      setPasswordStrength('Strong');
    } else if (password.length >= minLength && (hasLetter || hasNumber)) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Weak');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
  
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          required
        />


        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
          required
        />

      
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder='User Name'
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handlePassword}
          placeholder='Password'
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$"
          title="Password must be at least 8 characters long and contain at least one number, one letter, and one special character."
          required
        />

       
        <select
          id="userType"
          name="userType"
          placeholder='User Type'
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="professional">Professional</option>
          <option value="customer">Customer</option>
        </select>
        {passwordStrength && (
          <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
            Password Strength: {passwordStrength}
          </p>
        )}

        <button type="submit">Register</button>
        <p className="login-link">
          Already a user? <a href="/login" onClick={handleLinkClick}>Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
