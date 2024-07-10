import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import Logo from '../Assets/Logo1.png'

const Navbar = () => {
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
          <Link to="/signup">SignUp</Link>
        </div>
      </nav>
    </header>


  )
}

export default Navbar;