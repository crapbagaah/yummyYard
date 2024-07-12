// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddRecipeForm.css'; // Import your CSS file

// import Layout from './layout';


// const AddRecipeForm = ({ onAddRecipe }) => {
//   const [dishName, setDishName] = useState('');
//   const [prepTime, setPrepTime] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const navigate = useNavigate();

//   const handleAddRecipe = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Create a new recipe object
//     const newRecipe = {
//       title: dishName,
//       prepTime,
//       ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
//       instructions,
//     };

//     // Pass the new recipe object to the parent component and update the state
//     onAddRecipe(newRecipe);

//     // Clear the form fields after adding the recipe
//     setDishName('');
//     setPrepTime('');
//     setIngredients('');
//     setInstructions('');

//     // Redirect to /recipes after a brief delay to ensure state updates
//     setTimeout(() => {
//       navigate('/recipes');
//     }, 100);
//   };

//   return (

//     <Layout>
//     <div className="add-recipe-form-container">
//       <form className="add-recipe-form" onSubmit={handleAddRecipe}>
//         <label htmlFor="dishName">Dish Name:</label>
//         <input
//           type="text"
//           id="dishName"
//           value={dishName}
//           onChange={(e) => setDishName(e.target.value)}
//           required
//         />
//         <label htmlFor="prepTime">Time to Prepare:</label>
//         <input
//           type="text"
//           id="prepTime"
//           value={prepTime}
//           onChange={(e) => setPrepTime(e.target.value)}
//           required
//         />
//         <label htmlFor="ingredients">Ingredients (comma-separated):</label>
//         <input
//           type="text"
//           id="ingredients"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           required
//         />
//         <label htmlFor="instructions">Steps to Make:</label>
//         <textarea
//           id="instructions"
//           value={instructions}
//           onChange={(e) => setInstructions(e.target.value)}
//           required
//         />
//         <button type="submit">Add Recipe</button>
//       </form>
//     </div>

//     </Layout>
//   );
// };

// export default AddRecipeForm;


import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddRecipeForm.css'; // Import your CSS file
import RecipeList  from './RecipeList';

import Layout from '../Components/layout';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [newDishName, setNewDishName] = useState('');
  const [dishData, setDishData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prepTime, setPrepTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleAddRecipe = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new recipe object
    // const newDishNameObj = {
    //   title: newDishName,
    //   time: prepTime,
    //   ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
    //   instructions: instructions.split(',').map(item => item.trim())
    // };

 

    // Pass the new recipe object to the parent component and update the state
    // onAddRecipe(newDishNameObj);

    // Clear the form fields after adding the recipe
    // setNewDishName('');
    // setPrepTime('');
    // setIngredients('');
    // setInstructions('');

    // Redirect to /recipes after a brief delay to ensure state updates
    setTimeout(() => {
      navigate('/recipes');
    }, 100);
  };

  
  const handleAddRecipeButton = () => {
    addRecipe();
}


  useEffect(() => {
    const fetchRecipes = async () => {
      const apiData = await getRecipe();
      setDishData(apiData);
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  const getRecipe = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/yummyYard/recipes",
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
  }

  const addRecipe = async () => {
    const options = {
      method: "POST",
      url: "http://localhost:5000/yummyYard/recipes",
      headers: {
        accept: "application/json"
      },
      data: {
        title: newDishName,
        time: prepTime,
        ingredients: ingredients.split(',').map(item => item.trim()), // Split by comma and trim whitespace
        instructions: instructions.split(',').map(item => item.trim())
      }
    }
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setDishData(prevData => [response.data, ...prevData]);
    } catch (err) {
      console.log(err);
    }
  }


  return (

    <Layout>

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
          id = "addRecipeButton"
          name = "add"
          type="submit"
          onClick = {handleAddRecipeButton}
          >Add Recipe</button>
      </form>
    </div>

    </Layout>
  );
};

export default AddRecipeForm;


