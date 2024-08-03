import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link
        to="hero" // This should be the ID of the section you want to scroll to
        smooth={true}
        offset={0}
        duration={500}
        className="logo-link" // Optional: Add a class for styling if needed
      >
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul
        className={`nav-links ${
          mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
