const express = require('express');
const SalesController = require('../controllers/SalesController');
const SaleIdValidation = require('../middlewares/SaleIdValidation');
const SaleQuantityValidation = require('../middlewares/SaleQuantityValidation');

const salesRouter = express.Router();

salesRouter.get('/', SalesController.searchSales);
salesRouter.post('/', SaleIdValidation, SaleQuantityValidation, SalesController.createSale);
salesRouter.get('/:id', SalesController.searchSalebyId);

module.exports = salesRouter;
