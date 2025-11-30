import React from 'react';
import './Hero.css';
import cartoonImage from '../assets/cartoon image.png';

const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative bubbles */}
      <div className="bubbles-top-left">
        <span className="bubble gray small" style={{top: '30px', left: '5%'}}></span>
        <span className="bubble peach medium" style={{top: '25px', left: '8%'}}></span>
        <span className="bubble orange large" style={{top: '60px', left: '6%'}}></span>
      </div>
      <div className="bubbles-bottom-right">
        <span className="bubble orange medium" style={{bottom: '50px', right: '5%'}}></span>
        <span className="bubble peach small" style={{bottom: '70px', right: '9%'}}></span>
        <span className="bubble yellow large" style={{bottom: '35px', right: '10%'}}></span>
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Decorative bubbles near text */}
          <div className="content-bubbles">
            <span className="bubble gray small" style={{top: '0px', left: '-40px'}}></span>
            <span className="bubble peach medium" style={{top: '80px', left: '-60px'}}></span>
            <span className="bubble orange tiny" style={{top: '150px', left: '-35px'}}></span>
            <span className="bubble yellow small" style={{top: '220px', left: '-50px'}}></span>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              We create <span className="highlight">solutions</span> for your business
            </h1>
            <p className="hero-description">
              Our team serves a team that are emerging brands and technologies to extend your marketing and business goals. We aim to identify your digital marketing problems.
            </p>
            <button className="cta-button">Get Started</button>
            <div className="explore-link">
              <span className="arrow-icon">→</span>
              <span className="explore-text">Explore more</span>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="hero-images">
          <img src={cartoonImage} alt="Business Solutions Illustration" className="hero-illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
