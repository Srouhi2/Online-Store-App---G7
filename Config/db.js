// const mysql = require('mysql2'); 
// const pool = mysql.createPool({ host: 'localhost', user: 'root', password: 'password', database: 'OnlineStore2' }); //Connects to SQL Database
// module.exports = pool.promise();

// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost:3306', // Replace with your MySQL host
//     user: 'root', // Replace with your MySQL username
//     password: 'password', // Replace with your MySQL password
//     database: 'OnlineStore2' // Replace with your MySQL database name
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the MySQL database!');
// });

// module.exports = db;


// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// const port = 3306;

// // Enable CORS
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(express.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // your MySQL username
//     password: 'password', // your MySQL password
//     database: 'OnlineStore2',
// });

// // Test the connection
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

// // Example API route to fetch all users
// app.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       res.status(500).send('Error fetching users');
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000; // Standard port for the Express server

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection pool
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL username
  password: 'password', // Your MySQL password
  database: 'OnlineStore2', // Your MySQL database name
  //waitForConnections: true,
  //connectionLimit: 10,
  //queueLimit: 0,
});

// Test the connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
    //connection.release(); // Release the connection back to the pool
  }
});

// Example API route to fetch all users
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Error fetching users');
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
