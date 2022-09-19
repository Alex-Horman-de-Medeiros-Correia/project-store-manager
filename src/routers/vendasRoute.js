const express = require('express');
const vendasCon = require('../controllers/vendasCon');
const salesMiddle = require('../middlewares/salesMiddle');

const router = express.Router();

router.get('/', vendasCon.funcProduto);

router.get('/:id', salesMiddle, vendasCon.funcProduto);

module.exports = router;
