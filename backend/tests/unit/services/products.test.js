const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { products } = require('../mocks');
const services = require('../../../src/services/products');
const ProductsModel = require('../../../src/models/ProductsModel');

describe('Testes da camada service dos produtos', function () {
  it('Testa o SearchProductsService, se retorna todos os produtos', async function () {
    sinon.stub(ProductsModel, 'searchProducts').resolves(products);
    const result = await services.SearchProductsService();
    expect(result).to.be.deep.equal(products);
  });

  describe('Testa o searchProductById, se retorna o produto', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Id inexistente', async function () {
      sinon.stub(ProductsModel, 'searchProductById').resolves(false);
      const result = await services.SearchProductByIdService(999);
      expect(result).to.be.equal(false);
    });
    it('Id existente', async function () {
      sinon.stub(ProductsModel, 'searchProductById').resolves(products[0]);
      const result = await services.SearchProductByIdService(1);
      expect(result).to.be.deep.equal(products[0]);
    });
  });
});
