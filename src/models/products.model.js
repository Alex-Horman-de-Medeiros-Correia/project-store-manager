const connection = require('./connection');

const getAllProductsFromSql = async () => {
  const [results] = await connection.execute(
    'SELECT * FROM products',
  );
  return results;
};

const getProductsByIdFromSql = async (id) => {
  const [results] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return results;
};

module.exports = {
  getAllProductsFromSql,
  getProductsByIdFromSql,
};
