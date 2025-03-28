
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed w-full px-6 md:px-12 py-4 z-50 transition-all duration-300 ease-in-out', scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
          <img alt="ADFORMA Logo" src="/lovable-uploads/9119ab45-48bd-4d3d-8b5b-5002c6d4bb17.png" className="h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#showcase">Showcase</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 animate-slideDown">
          <div className="flex flex-col px-6 py-8 space-y-6">
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#showcase" onClick={() => setIsOpen(false)}>Showcase</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a href={href} className="nav-item text-sm font-medium">
      {children}
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => {
  return (
    <a href={href} className="text-lg font-medium py-2 transition-colors hover:text-gray-600" onClick={onClick}>
      {children}
    </a>
  );
};

export default Navbar;
