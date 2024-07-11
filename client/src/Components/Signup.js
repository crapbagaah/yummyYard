// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

  const Signup = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/yummyYard/recipes/log_signup/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();
      if (response.ok) {

        //change 
        localStorage.setItem('token', data.token); 
        //till here
        setToken(data.token); // Set token on successful signup










        // Clear token from local storage after 15 minutes
        setTimeout(() => {
          localStorage.removeItem('token');
          alert('Session expired. Please log in again to continue.');
          navigate('/log_signup'); // Redirect to login or signup page using navigate function
        }, 900000); // 15 minutes in milliseconds












        alert('Signup Successful');
        navigate('/'); //go to homepage just after login
        
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed!');
    }
  };


  return (

    <div className="auth-content">
           <h2>Signup</h2>

           <form onSubmit={handleSignup}>
         <div className="input-group">
               <label>Username</label>
               <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
             </div>
             <div className="input-group">
               <label>Password</label>
               <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
             </div>
             <div className="input-group">
               <label>Email</label>
               <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
             <button type="submit" className="auth-btn">Signup</button>
           </form>
         </div>
  

  );
};

export default Signup;
