
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3caaa40d-4ca7-4742-a979-7b977edd9395.png" 
                alt="ADFORMA Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Minimalist design solutions with maximum impact for forward-thinking brands.
            </p>
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
              <li className="text-sm text-gray-600">info@adforma.com</li>
              <li className="text-sm text-gray-600">+1 (555) 123-4567</li>
              <li className="text-sm text-gray-600">123 Design Street, Suite 100</li>
              <li className="text-sm text-gray-600">New York, NY 10001</li>
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
