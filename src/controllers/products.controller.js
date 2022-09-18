const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const response = await productService.getProducts();
  res.status(200).json(response);
};

const getAllProductsById = async (req, res) => {
  const { id } = req.params;
  const response = await productService.getProductById(id);
  if (!response[0]) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(response[0]);
};

module.exports = {
  getAllProducts,
  getAllProductsById,
};
