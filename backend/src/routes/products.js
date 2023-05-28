const express = require('express');

const productRouter = express.Router();

productRouter.get('/', () => console.log('products found'));

module.exports = productRouter;
