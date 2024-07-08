const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGO_URI;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.log("Error connecting to MongoDB: ", err.message);
        process.exit(1);

    }
}

module.exports = connectToMongoDB;