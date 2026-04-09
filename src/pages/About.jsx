import React from 'react';
import "../Styles/About.css"; 
import showroomImg from "../assets/showroom.jpg";
const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      {/* Navbar removed from here to prevent duplication */}

      {/* ===== About Section ===== */}
      <section className="about-home">
        <div className="about-container">
          <h1>About Us</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to <strong>Fashion Boutique</strong> — your one-stop
                destination for timeless ethnic elegance. We bring together a
                curated collection of exquisite sarees, lehengas, suits, and
                anarkalis that blend traditional craftsmanship with modern style.
              </p>
              <br />
              <p>
                Every piece is designed to reflect grace, culture, and
                individuality — perfect for weddings, festivals, and everyday
                celebrations. We take pride in delivering high-quality fabric,
                impeccable designs, and a seamless shopping experience for our
                valued customers.
              </p>
            </div>
            <div className="about-image">
  <img
    src={showroomImg}
    alt="Fashion Boutique Showroom"
  />
</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;