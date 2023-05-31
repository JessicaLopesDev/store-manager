const connection = require('../database/connection');

const SalesModel = {
  searchSales: async () => {
    const [result] = await connection.execute(
      `SELECT s.id AS saleId, s.date, p.id AS productId, sp.quantity
      FROM sales AS s
      INNER JOIN sales_products AS sp
      ON sp.sale_id = s.id
      INNER JOIN products AS p
      ON sp.product_id = p.id
      ORDER BY saleId, productId`,
    );
    return result;
  },

  searchSaleById: async (id) => {
    const [result] = await connection.execute(
      `SELECT s.date, p.id AS productId, sp.quantity
      FROM sales AS s
      INNER JOIN sales_products AS sp
      ON sp.sale_id = s.id
      INNER JOIN products AS p
      ON sp.product_id = p.id
      WHERE sp.sale_id = ?
      ORDER BY productId`,
      [id],
    );
    return result;
  },

  // createsale: async (name) => {
  //   const [result] = await connection.execute(
  //     'INSERT INTO sales (name) VALUES (?)',
  //     [name],
  //   );
  //   return result.insertId;
  // },

  // updatesale: async (name, id) => {
  //   await connection.execute('UPDATE sales SET name = ? WHERE id = ?', [
  //     name,
  //     id,
  //   ]);
  //   // await connection.execute(
  //   //   `UPDATE sales SET name = ${name} WHERE id = ${id}`,
  //   // );
  //   // return { name, id };
  // },
};

module.exports = SalesModel;
