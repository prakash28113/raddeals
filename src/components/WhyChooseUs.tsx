import React, { useRef, useEffect } from 'react';
import { Check, Puzzle as PuzzlePiece, Users, Zap, Headphones, Code } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
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

  const reasons = [
    {
      icon: <PuzzlePiece size={24} />,
      title: "End-to-End Creative & Tech Solutions",
      description: "From concept to execution, we handle all aspects of your digital needs under one roof."
    },
    {
      icon: <Users size={24} />,
      title: "Experienced Designers & Developers",
      description: "Our team brings years of expertise across multiple industries and technologies."
    },
    {
      icon: <Code size={24} />,
      title: "Modern Tech Stack & Tools",
      description: "We leverage the latest technologies to build robust, future-proof solutions."
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Turnaround & Dedicated Support",
      description: "We value your time and provide ongoing support to ensure your success."
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Raddeals?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8">
              We combine creative excellence with technical expertise to deliver solutions 
              that not only look great but also perform exceptionally well.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 bg-purple-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;