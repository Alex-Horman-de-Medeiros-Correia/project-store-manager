const { pModel } = require('../../models');

const getWaitingProducts = async (id) => {
  if (id) {
    const result = await pModel.findByProductId(id);
    return { type: null, message: result };
  }
  const result = await pModel.findByAllId();
  return { type: null, message: result };
};

const create = async ({ name }) => {
  const newProduct = await pModel.insert({ name });
  return { id: newProduct, name };
};

const updateByProduct = async ({ name, id }) => {
  await console.log(name, id);
  await pModel.updateById(name, id);
  return { id, name };
};

const deleteByProduct = async ({ id }) => {
  await pModel.deleteById(id);
};

module.exports = {
  getWaitingProducts,
  create,
  updateByProduct,
  deleteByProduct,
};
