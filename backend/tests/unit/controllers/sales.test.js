const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const services = require('../../../src/services/sales');

const SalesController = require('../../../src/controllers/SalesController');

const { sale1, listOfProducts, newSale } = require('../mocks/salesMocks');

describe('Testes da camada controller das vendas', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Testa o , se retorna todas as vendas e status 200', async function () {
    sinon.stub(services, 'SearchSalesService').resolves(sale1);

    await SalesController.searchSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sale1);
  });

  it('Testa o searchSaleById, id inexistente', async function () {
    req.params = { id: 999 };
    sinon.stub(services, 'SearchSaleByIdService').resolves(false);

    await SalesController.searchSalebyId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });

  it('Testa o searchSaleById, id existente', async function () {
    req.params = { id: 1 };
    sinon.stub(services, 'SearchSaleByIdService').resolves(sale1);

    await SalesController.searchSalebyId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sale1);
  });

  it('Testa o createSale', async function () {
    req.body = { itemsSold: listOfProducts };
    sinon.stub(services, 'CreateSaleService').resolves(newSale);

    await SalesController.createSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSale);
  });

  // it('Testa o updateSale', async function () {
  //   req.params = { id: 1 };
  //   req.body = { name: 'Sapato' };
  //   sinon
  //     .stub(services, 'UpdateSaleService')
  //     .resolves({ id: req.params.id, name: req.body.name });

  //   await SalesController.updateSale(req, res);

  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith({
  //     id: 1,
  //     name: 'Sapato',
  //   });
  // });
});
