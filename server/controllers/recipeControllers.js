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

exports.createRecipes = async (req,res) => {
    try{
        const newRecipes = await recipeModels.create(req.body)
        res.status(201).send(newRecipes)
    } catch (err) {
        console.log(`Error: ${err.message}`);
        return res.status(400).send({message: "Error creating a recipe"});
    }
} 

exports.updateRecipes = async (req,res) => {
    try{
        const updateRecipes = await recipeModels.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).send(updateRecipes)
    } catch (err) {
        console.log(`Error: ${err.message}`);
        return res.status(400).send({message: "Error updating recipe"});
    }
} 

exports.deleteRecipes = async (req,res) => {
    try{
        const deleteRecipes = await recipeModels.findByIdAndDelete(req.params.id)
        res.status(201).send(deleteRecipes)
    } catch (err) {
        console.log(`Error: ${err.message}`);
        return res.status(400).send({message: "Error deleting recipe"});
    }
} 
