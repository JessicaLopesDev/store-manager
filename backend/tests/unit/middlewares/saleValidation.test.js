const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const SaleIdValidation = require('../../../src/middlewares/SaleIdValidation');
const SaleQuantityValidation = require('../../../src/middlewares/SaleQuantityValidation');

describe('Testes de middlewares de vendas', function () {
  const req = {};
  const res = {};
  const next = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Testa o SaleIdValidation se não for passado no body um productId', async function () {
    req.body = [{ quantity: 2 }];
    await SaleIdValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: '"productId" is required',
    });
  });

  it('Testa o SaleIdValidation se não for passado no body uma quantidade', async function () {
    req.body = [{ productId: 1 }];
    await SaleIdValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: '"quantity" is required',
    });
  });

  it('Testa o SaleQuantityValidation se não existir o productId', async function () {
    req.body = [
      { productId: 999, quantity: 1 },
    ];
    await SaleQuantityValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

    it('Testa o SaleQuantityValidation se quantity for menor que 1', async function () {
      req.body = [{ productId: 1, quantity: 0 }];
      await SaleQuantityValidation(req, res, next);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: '"quantity" must be greater than or equal to 1',
      });
    });
});
