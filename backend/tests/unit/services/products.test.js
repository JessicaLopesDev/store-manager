const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { products } = require('../mocks');
const ProductsModel = require('../../../src/models/ProductsModel');
const SearchProductsService = require('../../../src/services/products/SearchProductsService');

describe('Teste produtos', function () {
  it('Testa se retorna todos produtos', async function () {
    sinon.stub(ProductsModel, 'getAllProducts').resolves(products);
    const result = await SearchProductsService();
    expect(result).to.be.deep.equal(products);
  });
});
