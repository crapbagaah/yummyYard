import React, { useState } from 'react';
import Recipe from './Recipe';
import './RecipeList.css'; // Import CSS for RecipeList component

const RecipeList = ({ recipes }) => {
  const [showAllRecipes, setShowAllRecipes] = useState(false);

  const recipesToShow = showAllRecipes ? recipes : recipes.slice(0, 3);

  const handleViewAllRecipes = () => {
    setShowAllRecipes(true);
  };

  return (
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
      {!showAllRecipes && recipes.length > 3 && (
        <button onClick={handleViewAllRecipes} className="view-all-button">
          View All Recipes
        </button>
      )}
    </div>
  );
};

export default RecipeList;
