import React from 'react';
import './SimpleSolutions.css';
import simpleImage from '../assets/simple.png';

const SimpleSolutions = () => {
  const solutions = [
    {
      id: 1,
      number: '01',
      title: 'Contact us',
      description: 'We are always ready and waiting'
    },
    {
      id: 2,
      number: '02',
      title: 'Consult',
      description: 'We will listen and answer your questions'
    },
    {
      id: 3,
      number: '03',
      title: 'Place order',
      description: 'Try our service, fast to respond'
    },
    {
      id: 4,
      number: '04',
      title: 'Payment',
      description: 'We accepting all types of payment'
    }
  ];

  return (
    <section className="simple-solutions">
      <div className="simple-container">
        {/* Left Side - Image */}
        <div className="simple-image">
          <img src={simpleImage} alt="Simple Solutions" />
        </div>

        {/* Right Side - Content */}
        <div className="simple-content">
          <h2 className="simple-title">
            Simple <span className="highlight">Solutions!</span>
          </h2>
          <p className="simple-subtitle">
            We understand that no two businesses are alike. That's why we take the time to understand
          </p>

          {/* Solutions List */}
          <div className="solutions-list">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-item">
                <div className="solution-number">{solution.number}</div>
                <div className="solution-text">
                  <h4 className="solution-title">{solution.title}</h4>
                  <p className="solution-description">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="simple-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSolutions;
