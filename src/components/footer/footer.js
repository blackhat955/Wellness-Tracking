// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
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
          <p> Subscribe Us to know more !</p>
          <div>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
