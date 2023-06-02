const express = require('express');

const ProductsController = require('../controllers/ProductsController');
const ProductNameValidation = require('../middlewares/ProductNameValidation');
const ProductIdValidation = require('../middlewares/ProductIdValidation');

const productRouter = express.Router();

productRouter.get('/', ProductsController.searchProducts);
productRouter.post('/', ProductNameValidation, ProductsController.createProduct);
productRouter.get('/:id', ProductsController.searchProductbyId);
productRouter.put(
  '/:id',
  ProductIdValidation,
  ProductNameValidation,
  ProductsController.updateProduct,
);
productRouter.delete('/:id', ProductIdValidation, ProductsController.deleteProduct);

module.exports = productRouter;
