const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/database/connection');
const { products, product1 } = require('../mocks');

const ProductsModel = require('../../../src/models/ProductsModel');

describe('Testes da camada model dos produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa o searchProducts, se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await ProductsModel.searchProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('Testa o searchProductById, se retorna o produto', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await ProductsModel.searchProductById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Testa o createProduct, se cria um novo produto', async function () {
    const newProductId = { insertId: 99 };
    const newProductName = { name: 'Sapato' };
    sinon.stub(connection, 'execute').resolves([newProductId]);
    const result = await ProductsModel.createProduct(newProductName);
    expect(result).to.be.equal(99);
  });

  it('Testa o updateProduct, se altera um produto', async function () {
    sinon.stub(connection, 'execute').resolves();
    const result = await ProductsModel.updateProduct(
      product1.name,
      product1.id,
    );
    expect(result).to.be.equal();
  });
});
