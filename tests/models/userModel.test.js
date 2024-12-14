const userModel = require('../../models/userModel');
const db = require('../../config/db');

jest.mock('../../config/db', () => ({
  query: jest.fn(),
}));

describe('User Model', () => {
  describe('findUserByUsername', () => {
    it('should return a user by username', async () => {
      const mockUser = { user_id: 1, username: 'testuser', email: 'test@example.com' };
      db.query.mockResolvedValueOnce({ rows: [mockUser] });

      const result = await userModel.findUserByUsername('testuser');

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE username = $1', ['testuser']);
      expect(result).toEqual(mockUser);
    });

    it('should return undefined if no user is found', async () => {
      db.query.mockResolvedValueOnce({ rows: [] });

      const result = await userModel.findUserByUsername('unknownuser');

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE username = $1', ['unknownuser']);
      expect(result).toBeUndefined();
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = { user_id: 1, username: 'newuser' };
      db.query.mockResolvedValueOnce({ rows: [mockUser] });

      const result = await userModel.createUser('newuser', 'password123', 'new@example.com', 'New User');

      expect(db.query).toHaveBeenCalledWith(
        'INSERT INTO users (username, password, email, full_name) VALUES ($1, $2, $3, $4) RETURNING user_id, username',
        ['newuser', 'password123', 'new@example.com', 'New User']
      );
      expect(result).toEqual(mockUser);
    });

    it('should handle database errors', async () => {
      const mockError = new Error('Database Error');
      db.query.mockRejectedValueOnce(mockError);

      await expect(
        userModel.createUser('newuser', 'password123', 'new@example.com', 'New User')
      ).rejects.toThrow(mockError);
    });
  });
});
