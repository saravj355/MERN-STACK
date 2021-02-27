const router = require('express').Router();
const itemService = require('../../services/itemService');

// route: GET api/items
router.get('/', async (req, res) => {
    try {
        const items = await itemService.find().sort({date: -1});
        res.send(items);
    } catch(err){
        return res.status(404);
    }
});

// route: POST api/items
router.post('/', async (req, res) => {
    try {
        const item = await itemService.create(req.body);
        return res.send(item);
    } catch(err){
        return res.status(404);
    }
});

// route: DELETE api/items/:id
router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        await itemService.deleteById(itemId);

        return res.send({success: true});
    } catch(err){
        console.log(err);
        return res.status(404).send({success: false});
    }
});

module.exports = router;
