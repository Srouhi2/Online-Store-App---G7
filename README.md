Online Store App - G7
CSCE 361 - Capstone Project
Group 7 - Online Store Application

-Project Overview:
  The Online Store App is a full-stack application developed for managing an online shopping experience. It allows users to browse products, manage their shopping cart, and securely process   transactions. This project is developed as part of the CSCE 361 capstone course by Group 7.

-Features:
  Backend Features
  User Authentication (Registration and Login)
  Product Management (View, Add Products)
  Cart Management (Add, View, and Remove Products from the Cart)
  Secure Password Storage with bcrypt
  JSON Web Token (JWT) for user authentication
  RESTful API built with Express.js and MySQL
  
  Frontend Features
  Dynamic user interface for product browsing
  Cart management with live updates
  Authentication (login/register) integrated with the backend
  Responsive design for multiple device types


-Technologies Used:
  Backend
  Node.js: Backend server runtime
  Express.js: Framework for building RESTful APIs
  MySQL: Relational database for storing user, product, and cart data
  bcrypt: Library for hashing user passwords
  jsonwebtoken: Library for authentication and authorization
  
  Frontend
  React: Library for building the user interface
  Vite: Build tool for modern web applications
  Testing
  Jest: JavaScript testing framework for unit and integration tests
  node-mocks-http: Mocks for HTTP requests/responses for controller testing

-Setup Instructions:
  Prerequisites
  Ensure the following tools are installed on your system:
  Node.js (v14 or higher)
  npm (v7 or higher)
  MySQL (v8 or higher)
  
  Clone the Repository
  git clone https://github.com/username/Online-Store-App---G7.git
  cd Online-Store-App---G7
  
  Install Dependencies
  Navigate to the root of the project and install the required dependencies:
  npm install
  
  Setup the Database
  Create a MySQL database named OnlineStoreDB.
  Import the provided database schema and test data from the /database directory:
  mysql -u <username> -p OnlineStoreDB < database/schema.sql
  mysql -u <username> -p OnlineStoreDB < database/test_data.sql
  Update the database configuration in config/db.js with your MySQL credentials.

-Running the Application:
  Run the Backend
  To start the backend server, use:
  npm run start
  or:
  node server.js
  The backend will run at http://localhost:5000.
  
  Run the Frontend
  To start the frontend, navigate to the frontend directory and run:
  npm run dev
  The frontend will run at http://localhost:3000.

-Testing:
  Run Tests
  To execute the test suite:
  npm test
  
  Testing Frameworks Used
  Unit and integration tests are implemented using Jest.
  Backend tests are located in the /tests directory.
