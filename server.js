require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to shopping list');
});

app.listen(process.env.PORT, () => {
    console.log(`Server on port: ${process.env.PORT}`);
});



