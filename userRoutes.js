const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

// User authentication routes
router.post("/login", login);
router.post("/register", register); // For user registration

module.exports = router;
