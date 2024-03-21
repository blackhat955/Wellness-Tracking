import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    userType: 'professional', // Default value
  });
  const [passwordStrength, setPasswordStrength] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    // Criteria for password strength
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/register', formData);

      if (response.status === 200) {
        setSuccessMessage('Registered successfully');
        toast.success('Register Successfully...');
        setErrorMessage('');
        // Redirect to the login page after 3 seconds
        setTimeout(() => {
          navigateTo(`/`);
        }, 3000);
      }
    } catch (err) {
      toast.error('User with this email already exists!');
      console.log(err);
      setErrorMessage('User with this email already exists');
      setSuccessMessage('');
    }
  };

  return (
    <div className="registration-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$"
          title="Password must be at least 8 characters long and contain at least one number, one letter, and one special character."
          required
        />

        <select
          id="userType"
          name="userType"
          placeholder="User Type"
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
          Already a user? <Link to="/">Login</Link>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        transition="bounce"
/>
    </div>
  );
};

export default RegistrationPage;

