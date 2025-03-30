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
              We believe in the power of simple design
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Hi there! We're Adforma – a creative team that helps businesses look their best online. We specialize in making eye-catching designs, effective ads, and smart marketing plans that help you stand out.
              </p>
              <p>
                One of our special offerings is KATE, our AI fashion model. Instead of expensive photo shoots, we use advanced 3D modeling to create beautiful fashion images at a fraction of the cost.
              </p>
              <p>
                Whether you need help with social media, branding, or fashion campaigns, we're here to bring your ideas to life in a way that feels true to you.
              </p>
              <p>
                Let's chat about how we can work together to make something amazing!
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl transform lg:rotate-2 transition-transform duration-500 hover:rotate-0">
              <img alt="Adforma Creative Design Work" src="/assets/images/about-image.png" className="absolute inset-0 w-full h-full bg-white p-8 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
