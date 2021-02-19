const database = require('./connection');

async function assertDatabaseConnection() {
    console.log('Checking database connection...');
    try {
        await database.connection();
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    await assertDatabaseConnection();
}

module.exports = {init};