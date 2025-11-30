import React from 'react';
import './Services.css';
import { SearchCheck } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { NotepadText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <SearchCheck size={36} color="white" strokeWidth={2.5} />,
      title: 'Seo/Sem',
      description: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took.',
      link: 'Read more'
    },
    {
      id: 2,
      icon: <Megaphone size={36} color="white" strokeWidth={2.5} />,
      title: 'Marketing',
      description: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took.',
      link: 'Read more'
    },
    {
      id: 3,
      icon: <Newspaper size={36} color="white" strokeWidth={2.5} />,
      title: 'Viral Campaign',
      description: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took.',
      link: 'Read more'
    },
    {
      id: 4,
      icon: <NotepadText size={36} color="white" strokeWidth={2.5} />,
      title: 'Others',
      description: 'Lorem ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took.',
      link: 'Read more'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-title">
            We Provide The Best <span className="highlight">Services</span>
          </h2>
          <p className="services-subtitle">
            Let us enhance the full potential of your business with our data-driven strategies
          </p>
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className={`service-icon icon-${service.id}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">{service.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
