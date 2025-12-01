import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import SimpleSolutions from './components/SimpleSolutions'
import OurAgency from './components/OurAgency'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroBottom = heroSection ? heroSection.offsetHeight : 600;

      // Show scroll to top button after 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Fix navbar after hero section
      if (window.scrollY > heroBottom) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar isFixed={isNavbarFixed} />
      <Hero />
      <Services />
      <SimpleSolutions />
      <OurAgency />
      <Testimonials />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  )
}

export default App
