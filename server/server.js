require('dotenv').config();

const express = require('express');
const database = require('./db');
const items = require('./routes/api/items');
const port = process.env.PORT;

const app = express();

//bodyParser Middleware
app.use(express.json());

//routes
app.use('/api/items', items);

async function init() {
    await database.assertDatabaseConnection();

    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    });
}

init();
