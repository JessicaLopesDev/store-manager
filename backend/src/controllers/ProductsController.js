const { allProductsService } = require('../services/AllProductsService');

const allProducts = async (_req, res) => {
  const products = await allProductsService();
  res.status(200).json(products);
};

module.exports = { allProducts };
