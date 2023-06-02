const ProductsModel = require('../models/ProductsModel');

const SaleQuantityValidation = async (req, res, next) => {
  const data = req.body;
  const quantityData = data.every((item) => item.quantity >= 1);

  const ids = await ProductsModel.searchProducts();
  const productIds = ids.map((product) => product.id);

  const every = data.every((obj) => productIds.includes(obj.productId));
  if (!every) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (!quantityData) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = SaleQuantityValidation;
