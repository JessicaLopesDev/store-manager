const ProductsModel = require('../models/ProductsModel');

const allProductsService = async () => {
  const products = await ProductsModel.allProducts();

  if (!products.length) return [];
  return products;
};

module.exports = { allProductsService };
