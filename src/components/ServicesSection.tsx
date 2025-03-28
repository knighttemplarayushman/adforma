
import React from 'react';
import { TrendingUp, ShoppingCart, UserCircle, Palette } from 'lucide-react';

const services = [
  {
    icon: <ShoppingCart className="h-10 w-10" />,
    title: "Website & E-commerce",
    description: "Attractive, easy-to-use websites and online shops that work well on all devices."
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Smart online marketing plans to help your brand get noticed and connect with more customers."
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Creative Design",
    description: "Eye-catching designs that capture attention and make your brand look great online."
  },
  {
    icon: <UserCircle className="h-10 w-10" />,
    title: "Kate - AI Influencer",
    description: "Meet Kate, our virtual fashion model. Get beautiful fashion photos without expensive photoshoots."
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
            Simple solutions with big impact
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We help businesses look their best online with easy-to-understand solutions that actually work.
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
