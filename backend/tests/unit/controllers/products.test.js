const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const {
  ProductsController,
} = require('../../../src/controllers/ProductsController');
const {
  SearchProductsService,
} = require('../../../src/services/products/SearchProductsService');

const { products } = require('./mocks');

describe('Testes produtos', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  test('Testa se retorna a lista completa de produtos e status 200', async function () {
    sinon.stub(SearchProductsService, 'searchProducts').resolves(products);

    await ProductsController.searchProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
});
