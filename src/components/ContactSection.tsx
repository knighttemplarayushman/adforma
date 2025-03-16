
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs tracking-wider uppercase bg-gray-100 rounded-full">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Let's create something exceptional together
            </h2>
            <p className="text-gray-600 mb-12 max-w-lg">
              Ready to elevate your digital presence? Get in touch with us to start a conversation about your next project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@adforma.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600">123 Design Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
