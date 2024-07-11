const express = require('express');
const recipeRouter = express.Router();
const recipeController = require('../controllers/recipeControllers');

recipeRouter.get('/', recipeController.getAllRecipes);

recipeRouter.post('/', recipeController.createRecipes);

recipeRouter.patch('/:id', recipeController.updateRecipes);

recipeRouter.delete('/:id', recipeController.deleteRecipes);

module.exports = recipeRouter;