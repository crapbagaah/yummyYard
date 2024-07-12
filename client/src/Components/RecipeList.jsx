// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Recipe from '../pages/recipes';
// import './RecipeList.css';
// import PropTypes from 'prop-types';
// import Layout from '../Components/layout';
// import headerBackground from '../Assets/top-view-table-full-delicious-food-composition.jpg';

// const RecipeList = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [showAllRecipes, setShowAllRecipes] = useState(false);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch('/recipes'); // Assumes proxy setup or full URL
//         if (!response.ok) {
//           throw new Error('Failed to fetch recipes');
//         }
//         const data = await response.json();
//         setRecipes(data);
//         setFilteredRecipes(data); // Initialize filtered recipes with all recipes
//       } catch (error) {
//         console.error('Error fetching recipes:', error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   const recipesToShow = showAllRecipes ? filteredRecipes : filteredRecipes.slice(0, 3);

//   const handleViewAllRecipes = () => {
//     setShowAllRecipes(true);
//   };

//   const handleHideAllRecipes = () => {
//     setShowAllRecipes(false);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = () => {
//     const filtered = recipes.filter(recipe =>
//       recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredRecipes(filtered);
//   };

//   const handleAddRecipeClick = () => {
//     navigate('/add-recipe');
//   };

//   return (
//     <Layout>
//       <header className="header">
//         <div
//           className="header-background"
//           style={{ backgroundImage: `url(${headerBackground})` }}
//         >
//           <div className="overlay"></div>
//           <div className='header-content'>
//             <h1>Recipes</h1>
//             <p>Explore our curated collection of recipes tailored to your needs — from dietary preferences and quick weeknight meals to meal prep solutions and beloved classics. Discover the perfect dish hassle-free, whatever your taste or schedule demands.</p>
//           </div>
//         </div>
//       </header>
//       <div className="search-container mb-2">
//         <input
//           type="text"
//           placeholder="Search by recipe name"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <button onClick={handleSearchSubmit}>Search</button>
//       </div>
//       <div className="recipe-list-container">
//         <div className="recipe-list">
//           {recipesToShow.map((recipe, index) => (
//             <Recipe
//               key={index}
//               title={recipe.recipeName}
//               ingredients={recipe.ingredients}
//               instructions={recipe.instructions}
//             />
//           ))}
//         </div>
//         <div className="buttons-container">
//           {!showAllRecipes && filteredRecipes.length > 3 && (
//             <button
//               onClick={handleViewAllRecipes}
//               className="view-button"
//             >
//               View All Recipes
//             </button>
//           )}
//           {showAllRecipes && (
//             <button
//               onClick={handleHideAllRecipes}
//               className="view-button"
//             >
//               Hide All Recipes
//             </button>
//           )}
//           <button
//             onClick={handleAddRecipeClick}
//             className="add-recipe-button"
//           >
//             Add New Recipe
//           </button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// RecipeList.propTypes = {
//   recipes: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       recipeName: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//       instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ).isRequired,
// };

// export default RecipeList;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from '../pages/recipes';
import './RecipeList.css';
import PropTypes from 'prop-types';
import Layout from '../Components/layout';
import headerBackground from '../Assets/top-view-table-full-delicious-food-composition.jpg';
import axios from 'axios';

const RecipeList = () => {
  const [newRecipe, setNewRecipe] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRecipes = async () => {
      const apiData = await getRecipe();
      setRecipeData(apiData);
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
        title: newRecipe
      }
    }
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setNewRecipe(prevData => [response.data, ...prevData]);
    } catch (err) {
      console.log(err);
    }
  }

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
    const filtered = recipeData.filter(recipe =>
      recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleAddRecipeClick = () => {
    navigate('/recipes/add-recipe');
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
              key={recipe._id || index}
              title={recipe.title}
              time={recipe.time}
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default RecipeList;

