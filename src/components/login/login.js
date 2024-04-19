import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '' // Default to professional
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigateTo = useNavigate();

  const [passwordStrength, setPasswordStrength] = useState('');

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

  const responseGoogle = async (response) => {
    console.log("sUCCESS")
    console.log(response.credential)
    // console.log(response.tokenId)
    try {
        const res = await fetch('https://wellnessbackend-latest.onrender.com/oauth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ access_token: response.credential }),
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();

        console.log('Login successful:', data);
        console.log("ok",data.userDetails.firstname)
      //   const userDetailsfetch= {
      //     firstname: response.data.userDetails.firstname,
      //     lastname: response.data.userDetails.lastname,
      //     email: response.data.userDetails.email,
      //     userType: response.data.userDetails.userType
      // };
            setTimeout(() => {
              const userDetailsfetch= {
                firstname: data.userDetails.firstname,
                lastname: data.userDetails.lastname,
                email: data.userDetails.email,
                userType: data.userDetails.userType
            };
            
            localStorage.setItem('userDetails', JSON.stringify(userDetailsfetch));
                navigateTo(`/profile/${data.userDetails.firstname}`);
            }, 2000); 
          
  // Log the response from the backend

    } catch (error) {
        console.error('Error:', error);
    }
}

  const handleSubmit = async(e) => {
    console.log('Form submitted for the login one:', formData);
    try {
      e.preventDefault();
      let response = await axios.post('https://wellnessbackend-latest.onrender.com/auth/login', formData);
      if(response.status === 200){
        // setSuccessMessage('Logging in...');
        // console.log('response this is working:', response);
        
        toast.success('Logged in Succesfully');
        // setMessage('Logged in Succesfully');
        navigateTo(`/otp/${formData.email}`);
      }
      }
     catch (err) {
      toast.error('Invalid credentials to logIn');
      setErrorMessage('Invalid credentials');
      console.log(err)
      
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handlePassword}
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$"
          title="Password must be at least 8 characters long and contain at least one number, one letter, and one special character."
          required
        />

        <select
          id="userType"
          name="userType"
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

        <button type="submit">Login</button>
        <GoogleOAuthProvider clientId="564265705395-ijb65ipug7u0fsfeg9htsirit23ppqob.apps.googleusercontent.com">
          <GoogleLogin
              onSuccess={responseGoogle}
                onError={() => {
                  console.log('Login Failed');
                }}/>  
        </GoogleOAuthProvider>

       
        <p className="login-link">
        <div>
        New User? <Link to="/register">Sign Up</Link>
        </div>
        Forget Password <Link to="/forget">Reset Password</Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
