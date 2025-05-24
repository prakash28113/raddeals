import React, { useEffect, useRef } from 'react';
import Button from './common/Button';
import { Paintbrush, Code, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div
      ref={heroRef}
      id="hero"
      className="min-h-screen pt-24 flex items-center bg-hero-background overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-lg">
              <div className="flex gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <Paintbrush size={18} className="text-custom-green" />
                  <span className="text-sm font-medium text-custom-green">Creative Design</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <Code size={18} className="text-custom-green" />
                  <span className="text-sm font-medium text-custom-green">Development</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Where Creativity <span className="text-primary">Meets Code</span>
              </h1>
              
              <p className="text-accent-light text-lg mb-8">
                Raddeals is your one-stop destination for cutting-edge design, animation, and web 
                development solutions that bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  href="#contact"
                >
                  Get a Free Quote
                </Button>
                <Button 
                  variant="secondary" 
                  href="#portfolio"
                  icon={<ArrowRight className="ml-2 h-5 w-5" />}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-[34rem] md:h-[23rem] bg-primary rounded-full opacity-80 blur-xl absolute -top-10 -left-10"></div>
              <div className="w-full aspect-triangle max-w-md rounded-2xl shadow-xl bg-white p-4 relative z-10">
                <div className="w-full h-full rounded-xl bg-accent flex items-center justify-center">
                  <div className="flex justify-center items-center h-full">
                    <img src="src\images\Rad Deals.png" alt="Raddeals Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="animate-bounce">
          <a 
            href="#about" 
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;