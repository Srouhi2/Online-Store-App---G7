// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { getAllProducts, addProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getAllProducts);
router.post("/", authMiddleware, addProduct);

module.exports = router;
