import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Saree", price: 1200, image: "/images/p1.jpg" },
  { id: 2, name: "Lehenga", price: 3000, image: "/images/p2.jpg" },
];

const Shop = () => {
  return (
    <div>
      <h2>Shop</h2>
      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;