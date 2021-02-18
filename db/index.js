const {config} = require('../config');
const mongoose = require('mongoose');

const url = `mongodb+srv://${config.db.username}:${config.db.password}@cluster0.rhelx.mongodb.net/${config.db.name}?retryWrites=true&w=majority`;

async function databaseConnection(){
    try{
        mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser:true})
            .then(() => console.log('MongoDB connected...'))
            .catch(err => console.log(err));
    }catch(err){
        console.log('Unexpected error:');
    }
}

module.exports = {databaseConnection};




