const { salesService } = require('../services/validations/index');
const errorMap = require('../utils/errorMap');

const funcProduto = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getWaitingProducts(id);
  if (type) return res.status(errorMap.mapError(type)).json(message);
  /* if (type) {
    return res.status(errorMap()).json(message);
  } */
  res.status(200).json(message);
};

module.exports = {
  funcProduto,
};
