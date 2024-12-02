import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Website Title */}
      <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        Online App Store
      </h1>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          Home
        </Link>
        {/* <Link to="/shop" style={{ textDecoration: "none", color: "blue" }}>
          Shop
        </Link>
        <Link to="/products" style={{ textDecoration: "none", color: "blue" }}>
          Products
        </Link> */}
        <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
          Login
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
          Sign Up
        </Link>
      </div>

      {/* Cart Icon */}
      <div style={{ position: "relative" }}>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img
            src="https://img.icons8.com/3d-fluency/94/shopping-cart.png"
            alt="Cart"
            style={{ width: "24px", height: "24px" }}
          />
          {/* <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              fontSize: "12px",
              padding: "2px 6px",
              borderRadius: "50%",
            }}
          >
            0
          </span> */}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
