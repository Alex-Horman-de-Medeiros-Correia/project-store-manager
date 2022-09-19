const serviceProduct = require('../services/products.service');

/* const getAllProducts = async (_req, res) => {
  const response = await productService.getProducts();
  res.status(200).json(response);
}; */

const getProductsController = async (_req, res) => {
  const response = await serviceProduct.getProductsService();
  res.status(200).json(response);
};

const getProductsByIdController = async (req, res) => {
  const { id } = req.params;
  const response = await serviceProduct.getProductByIdService(id);
  if (!response[0]) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(response[0]);
};

const createPostProductController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await serviceProduct.postProductService(name);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};

module.exports = {
  getProductsController,
  getProductsByIdController,
  createPostProductController,
};
