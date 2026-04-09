import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* LOGO / ABOUT */}
        <div className="footer-section">
          <h2>Boutique</h2>
          <p>Discover the latest trends in ethnic and modern fashion.</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Saree</li>
            <li>Lehenga</li>
            <li>Kurti</li>
            <li>Gown</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: boutique@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Boutique. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;