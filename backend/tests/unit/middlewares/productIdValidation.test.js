const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const ProductIdValidation = require('../../../src/middlewares/ProductIdValidation');
const ProductNameValidation = require('../../../src/middlewares/ProductNameValidation');

describe('Testes de middlewares', function () {
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
  it('Testa o ProductIdValidation', async function () {
    req.params = { id: 99 };
    await ProductIdValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Testa o ProductNameValidation', async function () {
    req.params = { id: 1 };
    req.body = { name: 'pa' };
    await ProductNameValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({
      message: '"name" length must be at least 5 characters long',
    });
  });
});
