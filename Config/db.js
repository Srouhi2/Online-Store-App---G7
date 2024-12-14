const mysql = require('mysql2');

// Mocked database logic for testing
if (process.env.NODE_ENV === 'test') {
  console.log('Using mocked database connection');
  module.exports = {
    query: jest.fn((sql, params, callback) => {
      callback(null, { rows: [] }); // Mocked empty result
    }),
    connect: jest.fn((callback) => {
      if (callback) callback(null); // Simulate successful connection
    }),
    end: jest.fn(),
  };
} else {
  // Real database connection for production and development
  const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'OnlineStore2',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });

  module.exports = db;
}
