const SalesModel = require('../../models/SalesModel');

const SearchSaleByIdService = async (id) => {
  const sale = await SalesModel.searchSaleById(id);

  if (!sale) return false;
  return sale;
};

module.exports = SearchSaleByIdService;
