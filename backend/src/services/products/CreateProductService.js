const ProductsModel = require('../../models/ProductsModel');

const CreateProductService = async (name) => {
  const newProductId = await ProductsModel.createProduct(name);

  return {
    id: newProductId,
    name,
  };
};

module.exports = CreateProductService;
