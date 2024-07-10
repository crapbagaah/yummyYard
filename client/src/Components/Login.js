// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/yummyYard/recipes/log_signup/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token); // Set token on successful login
        alert('Successful Login');
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed!');
    }
  };

  return (

    <div className="auth-content">
           <h2>Login</h2>
           <form onSubmit={handleLogin}>
             <div className="input-group">
               <label>Email</label>
               <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
               <label>Password</label>
               <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
             </div>
             <button type="submit" className="auth-btn">Login</button>
           </form>
           </div>


  );
};

export default Login;


