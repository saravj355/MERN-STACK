require('dotenv').config();
const express = require('express');
const database = require('./db/');
const items = require('./routes/api/items');

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
});

app.use(express.json());
app.use('/api/items', items);



database.init();