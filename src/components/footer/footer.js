import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for ToastContainer
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(false); // Reset error state when input changes
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError(true); // Set error state if email is empty or contains only whitespace
      return;
    }

    // Send POST request to /subscribe endpoint with the email data using Axios
    axios.post('http://localhost:3001/auth//subscribe', { email })
      .then((response) => {
        setEmail(''); // Clear email field on success
        toast.success('Subscribed successfully!'); // Show success message using toast
      })
      .catch((error) => {
        console.error('Error subscribing:', error);
        setError(true); // Set error state on subscription error
        toast.error('You might not SignUp or not enter a valid email id!'); // Show error message using toast
        // Handle error, show error message or retry mechanism
      });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Wellness</h2>
          <p>&copy; 2024 Wellness. All rights reserved.</p>
        </div>

        <div className="footer-section">
          <h2>Contact</h2>
          <p>720 S College Mall, Indiana</p>
          <p>Email: wellness@gmail.com</p>
          <p>Phone: +1 434 463 390</p>
        </div>

        <div className="footer-section">
          <h2>Subscribe</h2>
          <p>Subscribe Us to know more!</p>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
              className={error ? 'error-input' : ''}
            />
            <button onClick={handleSubscribe} disabled={!email.trim()}>Subscribe</button>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* ToastContainer component */}
    </footer>
  );
};

export default Footer;
