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

  it('Testa o searchProductById, id inexistente', async function () {
    req.params = { id: 999 };
    sinon.stub(services, 'SearchProductByIdService').resolves(false);

    await ProductsController.searchProductbyId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Testa o searchProductById, id existente', async function () {
    req.params = { id: 1 };
    sinon.stub(services, 'SearchProductByIdService').resolves(products[0]);

    await ProductsController.searchProductbyId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  it('Testa o createProduct', async function () {
    req.body = { name: 'Sapato' };
    sinon.stub(services, 'CreateProductService').resolves(req.body);

    await ProductsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ name: 'Sapato' });
  });

  it('Testa o updateProduct', async function () {
    req.params = { id: 1 };
    req.body = { name: 'Sapato' };
    sinon
      .stub(services, 'UpdateProductService')
      .resolves({ id: req.params.id, name: req.body.name });

    await ProductsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({
      id: 1,
      name: 'Sapato',
    });
  });
});
