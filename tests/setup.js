const mysql = require('mysql2');

// Set NODE_ENV explicitly in case it’s not passed
process.env.NODE_ENV = 'test';

jest.mock('mysql2', () => {
  const mockConnection = {
    query: jest.fn((sql, params, callback) => {
      callback(null, { rows: [] }); // Mocked empty response
    }),
    connect: jest.fn((callback) => {
      if (callback) callback(null); // Simulate successful connection
    }),
    end: jest.fn(),
  };

  return {
    createConnection: jest.fn(() => mockConnection),
  };
});

afterAll(() => {
  jest.clearAllMocks(); // Clean up all mocks after tests
  jest.restoreAllMocks(); // Restore original behavior of mocked methods
});
