const router = require('express').Router();

// Item model
const Item = require('../../models/Item');

// route: GET api/items
router.get('/', (req, res) => {
    Item
        .find()
        .sort({ date: -1 })
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

// route: POST api/items
router.post('/', (req, res) => {
    const newItem = new Item(req.body);

    newItem.save()
        .then(item => res.json(item))
        .catch(() => res.status(400).json({ success: false }));
});

// route: DELETE api/items/:id
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success:true })))
        .catch(() => res.status(400).json({ success: false })); 
});

module.exports = router;
