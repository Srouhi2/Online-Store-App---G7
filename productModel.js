// models/productModel.js
const db = require("../config/db");

exports.getAllProducts = async () => {
  const { rows } = await db.query("SELECT * FROM products");
  return rows;
};

exports.addProduct = async (name, price, description, stock) => {
  const { rows } = await db.query(
    "INSERT INTO products (name, price, description, stock) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, price, description, stock]
  );
  return rows[0];
};
