const { Router } = require('express');

const productRouter = require('./products');
const salesRouter = require('./sales');

const appRoutes = Router();

appRoutes.use('/products', productRouter);
appRoutes.use('/sales', salesRouter);

module.exports = appRoutes;
