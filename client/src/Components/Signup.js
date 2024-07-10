
import React from 'react';
import '../styles/style.css'

const Signup = () => {
  return (
    <div className="auth-content">
      <h2>Signup</h2>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="auth-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
