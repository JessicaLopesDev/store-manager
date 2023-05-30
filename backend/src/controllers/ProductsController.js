const services = require('../services/products');

const ProductsController = {
  searchProducts: async (_req, res) => {
    const products = await services.SearchProductsService();

    res.status(200).json(products);
  },

  searchProductbyId: async (req, res) => {
    const { id } = req.params;

    const product = await services.SearchProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  },

  createProduct: async (req, res) => {
    const { name } = req.body;

    const newProduct = await services.CreateProductService(name);

    res.status(201).json(newProduct);
  },

  updateProduct: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const numberId = Number(id);

    const updatedProduct = await services.UpdateProductService(name, numberId);

    res.status(200).json(updatedProduct);
  },
};

module.exports = ProductsController;
