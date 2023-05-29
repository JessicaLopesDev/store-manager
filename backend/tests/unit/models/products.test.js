const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/database/connection');
const { products } = require('../mocks');

const ProductsModel = require('../../../src/models/ProductsModel');

describe('Testes da camada model dos produtos', function () {
  // afterEach(function () {
  //   sinon.restore();
  // });

  it('Testa o searchProducts, se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await ProductsModel.searchProducts();
    expect(result).to.be.deep.equal(products);
  });
});
