import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../pages/recipes';
import './RecipeList.css';
import PropTypes from 'prop-types';
import Layout from '../Components/layout';
import headerBackground from '../Assets/top-view-table-full-delicious-food-composition.jpg';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/recipes'); // Assumes proxy setup or full URL
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data);
        setFilteredRecipes(data); // Initialize filtered recipes with all recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

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
      recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };

  return (
    <Layout>
      <header className="header">
        <div
          className="header-background"
          style={{ backgroundImage: `url(${headerBackground})` }}
        >
          <div className="overlay"></div>
          <div className='header-content'>
            <h1>Recipes</h1>
            <p>Explore our curated collection of recipes tailored to your needs — from dietary preferences and quick weeknight meals to meal prep solutions and beloved classics. Discover the perfect dish hassle-free, whatever your taste or schedule demands.</p>
          </div>
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
              title={recipe.recipeName}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </div>
        <div className="buttons-container">
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
          <button
            onClick={handleAddRecipeClick}
            className="add-recipe-button"
          >
            Add New Recipe
          </button>
        </div>
      </div>
    </Layout>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      recipeName: PropTypes.string.isRequired,
      description: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default RecipeList;
