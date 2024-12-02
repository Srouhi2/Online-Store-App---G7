// models/userModel.js
const db = require("../config/db");

exports.findUserByEmail = async (email) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return rows[0];
};

exports.createUser = async (username, email, password) => {
  const { rows } = await db.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, password]
  );
  return rows[0];
};
