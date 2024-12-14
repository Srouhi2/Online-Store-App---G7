const productModel = require('../../models/productModel');
const db = require('../../config/db');

jest.mock('../../config/db', () => ({
  query: jest.fn(),
}));

describe('Product Model', () => {
  describe('getAllProducts', () => {
    it('should return all products', async () => {
      const mockProducts = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
      ];
      db.query.mockResolvedValueOnce({ rows: mockProducts });

      const result = await productModel.getAllProducts();

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM products');
      expect(result).toEqual(mockProducts);
    });
  });

  describe('getProductById', () => {
    it('should return a product by ID', async () => {
      const mockProduct = { id: 1, name: 'Product A' };
      db.query.mockResolvedValueOnce({ rows: [mockProduct] });

      const result = await productModel.getProductById(1);

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM products WHERE id = $1', [1]);
      expect(result).toEqual(mockProduct);
    });

    it('should return null if the product does not exist', async () => {
      db.query.mockResolvedValueOnce({ rows: [] });

      const result = await productModel.getProductById(999);

      expect(result).toBeUndefined();
    });
  });

  describe('addProduct', () => {
    it('should add a new product', async () => {
      const mockProduct = { id: 1, name: 'New Product' };
      db.query.mockResolvedValueOnce({ rows: [mockProduct] });

      const result = await productModel.addProduct(
        'New Product',
        'Description',
        'image.png',
        'Manufacturer'
      );

      expect(db.query).toHaveBeenCalledWith(
        'INSERT INTO Products (name, description, product_image, manufacturer_info) VALUES ($1, $2, $3, $4) RETURNING *',
        ['New Product', 'Description', 'image.png', 'Manufacturer']
      );
      expect(result).toEqual(mockProduct);
    });
  });
});
