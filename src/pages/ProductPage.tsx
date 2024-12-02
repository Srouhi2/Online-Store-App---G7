import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";


// Product Type Definition
interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  image: string;
  colors: string[];
  size: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { addToCart } = useCart();

  // Log the id to see what value is being passed in the URL
  console.log("Product ID from URL:", id);

  // Example products data (In a real-world scenario, this data would come from an API)
  const products: Product[] = [
    {
      id: 1,
      name: "Oversized T-shirt",
      price: 11.0,
      oldPrice: 34.0,
      description: "A comfortable oversized t-shirt made with soft cotton.",
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Black", "White", "Red"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Casual Hoodie",
      price: 25.0,
      oldPrice: 50.0,
      description: "A warm and cozy hoodie perfect for casual wear.",
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Gray", "Black", "Blue"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Denim Jeans",
      price: 40.0,
      oldPrice: 60.0,
      description: "Stylish denim jeans with a modern fit.",
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Blue", "Black"],
      size: ["32", "34", "36", "38"],
    },
  ];

  // If id is undefined or cannot be parsed as a number, return an error message
  if (!id || isNaN(Number(id))) {
    return <div>Product not found!</div>;
  }

  // Find the selected product by id
  const product = products.find((product) => product.id === parseInt(id));

  // If product not found, show an error page or message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", width: "100%", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {/* Product Image */}
          <div style={{ flex: 1, padding: "20px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>

          {/* Product Details */}
          <div style={{ flex: 2, padding: "20px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>{product.name}</h2>
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "black" }}>${product.price.toFixed(2)}</span>
              <span style={{ fontSize: "16px", textDecoration: "line-through", marginLeft: "10px", color: "#888" }}>
                ${product.oldPrice.toFixed(2)}
              </span>
            </div>
            <p style={{ marginTop: "20px", color: "#555" }}>{product.description}</p>

            {/* Color and Size Select */}
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="colorSelect">Color:</label>
              <select id="colorSelect" style={{ padding: "10px", marginTop: "8px", width: "100%" }}>
                {product.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="sizeSelect">Size:</label>
              <select id="sizeSelect" style={{ padding: "10px", marginTop: "8px", width: "100%" }}>
                {product.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#594ae9",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
                fontSize: "16px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
