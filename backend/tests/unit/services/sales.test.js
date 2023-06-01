const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { sale1, listOfProducts, newSale } = require('../mocks/salesMocks');
const services = require('../../../src/services/sales');
const SalesModel = require('../../../src/models/SalesModel');

describe('Testes da camada service das vendas', function () {
  it('Testa o SearchSalesService, se retorna todas as vendas', async function () {
    sinon.stub(SalesModel, 'searchSales').resolves(sale1);
    const result = await services.SearchSalesService();
    expect(result).to.be.deep.equal(sale1);
  });

  describe('Testa o searchSaleById, se retorna a venda', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Id inexistente', async function () {
      sinon.stub(SalesModel, 'searchSaleById').resolves(false);
      const result = await services.SearchSaleByIdService(999);
      expect(result).to.be.equal(false);
    });
    it('Id existente', async function () {
      sinon.stub(SalesModel, 'searchSaleById').resolves(sale1);
      const result = await services.SearchSaleByIdService(1);
      expect(result).to.be.deep.equal(sale1);
    });
  });

  it('Testa o CreateSaleService, se cria uma nova venda', async function () {
    const id = sinon.stub(SalesModel, 'createId').resolves(1);
    sinon.stub(SalesModel, 'createSale').resolves(Number(id), 1, 1);
    const result = await services.CreateSaleService(listOfProducts);
    expect(result).to.be.deep.equal(newSale);
  });

  // it('Testa o UpdateSaleService, se altera um produto', async function () {
  //   sinon.stub(SalesModel, 'updateSale').resolves();
  //   const result = await services.UpdateSaleService(
  //     sale1.name,
  //     sale1.id,
  //   );
  //   expect(result).to.be.deep.equal(sale1);
  // });
});
