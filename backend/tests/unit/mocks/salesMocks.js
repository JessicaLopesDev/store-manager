const sale1 = [
  {
    saleId: 1,
    date: '2023-05-31T14:32:22.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-05-31T14:32:22.000Z',
    productId: 2,
    quantity: 10,
  },
];

const listOfProducts = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const newSale = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

module.exports = { sale1, listOfProducts, newSale };
