const db = require("../config/db");

exports.getAllProducts = async () => {
  const { rows } = await db.query("SELECT * FROM products");
  return rows;
};

exports.getProductById = async (id) => {
  const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [id]);
  return rows[0];
};

exports.addProduct = async (name, description, productImage, manufacturer_info) => {
  const { rows } = await db.query(
      "INSERT INTO Products (name, description, product_image, manufacturer_info) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, productImage, manufacturer_info]
  );
  return rows[0];
};

