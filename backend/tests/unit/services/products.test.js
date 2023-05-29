const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { products } = require('../mocks');
const ProductsModel = require('../../../src/models/ProductsModel');
const SearchProductsService = require('../../../src/services/products/SearchProductsService');

describe('Testes da camada service dos produtos', function () {
  it('Testa o SearchProductsService, se retorna todos os produtos', async function () {
    sinon.stub(ProductsModel, 'searchProducts').resolves(products);
    const result = await SearchProductsService();
    expect(result).to.be.deep.equal(products);
  });
});
