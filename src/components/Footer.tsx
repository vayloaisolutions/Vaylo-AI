import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="flex items-center">
                <img 
                  src="/Logo.png" 
                  alt="Vaylo AI Solutions Logo" 
                  className="h-12 w-12 object-contain logo-blue-purple"
                />
              </div> */}
              <span className="text-xl font-bold">Vaylo AI Solutions</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Empowering small businesses with AI automation that actually works. 
              From missed calls to slow follow-ups, we've got you covered.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:vayloaisolutions@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                vayloaisolutions@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>AI Voice Solutions</li>
              <li>Lead Qualification</li>
              <li>Lead Nurturing</li>
              <li>Business Automation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 sm:mb-0">
            © 2024 Vaylo AI Solutions. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;