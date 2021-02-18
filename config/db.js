require('dotenv').config();

const db = {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};

module.exports = { db };