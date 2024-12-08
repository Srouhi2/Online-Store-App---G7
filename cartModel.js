const db = require("../config/db");

exports.getCartByUserId = async (userId) => {
  const { rows } = await db.query("SELECT * FROM cart WHERE user_id = $1", [userId]);
  return rows;
};

exports.addToCart = async (userId, productId, quantity) => {
  const { rows } = await db.query(
    "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
    [userId, productId, quantity]
  );
  return rows[0];
};

exports.removeFromCart = async (userId, cartItemId) => {
  await db.query("DELETE FROM cart WHERE user_id = $1 AND id = $2", [userId, cartItemId]);
};
