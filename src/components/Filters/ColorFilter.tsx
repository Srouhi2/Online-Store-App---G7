import React from "react";

interface Color {
  name: string; // Color name (e.g., "Red")
  hex: string;  // Hex code for the color (e.g., "#ff0000")
}

interface ColorFilterProps {
  colors: Color[]; // Array of colors with name and hex
  selectedColor: string | null; // Currently selected color name
  onSelect: (colorName: string) => void; // Function to handle color selection
}

const ColorFilter: React.FC<ColorFilterProps> = ({ colors, selectedColor, onSelect }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Color</h3>
      <div style={{ display: "flex", gap: "18px" }}>
        {colors.map((color) => (
          <button
            key={color.name}
            style={{
              width: "50px", // Larger button width
              height: "50px", // Larger button height
              borderRadius: "50%", // Circle shape
              border: selectedColor === color.name ? `1px solid black` : "2px solid #ccc", // Border matches the color
              backgroundColor: color.hex, // Color of the button
              cursor: "pointer", // Pointer cursor for interactivity
              transition: "transform 0.2s", // Smooth hover effect
            }}
            onClick={() => onSelect(color.name)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Hover: Increase size
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset on hover out
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
