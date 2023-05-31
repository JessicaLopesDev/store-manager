const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { products, product1 } = require('../mocks/productsMocks');
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

  it('Testa o CreateProductService, se cria um novo produto', async function () {
    sinon.stub(ProductsModel, 'createProduct').resolves(1);
    const result = await services.CreateProductService(product1.name);
    expect(result).to.be.deep.equal(product1);
  });

  it('Testa o UpdateProductService, se altera um produto', async function () {
    sinon.stub(ProductsModel, 'updateProduct').resolves();
    const result = await services.UpdateProductService(
      product1.name,
      product1.id,
    );
    expect(result).to.be.deep.equal(product1);
  });
});
