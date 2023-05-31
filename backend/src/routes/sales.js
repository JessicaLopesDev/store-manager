const express = require('express');
const SalesController = require('../controllers/SalesController');

const salesRouter = express.Router();

salesRouter.get('/', SalesController.searchSales);

module.exports = salesRouter;
