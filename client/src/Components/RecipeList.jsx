import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Recipe from '../pages/recipes';
import './RecipeList.css'; // Import CSS for RecipeList component
import PropTypes from 'prop-types';
import Layout from '../Components/layout';
import headerBackground from '../Assets/top-view-table-full-delicious-food-composition.jpg';

const RecipeList = ({ recipes = [] }) => {
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState('');

  const recipesToShow = showAllRecipes ? filteredRecipes : filteredRecipes.slice(0, 3);

  const handleViewAllRecipes = () => {
    setShowAllRecipes(true);
  };

  const handleHideAllRecipes = () => {
    setShowAllRecipes(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <Layout>
      <header className="header" style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className="overlay"></div>
        <div className='header-content'>
          <h1>Recipes</h1>
          <p>Explore our curated collection of recipes tailored to your needs — from dietary preferences and quick weeknight meals to meal prep solutions and beloved classics. Discover the perfect dish hassle-free, whatever your taste or schedule demands.</p>
        </div>
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
      <div className="recipe-list-container">
        <div className="recipe-list">
          {recipesToShow.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </div>
        {!showAllRecipes && filteredRecipes.length > 3 && (
          <button
            onClick={handleViewAllRecipes}
            className="view-button"
          >
            View All Recipes
          </button>
        )}
        {showAllRecipes && (
          <button
            onClick={handleHideAllRecipes}
            className="view-button"
          >
            Hide All Recipes
          </button>
        )}
      </div>
      <Link to="/add-recipe" className="add-recipe-button">
        Add New Recipe
      </Link>
    </Layout>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeList;
