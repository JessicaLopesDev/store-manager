const ProductsModel = require('../../models/ProductsModel');

const SearchProductsService = async () => {
  const products = await ProductsModel.searchProducts();

  return products;
};

module.exports = SearchProductsService;
