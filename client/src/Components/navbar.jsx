import React from 'react'
import '../Components/style.css'
import Logo from '../Assets/Logo1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#recipes">Recipes</a>
        <a href="#start">Start Here</a>
        <a href="#signup">SignUp</a>
      </div>
    </nav>

    
    
  )
}

export default Navbar;