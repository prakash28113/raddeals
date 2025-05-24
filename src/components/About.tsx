import React, { useEffect, useRef } from 'react';
import { Sparkle, Lightbulb, Zap, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Raddeals is a creative and technology-powered agency that transforms ideas into powerful 
            digital experiences. With expertise in both visual storytelling and custom software 
            development, we help businesses stand out and scale up in the digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Sparkle className="text-purple-700 h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Creative Vision</h3>
            <p className="text-gray-600">
              We blend artistry and innovation to create compelling visual stories that capture attention.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-indigo-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Code className="text-indigo-700 h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
            <p className="text-gray-600">
              Our development team creates robust, scalable solutions using the latest technologies.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Lightbulb className="text-blue-700 h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategic Thinking</h3>
            <p className="text-gray-600">
              We approach every project with careful planning and strategic insights to maximize impact.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Zap className="text-pink-700 h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
            <p className="text-gray-600">
              Our streamlined process ensures quality results without unnecessary delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;