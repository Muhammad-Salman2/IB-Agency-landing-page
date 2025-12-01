import React from 'react';
import './Navbar.css';
import logo from '../assets/IB_Creative-removebg-preview.png';

const Navbar = ({ isFixed }) => {
  return (
    <nav className={`navbar ${isFixed ? 'navbar-fixed' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="IB Creatives" className="logo-image" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact us</a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link">Blog</a>
          </li>
        </ul>

        {/* Sign Up Button */}
        <button className="signup-btn">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
