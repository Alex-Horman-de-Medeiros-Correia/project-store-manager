const { productService } = require('../services/validations/index');

const errorMap = require('../utils/errorMap');

// refatorar depois se possível

const funcProduto = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getWaitingProducts(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

/* const func1 = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getWaitingProducts(id);
  res.status(200).json(message);
}; */

const create = async (req, res) => {
  const { name } = req.body;

  const newProduct = await productService.create({ name });

  res.status(201).json(newProduct);
};

const atualizandoProduto = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const newProduct = await productService.atualizandoProduto({ name, id });

  res.status(200).json(newProduct);
};

const deletandoP = async (req, res) => {
  const { id } = req.params;

  const newProduct = await productService.deletandoP({ id });

  res.status(204).json(newProduct);
};

module.exports = {
  funcProduto,
  create,
  atualizandoProduto,
  deletandoP,
};
