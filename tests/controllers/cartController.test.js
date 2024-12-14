const cartController = require('../../controllers/cartController');
const cartModel = require('../../models/cartModel');

jest.mock('../../models/cartModel'); // Mock the cart model

describe('Cart Controller', () => {
  let mockRequest, mockResponse, mockNext;

  beforeEach(() => {
    mockRequest = { user: { id: 1 }, body: {}, params: {} };
    mockResponse = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    mockNext = jest.fn();
  });

  describe('getCart', () => {
    it('should return the user’s cart', async () => {
      const mockCart = [{ product_id: 1, quantity: 2 }];
      cartModel.getCartByUserId.mockResolvedValue(mockCart);

      await cartController.getCart(mockRequest, mockResponse, mockNext);

      expect(cartModel.getCartByUserId).toHaveBeenCalledWith(1);
      expect(mockResponse.json).toHaveBeenCalledWith({ success: true, data: mockCart });
    });

    it('should handle database errors', async () => {
      const mockError = new Error('Database Error');
      cartModel.getCartByUserId.mockRejectedValue(mockError);

      await cartController.getCart(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('addToCart', () => {
    it('should add a product to the cart', async () => {
      const mockCartItem = { product_id: 1, quantity: 2 };
      mockRequest.body = { productId: 1, quantity: 2 };
      cartModel.addToCart.mockResolvedValue(mockCartItem);

      await cartController.addToCart(mockRequest, mockResponse, mockNext);

      expect(cartModel.addToCart).toHaveBeenCalledWith(1, 1, 2);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({ success: true, data: mockCartItem });
    });

    it('should handle missing fields in the request', async () => {
      mockRequest.body = { quantity: 2 }; // Missing productId

      await cartController.addToCart(mockRequest, mockResponse, mockNext);

      // We expect this to not call the model method
      expect(cartModel.addToCart).not.toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(expect.any(Error)); // Check if an error is passed
    });

    it('should handle database errors', async () => {
      const mockError = new Error('Database Error');
      mockRequest.body = { productId: 1, quantity: 2 };
      cartModel.addToCart.mockRejectedValue(mockError);

      await cartController.addToCart(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('removeFromCart', () => {
    it('should remove an item from the cart', async () => {
      mockRequest.params.id = 1;
      cartModel.removeFromCart.mockResolvedValue();

      await cartController.removeFromCart(mockRequest, mockResponse, mockNext);

      expect(cartModel.removeFromCart).toHaveBeenCalledWith(1, 1);
      expect(mockResponse.json).toHaveBeenCalledWith({ success: true, message: 'Item removed from cart' });
    });

    it('should handle database errors', async () => {
      const mockError = new Error('Database Error');
      mockRequest.params.id = 1;
      cartModel.removeFromCart.mockRejectedValue(mockError);

      await cartController.removeFromCart(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
