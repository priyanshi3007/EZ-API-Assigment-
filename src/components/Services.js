// src/components/Services.js
import React from 'react';
import '../App.css'; // Updated import

const services = [
  { title: "Presentation Design", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
  { title: "Audio - Visual Production", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
  { title: "Translation Services", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
  { title: "Graphic Design", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
  { title: "Research & Analytics", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
  { title: "Data Processing", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." },
];

const Services = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
