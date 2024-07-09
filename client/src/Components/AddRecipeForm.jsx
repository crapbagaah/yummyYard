import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [dishName, setDishName] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {
    // Create a new recipe object
    const newRecipe = {
      dishName,
      prepTime,
      ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
      instructions,
    };

    // Pass the new recipe object to the parent component
    onAddRecipe(newRecipe);

    // Clear the form fields after adding the recipe
    setDishName('');
    setPrepTime('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="add-recipe-form">
      <label htmlFor="dishName">Dish Name:</label>
      <input
        type="text"
        id="dishName"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
      />
      <label htmlFor="prepTime">Time to Prepare:</label>
      <input
        type="text"
        id="prepTime"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients (comma-separated):</label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <label htmlFor="instructions">Steps to Make:</label>
      <textarea
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};

export default AddRecipeForm;
