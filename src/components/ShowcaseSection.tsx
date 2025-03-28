
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ShowcaseSection = () => {
  // Array of Kate images
  const kateImages = [
    "/lovable-uploads/a299871a-d86e-46b0-9547-6a1a7642b8bf.png",
    "/lovable-uploads/09e8f500-7a7a-4182-8d96-0931e0315887.png",
    "/lovable-uploads/2fed1cde-efe6-4d92-8565-8029f92f2ccd.png",
    "/lovable-uploads/b05b958a-c37c-4344-a2f6-1635145ce688.png",
    "/lovable-uploads/2181148b-900d-4897-ad7b-2dbd23db3d7d.png",
    "/lovable-uploads/0d99aa2a-7237-4a43-97de-00912dd34298.png",
  ];

  return (
    <section id="showcase" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs tracking-wider uppercase bg-gray-100 rounded-full">
            Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Meet Kate, our AI model
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Kate is our virtual fashion model who brings your products to life without expensive photoshoots. 
            Get stunning, professional imagery for your brand in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kateImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translateY(0)';
              }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={image} 
                  alt={`Kate showcase image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-1 text-sm font-medium text-black hover:text-gray-700 cursor-pointer group">
            <span>Learn more about Kate</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            With Kate, your fashion brand can showcase products consistently across all campaigns, while dramatically 
            reducing costs and time spent on traditional photoshoots.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
