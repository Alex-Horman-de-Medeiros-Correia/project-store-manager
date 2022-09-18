const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.getAllProductsFromSql();
  return products;
};

const getProductById = async (id) => {
  const products = await productsModel.getProductsByIdFromSql(id);
  return products;
};

module.exports = {
  getProducts,
  getProductById,
};
