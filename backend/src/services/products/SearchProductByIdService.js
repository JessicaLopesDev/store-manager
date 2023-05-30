const ProductsModel = require('../../models/ProductsModel');

const SearchProductByIdService = async (id) => {
  const product = await ProductsModel.searchProductById(id);

  if (!product) return false;
  return product;
};

module.exports = SearchProductByIdService;
