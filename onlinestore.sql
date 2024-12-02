
USE OnlineStore;
GO

-- Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    FullName NVARCHAR(100),
    Address NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Products Table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT DEFAULT 0,
    Category NVARCHAR(50),
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Orders Table
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(20) DEFAULT 'Pending',
    TotalAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- OrderItems Table (to store each item in an order)
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Dummy Data Insertion
-- Insert Users
INSERT INTO Users (Username, PasswordHash, Email, FullName, Address)
VALUES 
    ('jdoe', 'hashedpassword1', 'jdoe@example.com', 'John Doe', '123 Main St, Springfield'),
    ('asmith', 'hashedpassword2', 'asmith@example.com', 'Alice Smith', '456 Elm St, Shelbyville');

-- Insert Products
INSERT INTO Products (ProductName, Description, Price, Stock, Category)
VALUES 
    ('Laptop', 'A high-performance laptop for everyday use.', 999.99, 10, 'Electronics'),
    ('Headphones', 'Noise-canceling over-ear headphones.', 199.99, 25, 'Accessories'),
    ('Coffee Mug', 'Ceramic mug, 12oz.', 9.99, 50, 'Home & Kitchen'),
    ('Office Chair', 'Ergonomic office chair.', 149.99, 15, 'Furniture');

-- Insert Orders
INSERT INTO Orders (UserID, TotalAmount, Status)
VALUES 
    (1, 1049.98, 'Pending'),
    (2, 49.98, 'Shipped');

-- Insert OrderItems
INSERT INTO OrderItems (OrderID, ProductID, Quantity, UnitPrice)
VALUES 
    (1, 1, 1, 999.99),  -- Order 1: 1 Laptop
    (1, 2, 1, 199.99),  -- Order 1: 1 Headphone
    (2, 3, 5, 9.99);    -- Order 2: 5 Coffee Mugs
