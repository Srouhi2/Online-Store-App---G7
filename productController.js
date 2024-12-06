const productModel = require("../models/productModel");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productModel.getAllProducts();
    res.json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { name, description, product_image, manufacturer_info } = req.body;
    const product = await productModel.addProduct(name, description, product_image, manufacturer_info);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

