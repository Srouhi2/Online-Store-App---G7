const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel'); // Import UserModel for database queries

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Check if the username already exists
    const existingUser = await UserModel.findUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const userId = await UserModel.createUser(username, hashedPassword);

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Log in a user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Find the user by username
    const user = await UserModel.findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create a JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ error: 'Failed to log in' });
  }
};

// Get the current authenticated user
exports.getAuthenticatedUser = async (req, res) => {
  try {
    const user = await UserModel.findUserById(req.user.id); // Assuming `req.user` contains the authenticated user's ID
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ id: user.id, username: user.username });
  } catch (err) {
    console.error('Error fetching authenticated user:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
