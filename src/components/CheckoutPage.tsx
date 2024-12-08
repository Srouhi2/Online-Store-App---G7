import React from "react";

const CheckoutPage = () => {
  return (
    <div style={{ display: "flex", padding: "16px", fontFamily: "Arial, sans-serif" }}>
      {/* Left Section: Contact, Delivery, and Payment */}
      <div style={{ flex: 2, paddingRight: "16px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Online App Store Checkout
        </h1>

        {/* Contact Section */}
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>Contact</h2>
          <p>
            Have an account?{" "}
            <a href="/signup" style={{ color: "blue", textDecoration: "none" }}>
              Create Account
            </a>
          </p>
          <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Delivery Section */}
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>Delivery</h2>
          <label htmlFor="country" style={{ display: "block", marginBottom: "8px" }}>
            Country / Region
          </label>
          <select
            id="country"
            aria-label="Country / Region"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="firstName" style={{ display: "block", marginBottom: "8px" }}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="lastName" style={{ display: "block", marginBottom: "8px" }}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <label htmlFor="address" style={{ display: "block", marginBottom: "8px" }}>
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="city" style={{ display: "block", marginBottom: "8px" }}>
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="postalCode" style={{ display: "block", marginBottom: "8px" }}>
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                placeholder="Postal Code"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <label>
            <input type="checkbox" style={{ marginRight: "8px" }} />
            Save this info for future
          </label>
        </div>

        {/* Payment Section */}
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>Payment</h2>
          <label htmlFor="paymentMethod" style={{ display: "block", marginBottom: "8px" }}>
            Payment Method
          </label>
          <select
            id="paymentMethod"
            aria-label="Payment Method"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <label htmlFor="cardNumber" style={{ display: "block", marginBottom: "8px" }}>
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Card Number"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="expirationDate" style={{ display: "block", marginBottom: "8px" }}>
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                placeholder="MM/YY"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="securityCode" style={{ display: "block", marginBottom: "8px" }}>
                Security Code
              </label>
              <input
                type="text"
                id="securityCode"
                placeholder="CVC"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
          <label htmlFor="cardHolderName" style={{ display: "block", marginBottom: "8px" }}>
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            placeholder="Card Holder Name"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <label>
            <input type="checkbox" style={{ marginRight: "8px" }} />
            Save this info for future
          </label>
        </div>
        <button
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "12px",
            backgroundColor: "black",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
