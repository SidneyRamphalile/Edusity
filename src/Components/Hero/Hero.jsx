import React from "react";
import { Link } from "react-scroll"; 
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <Link
          to="programs" 
          smooth={true}
          offset={-200} 
          duration={500}
          className="btn"
        >
          Explore more <img src={dark_arrow} alt="dark arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
