import React from "react";
import "../components/Hero.css";
import "../components/Category.css";

import heroImg from "../assets/Banner.jpg";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <img src={heroImg} alt="hero" />
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <h2>Explore Our Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src={cat1} alt="" />
          </div>

          <div className="category-card">
            <img src={cat2} alt="" />
          </div>

          <div className="category-card">
            <img src={cat3} alt="" />
          </div>

          <div className="category-card">
            <img src={cat4} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;