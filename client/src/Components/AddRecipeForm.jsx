import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipeForm.css'; // Import your CSS file

const AddRecipeForm = ({ onAddRecipe }) => {
  const [dishName, setDishName] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleAddRecipe = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new recipe object
    const newRecipe = {
      title: dishName,
      prepTime,
      ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
      instructions,
    };

    // Pass the new recipe object to the parent component and update the state
    onAddRecipe(newRecipe);

    // Clear the form fields after adding the recipe
    setDishName('');
    setPrepTime('');
    setIngredients('');
    setInstructions('');

    // Redirect to /recipes after a brief delay to ensure state updates
    setTimeout(() => {
      navigate('/recipes');
    }, 100);
  };

  return (
    <div className="add-recipe-form-container">
      <form className="add-recipe-form" onSubmit={handleAddRecipe}>
        <label htmlFor="dishName">Dish Name:</label>
        <input
          type="text"
          id="dishName"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          required
        />
        <label htmlFor="prepTime">Time to Prepare:</label>
        <input
          type="text"
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
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
