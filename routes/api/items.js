const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items.js')

router.post('/posts/:id/items', itemsCtrl.create)
router.delete('/likes/:id', itemsCtrl.deleteItem)

module.exports = router;