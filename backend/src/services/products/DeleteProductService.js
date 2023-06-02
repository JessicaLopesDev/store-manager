const ProductsModel = require('../../models/ProductsModel');

const DeleteProductService = async (id) => {
  const product = await ProductsModel.deleteProduct(id);
  console.log(product);

  return product;
};

module.exports = DeleteProductService;
