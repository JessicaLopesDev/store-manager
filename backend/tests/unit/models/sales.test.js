const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/database/connection');
const { sales, sale1 } = require('../mocks/salesMocks');

const SalesModel = require('../../../src/models/SalesModel');

describe('Testes da camada model dos produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa o searchSales, se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await SalesModel.searchSales();
    expect(result).to.be.deep.equal(sales);
  });

  it('Testa o searchSaleById, se retorna o produto', async function () {
    sinon.stub(connection, 'execute').resolves([sales[0]]);
    const result = await SalesModel.searchSaleById(1);
    expect(result).to.be.deep.equal(sales[0]);
  });

  // it('Testa o createSale, se cria um novo produto', async function () {
  //   const newSaleId = { insertId: 99 };
  //   const newSaleName = { name: 'Sapato' };
  //   sinon.stub(connection, 'execute').resolves([newSaleId]);
  //   const result = await SalesModel.createSale(newSaleName);
  //   expect(result).to.be.equal(99);
  // });

  // it('Testa o updateSale, se altera um produto', async function () {
  //   sinon.stub(connection, 'execute').resolves();
  //   const result = await SalesModel.updateSale(
  //     sale1.name,
  //     sale1.id,
  //   );
  //   expect(result).to.be.equal();
  // });
});
