import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './common/Button';

interface Project {
  id: number;
  title: string;
  category: 'design' | 'development';
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Creative Brand Identity",
    category: "design",
    image: "https://images.pexels.com/photos/1516849/pexels-photo-1516849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete brand identity including logo, color palette, and style guide for a tech startup."
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Custom-built e-commerce solution with integrated payment processing and inventory management."
  },
  {
    id: 3,
    title: "3D Product Animation",
    category: "design",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sleek 3D animation showcasing product features and benefits for marketing campaign."
  },
  {
    id: 4,
    title: "Business Web Application",
    category: "development",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Comprehensive web application for business process management with dashboard and reporting."
  },
  {
    id: 5,
    title: "Marketing Campaign Assets",
    category: "design",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Suite of digital marketing assets including social media graphics and email templates."
  },
  {
    id: 6,
    title: "Restaurant Ordering App",
    category: "development",
    image: "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mobile-friendly web application for restaurant online ordering and reservations."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'design' | 'development'>('all');
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

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Work in Action</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 mb-8">
            Browse through our selected projects showcasing our capabilities in both design and development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('design')}
              className={`px-6 py-2 rounded-full ${
                filter === 'design' 
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              Design
            </button>
            <button 
              onClick={() => setFilter('development')}
              className={`px-6 py-2 rounded-full ${
                filter === 'development' 
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              Development
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-gray-700">
                  {project.category === 'design' ? 'Design' : 'Development'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  icon={<ArrowRight size={16} className="ml-2" />}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="primary">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;