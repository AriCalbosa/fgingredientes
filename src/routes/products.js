var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET users listing. */
router.get('/', productController.list);

module.exports = router;
