require('dotenv').config();
const express = require('express');
const database = require('./src/db');
const items = require('./src/routes/api/items');

const app = express();

//bodyParser Middleware
app.use(express.json());

//routes
app.use('/api/items', items);

async function init() {
    await database.assertDatabaseConnection();

    app.listen(process.env.PORT, () => {
        console.log(`Server started on port http://localhost:${process.env.PORT}`);
    });
}

init();
