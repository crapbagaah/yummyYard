import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../pages/recipes';
import './RecipeList.css';
import PropTypes from 'prop-types';
import Layout from '../Components/layout';
import headerBackground from '../Assets/top-view-table-full-delicious-food-composition.jpg';
import axios from 'axios';

const RecipeList = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiData = await getRecipe();
      setRecipeData(apiData);
      setFilteredData(apiData); // Initialize filteredData with all recipes
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  const getRecipe = async () => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/yummyYard/recipes`,
      headers: {
        accept: "application/json"
      }
    }
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = recipeData.filter(recipe =>
      recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchTerm('');
  };

  const handleAddRecipeClick = () => {
    navigate('/recipes/add-recipe');
  };

  const handleViewAllRecipesClick = async () => {
    // Fetch all recipes and reset filteredData to display all recipes
    const apiData = await getRecipe();
    setFilteredData(apiData);
    setSearchTerm(''); // Reset search term
  };

  // Function to handle when a new recipe is added
  const handleRecipeAdded = (newRecipe) => {
    // Update the recipeData state
    setRecipeData((prevRecipes) => [newRecipe, ...prevRecipes]);
    // Update the filteredData state to reflect the new recipe
    setFilteredData((prevRecipes) => [newRecipe, ...prevRecipes]);
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
          {filteredData.map((recipe, index) => (
            <Recipe
              key={recipe._id || index}
              title={recipe.title}
              time={recipe.time}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </div>
        <div className="buttons-container">
          <button
            onClick={handleAddRecipeClick}
            className="add-recipe-button"
          >
            Add New Recipe
          </button>
          <button
            onClick={handleViewAllRecipesClick}
            className="view-button"
          >
            View All Recipes
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default RecipeList;
