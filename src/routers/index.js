const express = require('express');

const productionController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productionController.getAllProducts);
// lembrar de consertar essa parte

router.get('/:id', productionController.getAllProductsById);

module.exports = router;
