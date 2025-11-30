import React from 'react';
import './OurAgency.css';
import workingImage from '../assets/working.png';

const OurAgency = () => {
  return (
    <section className="our-agency">
      {/* Decorative bubbles */}
      <div className="bubbles-bottom-right">
        <span className="bubble orange large" style={{bottom: '60px', right: '6%'}}></span>
        <span className="bubble peach medium" style={{bottom: '90px', right: '8%'}}></span>
        <span className="bubble yellow small" style={{bottom: '45px', right: '10%'}}></span>
        <span className="bubble orange medium" style={{bottom: '120px', right: '5%'}}></span>
        <span className="bubble peach small" style={{bottom: '75px', right: '11%'}}></span>
      </div>

      <div className="agency-container">
        {/* Left Side - Content */}
        <div className="agency-content">
          <h2 className="agency-title">
            Our <span className="highlight">Agency</span>
          </h2>
          <p className="agency-description">
            We believe in the power of data. Our analytics-driven approach allows us to make informed
          </p>
          <p className="agency-description">
            Decisions and optimize your marketing efforts for maximum ROI. Let's turn your data into actionable insights. Tailored Solutions for Your Business
          </p>
          
          <button className="btn-read-more">Read more</button>
        </div>

        {/* Right Side - Image */}
        <div className="agency-image">
          <img src={workingImage} alt="Our Agency" />
        </div>
      </div>
    </section>
  );
};

export default OurAgency;
