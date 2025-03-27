
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img alt="ADFORMA Logo" src="/lovable-uploads/a39865b5-170c-4771-a6a7-f6e20cd4da95.png" className="h-20 w-auto object-cover" />
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Simple design solutions with big impact for forward-thinking brands.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-600 hover:text-black transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">About</a></li>
              <li><a href="#projects" className="text-sm text-gray-600 hover:text-black transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">adforma.creative@gmail.com</li>
              <li className="text-sm text-gray-600">+91 98642 30603</li>
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
    </footer>;
};
export default Footer;
