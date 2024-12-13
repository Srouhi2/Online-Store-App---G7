const cartModel = require("../models/cartModel");

exports.getCart = async (req, res, next) => {
  try {
    const cart = await cartModel.getCartByUserId(req.user.id);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = await cartModel.addToCart(req.user.id, productId, quantity);
    res.status(201).json({ success: true, data: cartItem });
  } catch (err) {
    next(err);
  }
};

exports.removeFromCart = async (req, res, next) => {
  try {
    await cartModel.removeFromCart(req.user.id, req.params.id);
    res.json({ success: true, message: "Item removed from cart" });
  } catch (err) {
    next(err);
  }
};
