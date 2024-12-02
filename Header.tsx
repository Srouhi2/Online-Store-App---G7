import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
    <h1 className="text-2xl font-bold">Online App Store</h1>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/shop" className="hover:text-blue-500">Shop</a></li>
        <li><a href="/products" className="hover:text-blue-500">Products</a></li>
        <li><a href="/Login" className="hover:text-blue-500">Login</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
