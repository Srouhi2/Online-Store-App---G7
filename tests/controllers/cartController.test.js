const cartController = require('../../controllers/cartController.js');
const cartModel = require('../../models/cartModel.js');

jest.mock('../../models/cartModel.js', () => ({
  addToCart: jest.fn(),
  getCartByUserId: jest.fn(),
  removeFromCart: jest.fn(),
}));

describe('Cart Controller', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  describe('getCart', () => {
    it('should return the user\'s cart', async () => {
      const mockCart = [{ id: 1, product_id: 1, quantity: 2 }];
      cartModel.getCartByUserId.mockResolvedValue(mockCart);

      const req = { user: { id: 1 } };
      const res = { json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.getCart(req, res, mockNext);

      expect(cartModel.getCartByUserId).toHaveBeenCalledWith(1);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockCart });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      const error = new Error('Database error');
      cartModel.getCartByUserId.mockRejectedValue(error);

      const req = { user: { id: 1 } };
      const res = { json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.getCart(req, res, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('addToCart', () => {
    it('should add a product to the cart', async () => {
      const mockCartItem = { id: 1, product_id: 1, quantity: 2 };
      cartModel.addToCart.mockResolvedValue(mockCartItem);

      const req = { body: { productId: 1, quantity: 2 }, user: { id: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.addToCart(req, res, mockNext);

      expect(cartModel.addToCart).toHaveBeenCalledWith(1, 1, 2);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockCartItem });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should handle missing fields in the request', async () => {
      const req = { body: { quantity: 2 }, user: { id: 1 } }; // Missing productId
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.addToCart(req, res, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
      expect(mockNext.mock.calls[0][0].message).toBe('Missing required fields: productId and quantity');
      expect(mockNext.mock.calls[0][0].status).toBe(400);
    });

    it('should handle database errors', async () => {
      const error = new Error('Database error');
      cartModel.addToCart.mockRejectedValue(error);

      const req = { body: { productId: 1, quantity: 2 }, user: { id: 1 } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.addToCart(req, res, mockNext);

      expect(cartModel.addToCart).toHaveBeenCalledWith(1, 1, 2);
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('removeFromCart', () => {
    it('should remove a product from the cart', async () => {
      cartModel.removeFromCart.mockResolvedValue();

      const req = { params: { id: 1 }, user: { id: 1 } };
      const res = { json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.removeFromCart(req, res, mockNext);

      expect(cartModel.removeFromCart).toHaveBeenCalledWith(1, 1);
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Item removed from cart' });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should handle database errors when removing a product', async () => {
      const error = new Error('Database error');
      cartModel.removeFromCart.mockRejectedValue(error);

      const req = { params: { id: 1 }, user: { id: 1 } };
      const res = { json: jest.fn() };
      const mockNext = jest.fn();

      await cartController.removeFromCart(req, res, mockNext);

      expect(cartModel.removeFromCart).toHaveBeenCalledWith(1, 1);
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
