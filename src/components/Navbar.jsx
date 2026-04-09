import "./Navbar.css";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <ul className="nav-menu">
        <li className="active">Home</li>
        <li>
          Category <span>▾</span>
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <div className="nav-right">
        <input type="text" placeholder="Search..." />

        <div className="icon cart">
          🛒 <span className="badge">0</span>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-btn">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
