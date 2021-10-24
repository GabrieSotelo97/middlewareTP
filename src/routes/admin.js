var express = require('express');
var router = express.Router();
const { admin } = require('../controllers/adminController')
const adminAccess = require('../middlewares/adminAccess')
/* GET home page. */
router.get('/', adminAccess, admin);

module.exports = router;