import React from 'react';
import './Footer.css';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/IB_Creative-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section with CTA */}
      <div className="footer-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to get started?</h2>
         <button className="footer-cta-button">Contact Us</button>
        </div>
      </div>

      {/* Wave Divider
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#FF6B35"/>
        </svg>
      </div> */}

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="IB Creatives" className="logo-image" />
            </div>
            <div className="social-links">
              <a href="#" className="social-icon facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Design Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Design</h4>
            <ul className="footer-links">
              <li><a href="#uxdesign">Ux Designers</a></li>
              <li><a href="#uifreelancer">Ui & Freelance</a></li>
              <li><a href="#printdesigner">Print a designer</a></li>
              <li><a href="#motion">Motion</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Become a blogger</a></li>
              <li><a href="#affiliate">Blog</a></li>
              <li><a href="#support">Design without borders</a></li>
              <li><a href="#affiliates">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 BrandBeat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
