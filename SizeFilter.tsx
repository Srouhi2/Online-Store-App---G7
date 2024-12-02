import React from "react";

interface SizeFilterProps {
  sizes: string[]; // Array of sizes (e.g., ["S", "M", "L", "XL"])
  selectedSize: string | null; // Currently selected size, can be null
  onSelect: (size: string) => void; // Function that handles size selection
}

const SizeFilter: React.FC<SizeFilterProps> = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Size</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {sizes.map((size) => (
          <button
            key={size}
            style={{
              padding: "10px 20px", // Size of the button
              border: "2px solid #ccc", // Default border color
              borderRadius: "4px", // Rounded corners
              backgroundColor: selectedSize === size ? "blue" : "white", // Blue background for selected size
              color: selectedSize === size ? "white" : "black", // White text for selected size
              cursor: "pointer", // Pointer cursor for interactivity
              fontSize: "16px", // Font size
              fontWeight: "bold", // Bold font
              transition: "background-color 0.2s, color 0.2s", // Smooth transition
            }}
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
