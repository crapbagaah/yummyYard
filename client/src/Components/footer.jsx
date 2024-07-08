import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest recipes and updates directly to your inbox.</p>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#recipes">Recipes</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
