
import React from 'react';
import { Layers, Code, BarChart, Globe } from 'lucide-react';

const services = [
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Brand Strategy",
    description: "Strategic brand positioning to elevate your market presence with clarity and purpose."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Bespoke websites and applications combining elegant design with robust functionality."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your digital presence and drive meaningful engagement."
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "UX/UI Design",
    description: "Intuitive and immersive user experiences that resonate with your target audience."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs tracking-wider uppercase bg-gray-100 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simplicity is the ultimate sophistication
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We focus on delivering streamlined solutions that remove complexity and elevate your brand's digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 p-8 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out group"
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translateY(0)';
              }}
            >
              <div className="mb-6 text-black transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
