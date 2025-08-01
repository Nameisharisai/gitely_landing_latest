import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mockData } from '../mock';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/')) {
      // It's a route
      navigate(href);
    } else {
      // It's an anchor link
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // On home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with red dot */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity duration-200"
            >
              {mockData.navigation.logo}<span className="text-red-600">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {mockData.navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-white/5 backdrop-blur-xl"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigation('#waitlist')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white p-2 rounded-xl hover:bg-white/5 backdrop-blur-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with glassmorphism */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-black/50 backdrop-blur-2xl rounded-b-2xl">
              {mockData.navigation.links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-white/80 hover:text-white block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-xl hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('#waitlist')}
                className="bg-red-600 hover:bg-red-700 text-white block px-4 py-3 text-base font-medium w-full text-left rounded-xl mt-4 transition-all duration-300"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;