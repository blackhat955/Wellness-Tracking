import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import './otp.css';

const OTP = () => {
  const {email} = useParams('')
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigateTo = useNavigate();


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

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      let response = await axios.post('http://localhost:3001/auth/verify-code', { email, code: formData.otp });
      if(response.status === 200){
        console.log('response:', response);
        setSuccessMessage('Logging in...')
        setErrorMessage('');
        setTimeout(() => {
          // Fetch user type from local storage
    
          // const update={
          //   ...userDetails,
          //   verification:true
          const userDetailsfetch= {
            firstname: response.data.user.firstname,
            lastname: response.data.user.lastname,
            email: response.data.user.email,
            userType: response.data.user.userType,
        };
        
        localStorage.setItem('userDetails', JSON.stringify(userDetailsfetch));
          
          // }
        

  
          // if(userDetails.type === 'admin') {
          //   navigate('/dashboard/admin');
          // }
          // else if(userDetails.type === 'fitnesspro'){
          //   navigate('/dashboard/admin');
          // }
          // else {
            console.log('response this is working:', response);

            if(response.data.user &&response.data.user.firstname){
              navigateTo(`/profile/${response.data.user.firstname}`);
            }
            else{
              console.log('this is not working fine');
              localStorage.removeItem('userDetails');
              navigateTo('/');
            }
            
          // }
  
        }, 1500); // Wait 1.5 seconds to navigate so the user can read the message.
      }
      }
     catch (err) {
      setErrorMessage('Failed to verify OTP. Please try again.');
      setSuccessMessage('')
      console.log(err);
      
    }
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
