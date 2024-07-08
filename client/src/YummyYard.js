import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import recipesData from './data/recipes';
import Axios from 'axios';
const YummyYard = () => {

  const [text, setText] = useState("");
  const [recipes, setRecipes] = useState(recipesData);
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  const getData = async () => {
    try{
      const response = await Axios.get("http://localhost:5000/yummyYard");
      setText(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return(
    <div className="App">
      <Header onSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  )
}

export default YummyYard;