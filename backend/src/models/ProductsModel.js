const connection = require('../database/connection');

const ProductModel = {
  allProducts: async () => {
    const [result] = await connection.execute('SELECT * FROM products');
    return result;
  },
};

module.exports = ProductModel;
