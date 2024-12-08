

drop table ShippingAddresses;
drop table Cards;
drop table Carts;
drop table Products;
drop table Users;

-- Users 
CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Products 
CREATE TABLE Products (
    product_id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_image VARCHAR(255),
    manufacturer_info VARCHAR(255),
    description TEXT
);

-- Cart
CREATE TABLE Carts (
    cart_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Checkout
CREATE TABLE Cards (
    card_id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    card_number VARCHAR(16) NOT NULL,
    cvv INT NOT NULL,
    exp_date VARCHAR(5) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Shipping Address
CREATE TABLE ShippingAddresses (
    shipping_id INT IDENTITY(1,1) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    country VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
-- Insert dummy data into Users table
INSERT INTO Users (email, full_name, username, password) VALUES
('JBezos@example.com', 'Jeff Bezos', 'JeffBez', 'password123'),
('ElonMusk@example.com', 'Elon Musk', 'EMusk', 'password456'),
('Bill.Gates@example.com', 'Bill Gates', 'BG', 'password789'); 

-- Insert dummy data into Products table
INSERT INTO Products (name, product_image, manufacturer_info, description) VALUES
('T-shirt', 't-shirt.jpg', 'Adidas', 'Latest model '),
('shirt', 'shirt.jpg', 'Nike', 'All time best'),
('pants', 'pants.jpg', 'Banana Republic', 'Bestselling ');

-- Insert dummy data into Cards table
INSERT INTO Cards (name, card_number, cvv, exp_date, user_id) VALUES 
  ('Jeff Bezos', '1234567890123456', 123, '12/26', 1),
  ('Elon Musk', '1234567890123457', 123, '08/34', 2),
  ('Bill Gates', '1234567890123458', 123, '10/28', 3);

-- Insert dummy data into Carts table
INSERT INTO Carts (user_id, product_id, quantity) VALUES
(1, 1, 2),
(2, 3, 1),
(3, 2, 1);

-- Insert dummy data into ShippingAddresses table
INSERT INTO ShippingAddresses (first_name, last_name, address, city, postal_code, country, user_id) VALUES
('Jeff ','Bezos', '1234 Elm St', 'Nebraska', '90001','United Nations', 1),
('Elon ','Musk', '1400 R st', 'Omaha', '68791','Canada', 2);
('Bill ','Gates', '1269 Hogwarts st', 'London', '80808','United Kingdom', 3);
