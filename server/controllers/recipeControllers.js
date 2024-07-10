const recipeModels = require('../models/recipeModels');

exports.getAllRecipes = async (req, res) => {
    try {
        const getRecipes = await recipeModels.find();
        console.log("Fetched recipes: ", getRecipes);
        return res.status(200).send(getRecipes);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        return res.status(400).send({message: "Error fetching recipes"});
    }
}

