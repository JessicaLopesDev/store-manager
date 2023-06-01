const services = require('../services/sales');

const SalesController = {
  searchSales: async (_req, res) => {
    const sales = await services.SearchSalesService();

    res.status(200).json(sales);
  },

  searchSalebyId: async (req, res) => {
    const { id } = req.params;

    const sale = await services.SearchSaleByIdService(id);

    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    res.status(200).json(sale);
  },

  createSale: async (req, res) => {
    const listOfProducts = req.body;

    const newSale = await services.CreateSaleService(listOfProducts);

    res.status(201).json(newSale);
  },

  // updateSale: async (req, res) => {
  //   const { name } = req.body;
  //   const { id } = req.params;
  //   const numberId = Number(id);

  //   const updatedSale = await services.UpdateSaleService(name, numberId);

  //   res.status(200).json(updatedSale);
  // },
};

module.exports = SalesController;
