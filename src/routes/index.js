var express = require('express');
var router = express.Router();
const mainController = require('../controllers/index');

/* GET home page. */
router.get('/', mainController.index);
router.get('/contactos', mainController.contactos)

module.exports = router;
