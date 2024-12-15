const cartModel = require('../../models/cartModel.js');
const db = require('../../config/db');

jest.mock('../../config/db', () => ({
  query: jest.fn(),
}));

describe('Cart Model', () => {
  describe('getCartByUserId', () => {
    it('should return the user’s cart', async () => {
      const mockCart = [{ id: 1, user_id: 1, product_id: 1, quantity: 2 }];
      db.query.mockResolvedValueOnce({ rows: mockCart });

      const result = await cartModel.getCartByUserId(1);

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM cart WHERE user_id = $1', [1]);
      expect(result).toEqual(mockCart);
    });
  });

  describe('addToCart', () => {
    it('should add a product to the cart', async () => {
      const mockCartItem = { id: 1, user_id: 1, product_id: 1, quantity: 2 };
      db.query.mockResolvedValueOnce({ rows: [mockCartItem] });

      const result = await cartModel.addToCart(1, 1, 2);

      expect(db.query).toHaveBeenCalledWith(
        'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
        [1, 1, 2]
      );
      expect(result).toEqual(mockCartItem);
    });
  });
});
