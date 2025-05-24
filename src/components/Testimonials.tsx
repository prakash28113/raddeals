import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import sudheerImage from '../images/icon.jpg'; // Import the image

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sri sai metla",
    position: "CEO",
    company: "Veteran creative works.",
    image: sudheerImage, // Use the imported image
    quote: "Raddeals transformed our brand identity and online presence. Their team delivered exceptional designs and a website that perfectly captures our vision. The attention to detail and creativity exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Chaitanya",
    position: "Marketing head",
    company: "Srinivasa Technologies pvt Ltd.",
    image: sudheerImage,
    quote: "Working with Raddeals was a game-changer for our business. They developed a custom e-commerce platform that not only looks amazing but has significantly improved our conversion rates. Their technical expertise is outstanding.",
    rating: 5
  },
  {
    id: 3,
    name: "Anirudh",
    position: "Product Manager",
    company: "NextGen co.",
    image: sudheerImage,
    quote: "The team at Raddeals created stunning product animations that have become central to our marketing campaigns. Their creative approach and technical skill delivered results that exceeded our expectations.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear what our clients have to say about working with Raddeals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="md:flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                          />
                        </div>
                        <div className="flex flex-col text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-5 w-5 ${
                                  i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-semibold text-lg">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-purple-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;