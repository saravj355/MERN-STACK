const {config} = require('../config');
const mongoose = require('mongoose');

const uri = `mongodb+srv://${config.db.username}:${config.db.password}@cluster0.rhelx.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;

async function databaseConnection(){
    try{
        await mongoose
            .connect(uri, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log('Database connection successfull');
    }catch(err){
        console.log('Error connecting to database',err);
    }
}

module.exports = { databaseConnection };




