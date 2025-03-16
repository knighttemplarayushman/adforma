
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50">
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
            
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-1">10+</h3>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">75+</h3>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">40+</h3>
                <p className="text-sm text-gray-500">Satisfied Clients</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform lg:rotate-2 transition-transform duration-500 hover:rotate-0">
              <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-lg">
                About Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
