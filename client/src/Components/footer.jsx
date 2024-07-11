import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Logout from './Logout';
const Footer = () => {

  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    // Simulate feedback submission (you can replace this with actual storage logic)
    if (feedback) {
      // Store feedback in local storage
      localStorage.setItem('feedback', feedback);
      setSubmitted(true);
      setFeedback('');
    }
  };


  //CHANGE MADE
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
}, []);
  //TILL HERE


  return (
    <footer className="footer">
      <div className="feedback">
        <h3>Feedback and Suggestions</h3>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <>
            <p>We'd love to hear from you. Share your thoughts or suggestions.</p>
            <div className="feedback-box">
              <textarea
                placeholder="Enter your feedback"
                value={feedback}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmitFeedback}>Submit</button>
            </div>
          </>
        )}
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/log_signup">Login/Sign Up</Link>

        {/* <Logout/> */}

        {isLoggedIn && <Logout />}
        {/* {!isLoggedIn && <Link to="/log_signup">Login/Sign Up</Link>} */}



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
