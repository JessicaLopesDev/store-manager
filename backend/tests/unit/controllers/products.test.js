const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const services = require('../../../src/services/products');

const ProductsController = require('../../../src/controllers/ProductsController');

const { products } = require('../mocks');

describe('Testes da camada controller dos produtos', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Testa o , se retorna todos os produtos e status 200', async function () {
    sinon.stub(services, 'SearchProductsService').resolves(products);

    await ProductsController.searchProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });
});
