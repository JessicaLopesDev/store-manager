const connection = require('../database/connection');

const ProductsModel = {
  searchProducts: async () => {
    const [result] = await connection.execute(
      'SELECT * FROM products ORDER BY id',
    );
    return result;
  },

  searchProductById: async (id) => {
    const [[result]] = await connection.execute(
      `SELECT * FROM products WHERE id = ${id}`,
    );
    return result;
  },

  createProduct: async (name) => {
    const [result] = await connection.execute(
      'INSERT INTO products (name) VALUES (?)',
      [name],
    );
    return result.insertId;
  },

  updateProduct: async (name, id) => {
    await connection.execute('UPDATE products SET name = ? WHERE id = ?', [
      name,
      id,
    ]);
    // await connection.execute(
    //   `UPDATE products SET name = ${name} WHERE id = ${id}`,
    // );
    // return { name, id };
  },
};

module.exports = ProductsModel;
