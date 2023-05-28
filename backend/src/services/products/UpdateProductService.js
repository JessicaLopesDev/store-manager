const ProductsModel = require('../../models/ProductsModel');

const UpdateProductService = async ({ name, id }) => {
  await ProductsModel.createProduct({ name, id });

  return { id, name };
};

module.exports = UpdateProductService;
