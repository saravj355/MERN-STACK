const Item = require('../models/Item');

function find(){
    return Item.find();
}

function create(item){
    const newItem = new Item(item);
    return newItem.save();
}

async function deleteById(id){
    try{
        const foundItem = await findById(id);
    }catch(err){
        throw new Error(err, '');
    }
}

async function findById(id){
    return await Item.findById(id);
}

module.exports = {
    find, 
    create,
    deleteById,
    findById
};