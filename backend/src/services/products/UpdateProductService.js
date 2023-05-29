const ProductsModel = require('../../models/ProductsModel');

const UpdateProductService = async (name, id) => {
  console.log(name, id);
  await ProductsModel.updateProduct(name, id);

  return { id, name };
};

module.exports = UpdateProductService;
