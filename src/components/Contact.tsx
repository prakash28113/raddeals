import React, { useRef, useEffect, useState } from 'react';
import Button from './common/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-contact-background text-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8dfcba]">Let's Build Something Amazing Together</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-[#8dfcba]">
            Whether you need stunning visuals or a full-featured website, we're here to help. 
            Contact us today to discuss your project.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-8">
              <div className="flex items-start">
                <div className="bg-[#233836] p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#8dfcba]">Email Us</h3>
                  <p className="text-[#8dfcba]">connect@raddeals.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#233836] p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#8dfcba]">Call Us</h3>
                  <p className="text-[#8dfcba]">+91 7981524909</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#233836] p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#8dfcba]">Visit Us</h3>
                  <p className=" text-[#8dfcba]">MIG-II-301, K P H B Phase 9, Kukatpally,<br /> Hyderabad, Telangana 500085</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white text-gray-800 rounded-xl p-8 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formState.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      variant="primary" 
                      className="w-full sm:w-auto px-8 text-base"
                      icon={<Send className="ml-2 h-5 w-5" />}
                    >
                      Submit Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;