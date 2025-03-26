
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
                ADFORMA was founded on the principle that great design doesn't shout—it resonates. Inspired by the philosophies of modernist design, we craft digital experiences that strip away the unnecessary to focus on what truly matters.
              </p>
              <p>
                Our approach combines strategic thinking with meticulous execution. Every pixel, interaction, and element serves a purpose in creating a cohesive brand narrative that elevates our clients above the digital noise.
              </p>
              <p>
                We partner with forward-thinking brands who understand that in a world of excess, restraint makes the strongest statement.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform lg:rotate-2 transition-transform duration-500 hover:rotate-0">
              <img 
                src="/lovable-uploads/a8203968-bd52-4518-b9c8-ad55475d6878.png" 
                alt="Adforma Logo" 
                className="absolute inset-0 w-full h-full object-contain bg-white p-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
