const mysql = require('mysql2');

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
  jest.clearAllMocks(); // Clear all mocks after tests
  jest.restoreAllMocks(); // Restore original methods
});
