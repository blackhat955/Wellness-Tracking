// RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './reset.css';

const Reset = (props) => {
  const {token} = useParams('')
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = formData;
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePassword  = (e) => {
    const { name, value } = e.target;
    console.log('name:', name);
    console.log('value:', value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'password' || name === 'confirmPassword') {
      checkPasswordStrength(value);
    }
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      setErrorMessage("Passwords don't match");
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/reset-password', { token, password });
      if(response.status == 200) {
        setSuccessMessage('Password updated successfully');
        toast.success('Password updated successfully');
        setTimeout(() => {
          navigateTo('/');
        }, 1500);
        setErrorMessage('')
      }
    } catch (error) {
      toast.error('Error resetting password.');
      setSuccessMessage('');
      setErrorMessage('Error resetting password.')
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>

        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          value={formData.password}
          onChange={handlePassword}
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$"
          title="Password must be at least 8 characters long and contain at least one number, one letter, and one special character."
          required
        />
         <input
          type=" password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='confirm password'
          value={formData.confirmPassword}
          onChange={handlePassword}
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$"
          title="Password must be at least 8 characters long and contain at least one number, one letter, and one special character."
          required
        />

        {passwordStrength && (
          <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
            Password Strength: {passwordStrength}
          </p>
        )}

        <button type="submit">Reset password</button>
    
      </form>
      <ToastContainer />
    </div>
  );
};

export default Reset;
