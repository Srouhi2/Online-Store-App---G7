const authController = require('../../controllers/authController');
const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

jest.mock('../../models/userModel');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Auth Controller', () => {
  describe('registerUser', () => {
    it('should register a new user successfully', async () => {
      userModel.findUserByUsername.mockResolvedValue(null); // No existing user
      bcrypt.hash.mockResolvedValue('hashedPassword');
      userModel.createUser.mockResolvedValue(1); // Mock new user ID

      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await authController.registerUser(req, res);

      expect(userModel.findUserByUsername).toHaveBeenCalledWith('testuser');
      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(userModel.createUser).toHaveBeenCalledWith('testuser', 'hashedPassword');
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully', userId: 1 });
    });

    it('should return an error if username already exists', async () => {
      userModel.findUserByUsername.mockResolvedValue({ id: 1 }); // Existing user

      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await authController.registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ error: 'Username already exists' });
    });
  });

  describe('loginUser', () => {
    it('should log in a user successfully', async () => {
      const mockUser = { id: 1, username: 'testuser', password: 'hashedPassword' };
      userModel.findUserByUsername.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('fakeToken');

      const req = { body: { username: 'testuser', password: 'password123' } };
      const res = { json: jest.fn() };

      await authController.loginUser(req, res);

      expect(userModel.findUserByUsername).toHaveBeenCalledWith('testuser');
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword');
      expect(jwt.sign).toHaveBeenCalledWith({ id: 1 }, process.env.JWT_SECRET, { expiresIn: '1h' });
      expect(res.json).toHaveBeenCalledWith({ message: 'Login successful', token: 'fakeToken' });
    });

    it('should return an error for invalid credentials', async () => {
      userModel.findUserByUsername.mockResolvedValue(null);

      const req = { body: { username: 'invaliduser', password: 'wrongpassword' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await authController.loginUser(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid username or password' });
    });
  });
});
