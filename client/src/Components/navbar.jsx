import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import Logo from '../Assets/Logo1.png'
import Logout from './Logout';

const Navbar = () => {



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
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/recipes">Recipes</Link>
          {/* <Link to="/log_signup">Login</Link> */}
          
          {!isLoggedIn && <Link to="/log_signup">Login</Link>}


          {isLoggedIn && <Logout />}






        </div>
      </nav>
    </header>


  )
}

export default Navbar;