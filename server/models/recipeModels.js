const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Recipe Name is required']
    },
    time: {
        type: Number,
        required: [true, 'Time to prepare the recipe is required']
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