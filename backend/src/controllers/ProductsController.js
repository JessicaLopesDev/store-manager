const CreateProductService = require('../services/products/CreateProductService');
const SearchProductByIdService = require('../services/products/SearchProductByIdService');
const SearchProductsService = require('../services/products/SearchProductsService');
const UpdateProductService = require('../services/products/UpdateProductService');

const ProductsController = {
  searchProducts: async (_req, res) => {
    const products = await SearchProductsService();

    res.status(200).json(products);
  },

  searchProductbyId: async (req, res) => {
    const { id } = req.params;

    const product = await SearchProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  },

  createProduct: async (req, res) => {
    const { name } = req.body;

    const newProduct = await CreateProductService(name);

    res.status(201).json(newProduct);
  },

  updateProduct: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const numberId = Number(id);

    const updatedProduct = await UpdateProductService(name, numberId);

    res.status(200).json(updatedProduct);
  },
};

module.exports = ProductsController;
