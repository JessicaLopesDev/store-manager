// const { searchSaleById } = require('../models/SalesModel');

const SaleIdValidation = async (req, res, next) => {
  const data = req.body;
  const productIdExist = data.every((item) => Object.keys(item).includes('productId'));
  const quantityExist = data.every((item) => Object.keys(item).includes('quantity'));
  
  if (!productIdExist) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (!quantityExist) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = SaleIdValidation;
