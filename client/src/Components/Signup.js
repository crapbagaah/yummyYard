// src/components/Signup.js
import React, { useState } from 'react';
//import { signup } from '../api';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signup(username, email, password);
  //     alert('Signup successful!');
  //   } catch (error) {
  //     console.error(error);
  //     alert('Signup failed!');
  //   }
  // };


  const Signup = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

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
        setToken(data.token); // Set token on successful signup
        alert('Signup Successful');
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed!');
    }
  };












  return (

    // <div className="auth-content">
    //        <h2>Signup</h2>

    //        <form onSubmit={handleSubmit}>
    //      <div className="input-group">
    //            <label>Username</label>
    //            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
    //          </div>
    //          <div className="input-group">
    //            <label>Password</label>
    //            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    //          </div>
    //          <div className="input-group">
    //            <label>Email</label>
    //            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //         </div>
    //          <button type="submit" className="auth-btn">Signup</button>
    //        </form>
    //      </div>










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

// import React from 'react';
// import '../styles/style.css'

// const Signup = () => {
//   return (
//     <div className="auth-content">
//       <h2>Signup</h2>
//       <form>
//         <div className="input-group">
//           <label>Username</label>
//           <input type="text" placeholder="Enter your username" />
//         </div>
//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />
//         </div>
//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" />
//         </div>
//         <button type="submit" className="auth-btn">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
