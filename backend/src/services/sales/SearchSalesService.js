const SalesModel = require('../../models/SalesModel');

const SearchSalesService = async () => {
  const sales = await SalesModel.searchSales();

  return sales;
};

module.exports = SearchSalesService;
