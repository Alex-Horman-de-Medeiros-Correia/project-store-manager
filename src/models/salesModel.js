const connection = require('./connection');

// vale dizer que tanto no model quanto em outros aspectos da arquitetura MSC, eu recebi ajuda de colegas.

const encontrandoProdutoPeloId = async (productId) => {
  const [result] = await connection.execute(
    `SELECT sa.date date, sp.product_id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
WHERE sp.sale_id = ?
ORDER BY sp.sale_id, sp.product_id;`,
    [productId],
  );
  return result;
};

const encontrandoTodosOsIds = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id saleId, sa.date date, sp.product_id productId, sp.quantity
FROM StoreManager.sales sa
INNER JOIN StoreManager.sales_products sp
ON sa.id = sp.sale_id
ORDER BY sp.sale_id, sp.product_id;`,
  );
  return result;
};

module.exports = {
  encontrandoProdutoPeloId,
  encontrandoTodosOsIds,
};
