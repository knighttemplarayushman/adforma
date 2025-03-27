
import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 mb-4 text-xs tracking-wider uppercase bg-gray-100 rounded-full">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              We believe in the power of refined minimalism
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Welcome to Adforma! We are a creative agency specializing in digital marketing, branding, and virtual fashion. Our team helps businesses stand out with eye-catching designs, effective advertisements, and innovative marketing strategies.
              </p>
              <p>
                At Adforma, we also bring a new approach to fashion with KATE, our AI fashion model. Through advanced 3D modeling, we offer brands a cost-effective alternative to traditional photoshoots, making high-quality fashion visuals more accessible.
              </p>
              <p>
                Whether you need social media ads, branding solutions, or AI-driven fashion campaigns, we've got you covered. Let's bring your vision to life!
              </p>
              <p>
                Contact us today and let's create something amazing together.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform lg:rotate-2 transition-transform duration-500 hover:rotate-0">
              <img 
                src="/lovable-uploads/9119ab45-48bd-4d3d-8b5b-5002c6d4bb17.png" 
                alt="Adforma Creative Work" 
                className="absolute inset-0 w-full h-full object-cover bg-white p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
