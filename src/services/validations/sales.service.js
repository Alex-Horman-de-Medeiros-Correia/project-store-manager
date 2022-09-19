const { salesModel } = require('../../models');

const getWaitingProducts = async (id) => {
  if (id) {
    const result = await salesModel.encontrandoProdutoPeloId(id);
    return { type: null, message: result };
  }
  const result = await salesModel.encontrandoTodosOsIds();
  return { type: null, message: result };
};

const create = async ({ name }) => {
  const newProduct = await salesModel.insert({ name });
  return { id: newProduct, name };
};

module.exports = {
  create,
  getWaitingProducts,
};
