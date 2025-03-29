import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('access_key', 'cd59254b-748b-4024-8bee-db29871c4a8f');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('subject', 'New Contact Form Submission - Adforma');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        
        toast({
          title: "Success",
          description: "Your message has been sent!",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs tracking-wider uppercase bg-gray-100 rounded-full">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Let's create something amazing together
            </h2>
            <p className="text-gray-600 mb-12 max-w-lg">
              Ready to take your brand to the next level? Get in touch with us and let's talk about your next project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 text-gray-400" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">adforma.creative@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
