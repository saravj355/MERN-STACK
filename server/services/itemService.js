const Item = require('../models/Item');

function find(){
    return Item.find();
}

function create(item){
    const newItem = new Item(item);
    return newItem.save();
}

async function deleteById(id){
    try {
        const foundItem = await findById(id);
        return await foundItem.delete();

    } catch(err){
        throw new Error(err);
    }  
}

async function findById(id){
    const foundItem = await Item.findById(id);

    if(!foundItem){
        throw new Error('The item doesnt exists');
    }

    return foundItem;
}

module.exports = {
    find, 
    create,
    deleteById,
    findById
};