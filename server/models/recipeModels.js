const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: [true, 'Recipe Name is required']
    },
    description: {
        type: String,
        required: [true, 'Description of the Recipe is required']
    },
    ingredients: {
        type: [String],
        required: [true, 'Ingredients of the Recipe is missing']
    },
    instructions: {
        type: [String],
        required: [true, 'Instructions of the Recipe is missing']
    }
});

module.exports = mongoose.model("recipe", recipeSchema); 