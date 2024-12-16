const productController = require('../../controllers/productController');
const productModel = require('../../models/productModel');

// Mock the productModel methods
jest.mock('../../models/productModel');

describe('Product Controller', () => {
  let mockResponse, mockRequest, mockNext;

  beforeEach(() => {
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockRequest = {};
    mockNext = jest.fn();
  });

  describe('getAllProducts', () => {
    it('should return all products successfully', async () => {
      const mockProducts = [
        { product_id: 1, name: 'T-shirt', description: 'Latest model' },
        { product_id: 2, name: 'Pants', description: 'Bestselling' },
      ];
      productModel.getAllProducts.mockResolvedValue(mockProducts);

      await productController.getAllProducts(mockRequest, mockResponse, mockNext);

      expect(productModel.getAllProducts).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockProducts,
      });
    });

    it('should handle errors', async () => {
      const mockError = new Error('Database Error');
      productModel.getAllProducts.mockRejectedValue(mockError);

      await productController.getAllProducts(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('getProductById', () => {
    it('should return a product by ID successfully', async () => {
      const mockProduct = {
        product_id: 1,
        name: 'T-shirt',
        description: 'Latest model',
      };
      mockRequest.params = { id: 1 };
      productModel.getProductById.mockResolvedValue(mockProduct);

      await productController.getProductById(mockRequest, mockResponse, mockNext);

      expect(productModel.getProductById).toHaveBeenCalledWith(1);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockProduct,
      });
    });

    it('should return 404 if product is not found', async () => {
      mockRequest.params = { id: 999 };
      productModel.getProductById.mockResolvedValue(null);

      await productController.getProductById(mockRequest, mockResponse, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: 'Product not found',
      });
    });

    it('should handle errors', async () => {
      const mockError = new Error('Database Error');
      mockRequest.params = { id: 1 };
      productModel.getProductById.mockRejectedValue(mockError);

      await productController.getProductById(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('addProduct', () => {
    it('should add a new product successfully', async () => {
      const mockProduct = {
        product_id: 1,
        name: 'T-shirt',
        description: 'Latest model',
      };
      mockRequest.body = {
        name: 'T-shirt',
        description: 'Latest model',
        product_image: 't-shirt.jpg',
        manufacturer_info: 'Adidas',
      };
      productModel.addProduct.mockResolvedValue(mockProduct);

      await productController.addProduct(mockRequest, mockResponse, mockNext);

      expect(productModel.addProduct).toHaveBeenCalledWith(
        'T-shirt',
        'Latest model',
        't-shirt.jpg',
        'Adidas'
      );
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockProduct,
      });
    });

    it('should handle errors', async () => {
      const mockError = new Error('Database Error');
      mockRequest.body = {
        name: 'T-shirt',
        description: 'Latest model',
        product_image: 't-shirt.jpg',
        manufacturer_info: 'Adidas',
      };
      productModel.addProduct.mockRejectedValue(mockError);

      await productController.addProduct(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});
