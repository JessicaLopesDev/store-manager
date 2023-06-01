const SalesModel = require('../../models/SalesModel');

const CreateSaleService = async (listOfProducts) => {
  const newSaleId = await SalesModel.createId();

  await listOfProducts.map((sale) =>
    SalesModel.createSale(newSaleId, sale.productId, sale.quantity));

  return {
    id: newSaleId,
    itemsSold: listOfProducts,
  };
};

module.exports = CreateSaleService;
