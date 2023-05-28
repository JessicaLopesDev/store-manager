const express = require('express');

const { allProducts } = require('../controllers/ProductsController');

const productRouter = express.Router();

productRouter.get('/', allProducts);

module.exports = productRouter;
