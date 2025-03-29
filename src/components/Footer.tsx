import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img alt="ADFORMA Logo" src="/assets/images/logo.png" className="h-20 w-auto object-cover" />
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Simple design solutions with big impact for forward-thinking brands.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/adforma.creative" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@ayushmanthakur__" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-600 hover:text-black transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">About</a></li>
              <li><a href="#showcase" className="text-sm text-gray-600 hover:text-black transition-colors">Showcase</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">adforma.creative@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {currentYear} ADFORMA. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
