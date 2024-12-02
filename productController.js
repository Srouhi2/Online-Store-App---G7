// controllers/productController.js
const productModel = require("../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { name, price, description, stock } = req.body;
    const product = await productModel.addProduct(name, price, description, stock);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
