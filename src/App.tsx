import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import LoginPage from "./components/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./components/SignUpPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Navigation />
      <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductPage />} /> 
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
















