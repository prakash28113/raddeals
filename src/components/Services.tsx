import React, { useRef, useEffect } from 'react';
import { 
  PaintBucket, 
  Video, 
  Play, 
  Image, 
  Palette, 
  Globe, 
  ShoppingCart, 
  LayoutGrid, 
  Smartphone,
  Code 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
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

  const creativeServices = [
    {
      icon: <PaintBucket className="h-8 w-8 text-purple-600" />,
      title: "Creative Design",
      description: "Innovative and compelling designs that capture your brand's essence."
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "2D & 3D Animations",
      description: "Engaging animations that bring your ideas to life with movement and depth."
    },
    {
      icon: <Play className="h-8 w-8 text-purple-600" />,
      title: "Logo Animation & Explainer Videos",
      description: "Dynamic logo animations and clear, concise explainer videos."
    },
    {
      icon: <Image className="h-8 w-8 text-purple-600" />,
      title: "Posters, Banners & Digital Ads",
      description: "Eye-catching visual assets for all your marketing needs."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Branding & Graphic Design",
      description: "Cohesive branding and graphic design that tells your unique story."
    }
  ];

  const developmentServices = [
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Fully Functional Websites",
      description: "Custom websites built with modern technologies for optimal performance."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: "E-Commerce Platforms",
      description: "Secure, scalable online stores optimized for conversions."
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-indigo-600" />,
      title: "Custom Web Applications",
      description: "Tailored web applications that solve your unique business challenges."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "UI/UX Design & Responsive Interfaces",
      description: "Intuitive user interfaces that provide exceptional user experiences across all devices."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600">
            We offer comprehensive solutions that blend creativity and technology to help your business succeed.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Creative Design Services */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">Creative Design</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {creativeServices.map((service, index) => (
                <ServiceCard 
                  key={`creative-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          
          {/* Software Development Services */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold">Software Development</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {developmentServices.map((service, index) => (
                <ServiceCard 
                  key={`dev-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;