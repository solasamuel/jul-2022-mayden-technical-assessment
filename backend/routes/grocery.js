const express = require('express');
const router = express.Router();


const { getGroceries } = require('../controllers/groceryController')

router.route('/groceries').get(getGroceries);

module.exports = router;