import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "16px",
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px" }}>Product</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Price</th>
                <th style={{ textAlign: "center", padding: "8px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <div>{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "8px" }}>${item.price.toFixed(2)}</td>
                  <td style={{ textAlign: "center", padding: "8px" }}>
                    <button
                      style={{
                        fontSize: "12px",
                        color: "red",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "8px" }}>
              Subtotal: ${subtotal.toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              style={{
                padding: "10px 20px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
