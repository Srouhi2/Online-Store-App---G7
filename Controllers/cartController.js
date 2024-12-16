const cartModel = require("../models/cartModel");

// Get user's cart
exports.getCart = async (req, res, next) => {
  try {
    const cart = await cartModel.getCartByUserId(req.user.id);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

// Add a product to the cart
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    // Validate required fields
    if (!productId || !quantity) {
      const error = new Error("Missing required fields: productId and quantity");
      error.status = 400; // Bad Request
      throw error;
    }

    const cartItem = await cartModel.addToCart(req.user.id, productId, quantity);
    res.status(201).json({ success: true, data: cartItem });
  } catch (err) {
    next(err);
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res, next) => {
  try {
    await cartModel.removeFromCart(req.user.id, req.params.id);
    res.json({ success: true, message: "Item removed from cart" });
  } catch (err) {
    next(err);
  }
};
