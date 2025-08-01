import React from 'react';
import { mockData } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionName) => {
    const element = document.querySelector(`#${sectionName.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description with glassmorphism */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
              Gitely<span className="text-red-600">.</span>
            </h3>
            <p className="text-white/70 mb-8 max-w-md text-lg font-light leading-relaxed">
              Building the world's first AI-driven development platform. From idea to production, we're revolutionizing how software gets built.
            </p>
            <div className="flex space-x-6">
              {mockData.contact.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300 font-medium bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links with glassmorphism */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 w-full text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 w-full text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('waitlist')}
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 w-full text-left"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Company links with glassmorphism */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('careers')}
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 w-full text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 w-full text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-all duration-300 font-light bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 hover:bg-white/10 block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with glassmorphism */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-light">
              {mockData.footer.copyright}
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {mockData.footer.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;