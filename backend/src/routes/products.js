const express = require('express');

const ProductsController = require('../controllers/ProductsController');
const ProductNameValidator = require('../middlewares/ProductNameValidation');
const ProductIdValidation = require('../middlewares/ProductIdValidation');

const productRouter = express.Router();

productRouter.get('/', ProductsController.searchProducts);
productRouter.post('/', ProductNameValidator, ProductsController.createProduct);
productRouter.get('/:id', ProductsController.searchProductbyId);
productRouter.put(
  '/:id',
  ProductIdValidation,
  ProductNameValidator,
  ProductsController.updateProduct,
);

module.exports = productRouter;
