const router = require('express').Router();

// Item model
const Item = require('../../models/Item');

// route: GET api/items
router.get('/', (req, res) => {
    Item
        .find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// route: POST api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// route: PUT api/items
router.put('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;
