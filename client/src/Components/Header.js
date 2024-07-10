import React, { useState } from 'react';
import './Header.css'; // Import the CSS for the Header component

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <>
    <header className="header">
      <h1>Recipes</h1>
      <p>Explore our curated collection of recipes tailored to your needs — from dietary preferences and quick weeknight meals to meal prep solutions and beloved classics. Discover the perfect dish hassle-free, whatever your taste or schedule demands.</p>
    </header>
    <div className="search-container mb-2">
      <input
        type="text"
        placeholder="Search by recipe name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
    </>
  );
};

export default Header;