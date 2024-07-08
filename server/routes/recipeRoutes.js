const express = require('express');
const recipeRouter = express.Router();
const recipeController = require('../controllers/recipeControllers');

recipeRouter.get('/', recipeController.getAllRecipes);

module.exports = recipeRouter;