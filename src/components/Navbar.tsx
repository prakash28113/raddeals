import React, { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { Link } from './common/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-hero-background py-4`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">
                RadDeals
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white">About</Link>
            <Link href="#services" className="text-white">Services</Link>
            <Link href="#portfolio" className="text-white">Portfolio</Link>
            <Link href="#testimonials" className="text-white">Testimonials</Link>
            <Link href="#contact" className="bg-primary !text-black px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-purple-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white py-4 rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-primary !text-black px-5 py-2 rounded-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;