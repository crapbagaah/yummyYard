import React from 'react';
import '../styles/style.css';
const Recipe = ({ title = '', ingredients = [], instructions = [], time = 0}) => {
  return (
    <div className="recipe">
      <h2 className="recipe_h2" style={{fontFamily:'"Playwrite AU TAS", cursive'}}>{title}</h2>
      <h3 className="recipe_h3">Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol type="i">
          {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <h3>Time (in minutes)</h3>
      <p>{time}</p>
    </div>
  );
};


export default Recipe;
