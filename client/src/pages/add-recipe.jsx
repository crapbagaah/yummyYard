import React, { useState } from 'react';
import AddRecipeForm from '../Components/AddRecipeForm';
import Layout from '../Components/layout';

const AddRecipe = ({ onAddRecipe }) => {
  return (

    
    
    <div className="add-recipe-page">
      <Layout>
      <h2>Add New Recipe</h2>
      <AddRecipeForm onAddRecipe={onAddRecipe} />
      </Layout>
    </div>

   
  );
};

export default AddRecipe;
