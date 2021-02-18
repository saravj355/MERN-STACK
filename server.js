require('dotenv').config();
const database = require('./db');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('hola') );

async function assertDatabaseConnectionOk() {
    console.log('Checking database connection...');
    try {
        await database.databaseConnection();
		
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    app.listen(process.env.PORT, () => {
        console.log(`Server on port http://localhost:${process.env.PORT}.`);
    });
}

init();





