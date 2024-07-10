import React from 'react';
import '../styles/style.css';

const Login = () => {
  return (
    <div className="auth-content">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="auth-btn">Login</button>
      </form>
    </div>




  );
};

export default Login;
