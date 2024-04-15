// RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './forgot.css';

const Forgot = () => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: ''
  });
  const { email} = formData;
  console.log('email:', email);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/forget-password', { email });
      if (response.status === 200) {
        toast.success('Reset link sent to your email!');
        setTimeout(() => {
          navigateTo('/');
        }, 1500); // Wait 1.5 seconds to navigate so the user can read the message.
      }
    } catch (err) {
      toast.error("Reset link can't sent due to wrong email ID !");
    }
  };


  return (
    <div className="login-container">
      <h1>Enter Valid Email</h1>
      <form onSubmit={handleSubmit}>
       
      <input
          type="text"
          id="email"
          name="email"
          placeholder='Enter Email to Reset'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit"> Get Link</button>
    
      </form>
      <ToastContainer />
    </div>
  );
};

export default Forgot;
