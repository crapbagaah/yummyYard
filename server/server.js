const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectToMongoDB = require("./config/recipeDB");
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());

connectToMongoDB();

app.use(cors());


  

app.use('/yummyYard/recipes', recipeRoutes);

app.get('/yummyYard', (req, res) => {
    res.send("It is working..");
} );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`yummyYard server is listening on port ${PORT}`);
});
