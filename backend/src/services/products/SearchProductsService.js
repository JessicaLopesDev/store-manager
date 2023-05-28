const ProductsModel = require('../../models/ProductsModel');

const SearchProductsService = async () => {
  const products = await ProductsModel.searchProducts();

  if (!products.length) return [];
  return products;
};

module.exports = SearchProductsService;
