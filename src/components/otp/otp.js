import React, { useState } from 'react';
import './otp.css';

const OTP = () => {
  const [formData, setFormData] = useState({
    otp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    const pattern = /^[0-9]*$/;
    const key = e.key;
    if (!pattern.test(key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP validation logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1>Enter OTP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="otp"
          name="otp"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          required
        />
        <button type="submit">Validate</button>
      </form>
    </div>
  );
};

export default OTP;
