import React, { useState } from "react";
import "../styles/Shop.css";

import saree1 from "../assets/partysaree.jpg";
import saree2 from "../assets/partysaree.jpg";
import saree3 from "../assets/partysaree.jpg";
import saree4 from "../assets/partysaree.jpg";

const Saree = () => {
  // State to track cart items
  const [cart, setCart] = useState([]);

  const sarees = [
    {
      id: 1,
      name: "Red Silk Saree",
      price: 2499,
      size: "Free Size",
      image: saree1,
    },
    {
      id: 2,
      name: "Blue Designer Saree",
      price: 2999,
      size: "Free Size",
      image: saree2,
    },
    {
      id: 3,
      name: "Green Party Wear Saree",
      price: 1999,
      size: "Free Size",
      image: saree3,
    },
    {
      id: 4,
      name: "Wedding Special Saree",
      price: 3999,
      size: "Free Size",
      image: saree4,
    },
  ];

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="shop">
      <h2>Saree Collection</h2>

      {/* Display cart count */}
      <p style={{ fontWeight: "bold" }}>Cart Items: {cart.length}</p>

      <div className="product-grid">
        {sarees.map((item) => (
          <div key={item.id} className="product-card">
            
            {/* IMAGE */}
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>

            {/* DETAILS */}
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <p className="size">Size: {item.size}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Saree;