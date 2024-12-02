import React, { useState } from "react";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";

// Common Types for Filters
interface FilterOption {
  label: string;
  value: string;
}

interface PriceFilterProps {
  prices: FilterOption[];
  selectedPrice: string | null;
  onSelect: (price: string) => void;
}

interface BrandFilterProps {
  brands: string[];
  selectedBrand: string | null;
  onSelect: (brand: string) => void;
}

interface CollectionFilterProps {
  collections: string[];
  selectedCollection: string | null;
  onSelect: (collection: string) => void;
}

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
}

// Price Filter Component
const PriceFilter: React.FC<PriceFilterProps> = ({ prices, selectedPrice, onSelect }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Prices</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {prices.map((price) => (
          <li
            key={price.value}
            style={{
              cursor: "pointer",
              color: selectedPrice === price.value ? "#594ae9" : "#6b7280",
              fontWeight: selectedPrice === price.value ? "bold" : "normal",
              marginBottom: "8px",
            }}
            onClick={() => onSelect(price.value)}
          >
            {price.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Brand Filter Component
const BrandFilter: React.FC<BrandFilterProps> = ({ brands, selectedBrand, onSelect }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Brands</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {brands.map((brand) => (
          <li
            key={brand}
            style={{
              cursor: "pointer",
              color: selectedBrand === brand ? "#594ae9" : "#6b7280",
              fontWeight: selectedBrand === brand ? "bold" : "normal",
              marginBottom: "8px",
            }}
            onClick={() => onSelect(brand)}
          >
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Collection Filter Component
const CollectionFilter: React.FC<CollectionFilterProps> = ({ collections, selectedCollection, onSelect }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Collections</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {collections.map((collection) => (
          <li
            key={collection}
            style={{
              cursor: "pointer",
              color: selectedCollection === collection ? "#594ae9" : "#6b7280",
              fontWeight: selectedCollection === collection ? "bold" : "normal",
              marginBottom: "8px",
            }}
            onClick={() => onSelect(collection)}
          >
            {collection}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Tag Filter Component
const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onToggle }) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Tags</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"  // Ensure the type is explicitly set
            aria-pressed={selectedTags.includes(tag)}
            style={{
              padding: "6px 12px",
              borderRadius: "12px",
              border: selectedTags.includes(tag) ? "2px solid #594ae9" : "2px solid #ccc",
              backgroundColor: selectedTags.includes(tag) ? "#f3f4f6" : "white",
              cursor: "pointer",
            }}
            onClick={() => onToggle(tag)} 
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Filters Component
const Filters: React.FC = () => {
  // State Management
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter Options
  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Red", hex: "#ff0000" },
    { name: "Green", hex: "#00ff00" },
    { name: "Blue", hex: "#0000ff" },
    { name: "Yellow", hex: "#ffff00" },
  ];
  const prices = [
    { label: "$0–$50", value: "0-50" },
    { label: "$50–$100", value: "50-100" },
    { label: "$100–$150", value: "100-150" },
    { label: "$150–$200", value: "150-200" },
    { label: "$300–$400", value: "300-400" },
  ];
  const brands = ["Minimog", "Retrolie Brook", "Learts", "Vagabond", "Abby"];
  const collections = ["All products", "Best sellers", "New arrivals", "Accessories"];
  const tags = ["Fashion", "Hats", "Sandal", "Belt", "Bags", "Snacker", "Denim", "Sunglasses", "Beachwear"];

  // Tag Toggle Handler
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div style={{ width: "250px", padding: "16px", borderRight: "1px solid #ddd" }}>
      {/* Size Filter */}
      <SizeFilter sizes={sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />

      {/* Color Filter */}
      <ColorFilter colors={colors} selectedColor={selectedColor} onSelect={setSelectedColor} />

      {/* Price Filter */}
      <PriceFilter prices={prices} selectedPrice={selectedPrice} onSelect={setSelectedPrice} />

      {/* Brand Filter */}
      <BrandFilter brands={brands} selectedBrand={selectedBrand} onSelect={setSelectedBrand} />

      {/* Collection Filter */}
      <CollectionFilter
        collections={collections}
        selectedCollection={selectedCollection}
        onSelect={setSelectedCollection}
      />

      {/* Tag Filter */}
      <TagFilter tags={tags} selectedTags={selectedTags} onToggle={toggleTag} />
    </div>
  );
};

export default Filters;
