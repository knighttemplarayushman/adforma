
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <CursorEffect />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
