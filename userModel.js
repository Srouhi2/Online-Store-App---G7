// models/userModel.js
const db = require("../config/db");

// Find user by username
exports.findUserByUsername = async (username) => {
  const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [username]);
  return rows[0];
};

// Create a new user
exports.createUser = async (username, password, email, full_name) => {
  const { rows } = await db.query(
    "INSERT INTO users (username, password, email, full_name) VALUES ($1, $2, $3, $4) RETURNING user_id, username",
    [username, password, email, full_name]
  );
  return rows[0];
};
