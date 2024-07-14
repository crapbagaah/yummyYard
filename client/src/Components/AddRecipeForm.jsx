import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddRecipeForm.css'; // Import your CSS file

const AddRecipeForm = ({ onAddRecipe }) => {
  const [newDishName, setNewDishName] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleAddRecipe = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const options = {
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URL}/yummyYard/recipes`,
        headers: {
          accept: "application/json"
        },
        data: {
          title: newDishName,
          time: prepTime,
          ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
          instructions: instructions.split(',').map(item => item.trim())
        }
      };
      const response = await axios.request(options);
      console.log(response.data);

      // Call the callback to update the recipe list
      onAddRecipe(response.data);

      // Redirect to /recipes after adding the recipe
      navigate('/recipes');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-recipe-form-container">
      <form className="add-recipe-form" onSubmit={handleAddRecipe}>
        <label htmlFor="newDishName">Dish Name:</label>
        <input
          type="text"
          id="newDishName"
          value={newDishName}
          onChange={(e) => setNewDishName(e.target.value)}
          required
        />
        <label htmlFor="prepTime">Time to Prepare: (in minutes) </label>
        <input
          type="Number"
          id="prepTime"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          required
        />
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <label htmlFor="instructions">Steps to Make:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button 
          id="addRecipeButton"
          name="add"
          type="submit"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
