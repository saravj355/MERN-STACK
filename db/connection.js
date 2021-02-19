const {config} = require('../config');
const mongoose = require('mongoose');

const uri = `mongodb+srv://${config.db.username}:${config.db.password}@cluster0.rhelx.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;

function connection(){
    mongoose
        .connect(uri, {useUnifiedTopology: true, useNewUrlParser:true})
        .then(() => console.log('Database connection successfull'))
        .catch(err => console.log('Error connecting to database', err));
}

module.exports = { connection };



