import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    // Note: We need to use a valid public key, this example uses the provided service ID
    emailjs.init("user_KXL60YGCe3cGxZZPvnDaE");
    setEmailJSInitialized(true);
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Check if email has already submitted a request recently
  const checkEmailSubmission = (email: string) => {
    const emailSubmissions = JSON.parse(localStorage.getItem('emailSubmissions') || '{}');
    const lastSubmission = emailSubmissions[email];
    
    if (lastSubmission) {
      // Check if last submission was within the last 24 hours (86400000 ms)
      const timeSinceLastSubmission = Date.now() - lastSubmission;
      if (timeSinceLastSubmission < 86400000) {
        return false; // Cannot submit yet
      }
    }
    
    return true; // Can submit
  };

  // Record email submission time
  const recordEmailSubmission = (email: string) => {
    const emailSubmissions = JSON.parse(localStorage.getItem('emailSubmissions') || '{}');
    emailSubmissions[email] = Date.now();
    localStorage.setItem('emailSubmissions', JSON.stringify(emailSubmissions));
  };

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

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Check if this email can submit a request
    if (!checkEmailSubmission(email)) {
      toast({
        title: "Rate Limited",
        description: "You can only send one message every 24 hours with this email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create a temporary form element to use with emailjs.sendForm
      const form = document.createElement('form');
      
      // Create and append hidden inputs for our data
      const nameInput = document.createElement('input');
      nameInput.type = 'hidden';
      nameInput.name = 'from_name';
      nameInput.value = name;
      form.appendChild(nameInput);
      
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'from_email';
      emailInput.value = email;
      form.appendChild(emailInput);
      
      const messageInput = document.createElement('input');
      messageInput.type = 'hidden';
      messageInput.name = 'message';
      messageInput.value = message;
      form.appendChild(messageInput);

      // Use the sendForm method which is more reliable
      await emailjs.sendForm(
        'service_2ei9t1r', // Your service ID
        'template_contact', // Your template ID
        form,
        'user_KXL60YGCe3cGxZZPvnDaE' // Your user ID
      );
      
      // Record this submission to prevent repeated submissions
      recordEmailSubmission(email);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Show success message
      toast({
        title: "Success",
        description: "Your message has been sent!",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      // More descriptive error message
      let errorMsg = "Failed to send your message. Please try again.";
      if (error instanceof Error) {
        errorMsg = `Error: ${error.message}`;
      }
      
      toast({
        title: "Error",
        description: errorMsg,
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
