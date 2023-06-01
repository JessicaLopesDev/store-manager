const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/database/connection');
const { sale1, listOfProducts } = require('../mocks/salesMocks');

const SalesModel = require('../../../src/models/SalesModel');

describe('Testes da camada model das vendas', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa o searchSales, se retorna todos as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([sale1]);
    const result = await SalesModel.searchSales();
    expect(result).to.be.deep.equal(sale1);
  });

  it('Testa o searchSaleById, se retorna a venda', async function () {
    sinon.stub(connection, 'execute').resolves([sale1]);
    const result = await SalesModel.searchSaleById(1);
    expect(result).to.be.deep.equal(sale1);
  });

  it('Testa o createSale, se cria uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves();
    const result = await SalesModel.createSale(1, 1, 1);
    expect(result).to.be.deep.equal(listOfProducts[0]);
  });

  // it('Testa o updateSale, se altera um produto', async function () {
  //   sinon.stub(connection, 'execute').resolves();
  //   const result = await SalesModel.updateSale(
  //     sale1.name,
  //     sale1.id,
  //   );
  //   expect(result).to.be.equal();
  // });
});
