const { searchProductById } = require('../models/ProductsModel');

const ProductIdValidation = async (req, res, next) => {
  const { id } = req.params;

  const productById = await searchProductById(id);

  if (!productById) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = ProductIdValidation;
