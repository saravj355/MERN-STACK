const Item = require('../models/Item');

function find(){
    return Item.find();
}

function create(item){
    const newItem = new Item(item);
    return newItem.save();
}

function deleteById(item){
	
}

function findById(id){
    return Item.findById(id);
}

module.exports = {
    find, 
    create,
    deleteById,
    findById
};