import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        width,
        height,
        left,
        top
      } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden" style={{
    '--mouse-x': '0.5',
    '--mouse-y': '0.5',
    background: `radial-gradient(
          800px circle at 
          calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), 
          rgba(255, 255, 255, 1), 
          rgba(248, 248, 248, 1)
        )`
  } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs tracking-wider uppercase bg-black text-white rounded-full animate-fadeIn">
            Innovation through simplicity
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slideUp" style={{
          animationDelay: '200ms'
        }}>
            Design <br className="md:hidden" />
            <span className="relative inline-block">
              Redefined
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-black transform origin-left transition-transform"></span>
            </span>
          </h1>
          
          <p className="max-w-xl text-gray-600 mb-10 animate-slideUp" style={{
          animationDelay: '400ms'
        }}>
            We craft minimal, precise, and purposeful digital experiences 
            for forward-thinking brands that value refined aesthetics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{
          animationDelay: '600ms'
        }}>
            <a href="#contact" className="bg-black text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-gray-900 transition-colors group">
              Start a project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#about" className="px-6 py-3 rounded-md border border-gray-300 hover:border-black transition-colors">
              Learn more
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fadeIn" style={{
      animationDelay: '1000ms'
    }}>
        <a href="#services" className="flex flex-col items-center text-sm text-gray-400 hover:text-black transition-colors">
          <span className="mb-2"></span>
          <span className="w-0.5 h-8 bg-gray-300 animate-pulse"></span>
        </a>
      </div>
    </section>;
};
export default HeroSection;