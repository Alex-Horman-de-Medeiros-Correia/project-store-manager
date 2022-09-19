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

const postProductsInSql = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  const product = { id: result.insertId, name };
  return product;
};

module.exports = {
  postProductsInSql,
  getAllProductsFromSql,
  getProductsByIdFromSql,
};
