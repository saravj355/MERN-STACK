require('dotenv').config();
const database = require('./db');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Welcome to shopping list') );

async function assertDatabaseConnection() {
    console.log('Checking database connection...');
    try {
        await database.databaseConnection();
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    await assertDatabaseConnection();

    app.listen(process.env.PORT, () => {
        console.log(`Server on port http://localhost:${process.env.PORT}`);
    });
}

init();





