import React, { useState } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import personOne from '../assets/person one.avif';
import personTwo from '../assets/person two.webp';
import personThree from '../assets/person three.jpeg';
import personFour from '../assets/person four.jpeg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Hasan',
      role: 'CEO of Company',
      image: personOne,
      rating: 4,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 2,
      name: 'Hashley Juan',
      role: 'CEO of Company',
      image: personTwo,
      rating: 5,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 3,
      name: 'Jusin Jack',
      role: 'CEO of Company',
      image: personThree,
      rating: 5,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 4,
      name: 'Sarah Miller',
      role: 'Marketing Director',
      image: personFour,
      rating: 5,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Product Manager',
      image: personOne,
      rating: 4,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 6,
      name: 'Emma Davis',
      role: 'Business Owner',
      image: personTwo,
      rating: 5,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 7,
      name: 'David Wilson',
      role: 'Sales Director',
      image: personThree,
      rating: 5,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      role: 'Creative Director',
      image: personFour,
      rating: 4,
      review: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer.'
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const maxSlide = testimonials.length - 3; // Show 3 cards at a time
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const maxSlide = testimonials.length - 3;
      setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const getSlideStyle = () => {
    const cardWidth = 100 / 3; // Each card takes 33.33% width
    const gap = 2; // Gap in percentage
    return {
      transform: `translateX(-${currentSlide * (cardWidth + gap)}%)`
    };
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What <span className="highlight">Clients</span> Say!
          </h2>
          <p className="testimonials-subtitle">
            See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-slider">
          {/* Previous Button */}
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          {/* Testimonial Cards */}
          <div className="testimonials-cards" style={getSlideStyle()}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-avatar">{testimonial.image}</div>
                  <div className="client-info">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                  </div>
                </div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < testimonial.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
