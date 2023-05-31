const SalesModel = require('../../models/SalesModel');

const SearchSaleByIdService = async (id) => {
  const sale = await SalesModel.searchSaleById(id);

  if (!sale.length) return false;
  return sale;
};

module.exports = SearchSaleByIdService;
