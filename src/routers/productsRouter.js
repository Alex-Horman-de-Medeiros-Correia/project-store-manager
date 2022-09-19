const express = require('express');

const productionController = require('../controllers/products.controller');

const { validateName } = require('../middlewares/validationNames');

const router = express.Router();

/* router.get('/', productionController.getAllProducts); */
router.get('/', productionController.getProductsController);

/* router.get('/:id', productionController.getAllProductsById); */
router.post('/', validateName, productionController.createPostProductController);

router.get('/:id', productionController.getProductsByIdController);

module.exports = {
  router,
};
