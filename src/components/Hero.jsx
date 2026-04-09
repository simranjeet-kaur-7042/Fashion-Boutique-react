import "./Hero.css";
import banner from "../assets/Banner.jpg";

function Hero() {
  return (
   <div className="hero">
    <div className="blur left"></div>
    <img src={banner} alt="Hero Banner" />
    <div className="blur right"></div>
    </div>
  );
}

export default Hero;
