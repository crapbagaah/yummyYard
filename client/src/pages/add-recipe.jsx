import React, { useState } from 'react';
import AddRecipeForm from '../Components/AddRecipeForm';

const AddRecipe = ({ onAddRecipe }) => {
  return (
    <div className="add-recipe-page">
      <h2>Add New Recipe</h2>
      <AddRecipeForm onAddRecipe={onAddRecipe} />
    </div>
  );
};

export default AddRecipe;
