import React from "react";
import "../styles/Hero.css";
import "../styles/Category.css";

import banner from "../assets/Banner.jpg";
import saree from "../assets/saree.jpg";
import lehenga from "../assets/lehenga.jpg";
import kurti from "../assets/kurti.jpg";
import gown from "../assets/gown.jpg";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Saree", image: saree, path: "saree" },
    { name: "Lehenga", image: lehenga, path: "lehenga" },
    { name: "Kurti", image: kurti, path: "kurti" },
    { name: "Gown", image: gown, path: "gown" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <img src={banner} alt="banner" />
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Explore Our Categories</h2>

        <div className="category-grid">
          {categories.map((item, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => navigate(`/category/${item.path}`)}
            >
              <img src={item.image} alt={item.name} />
              <div className="category-info">
                <h3>{item.name}</h3>
                <p>Explore Collection →</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;