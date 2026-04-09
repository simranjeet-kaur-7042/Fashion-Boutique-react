import "../styles/Navbar.css";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/saree">Category</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-right">
        <input type="text" placeholder="Search..." />

        <Link to="/cart" className="icon cart">
          🛒 <span className="badge">0</span>
        </Link>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;