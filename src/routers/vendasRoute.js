const express = require('express');
const vendasCon = require('../controllers/vendasCon');
const salesMiddle = require('../middlewares/salesMiddle');

const router = express.Router();

router.get('/', vendasCon.openProduct);

router.get('/:id', salesMiddle, vendasCon.openProduct);

module.exports = router;
