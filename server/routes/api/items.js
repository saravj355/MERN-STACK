const router = require('express').Router();
const itemService = require('../../services/itemService');

// route: GET api/items
router.get('/', async (req, res) => {
    try {
        const items = await itemService.find().sort({date: -1});
        return res.send(items);
    } catch(err){
        return res.status(404);
    }
});

// route: POST api/items
router.post('/', async (req, res) => {
    try {
        const item = await itemService.create(req);
        return res.json(item);
    } catch(err){
        return res.status(404);
    }
});

// route: DELETE api/items/:id
router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await itemService.findById(itemId);

        
    } catch(err){
        return res.status(404);
    }
});

module.exports = router;
