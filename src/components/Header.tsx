import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src="/Logo.png" 
              alt="Vaylo AI Solutions Logo" 
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-contain transition-all duration-300 hover:scale-105 logo-blue-purple logo-hover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium text-center mt-4"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;