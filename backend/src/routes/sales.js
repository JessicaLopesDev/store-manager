const express = require('express');

const salesRouter = express.Router();

salesRouter.get('/', () => console.log('sales found'));

module.exports = salesRouter;
