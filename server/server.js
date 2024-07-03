const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/yummyYard', (req, res) => {
    res.json({Response: "It is working.."});
} );

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`yummyYard server is listening on port ${PORT}`);
});
