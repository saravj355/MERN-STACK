const router = require('express').Router();
const httpResponse = require('../../services/httpResponse');
const itemService = require('../../services/itemService');

// route: GET api/items
router.get('/', async (req, res) => {
    try {
        const items = await itemService.find().sort({date: -1});
        return res.send(items);
    } catch(err){
        httpResponse.error(res, 'failed finding items');
    }
});

// route: POST api/items
router.post('/', async (req, res) => {
    try {
        const item = await itemService.create(req);
        return res.json(item);
    } catch(err){
        httpResponse.error(res, 'item creation failed', err);
    }
});

// route: DELETE api/items/:id
router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await itemService.findById(itemId);
		
        
    } catch(err){
        httpResponse.error(res, 'item deletion failed', err);
    }
});

module.exports = router;
