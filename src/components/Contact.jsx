import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { mockData } from '../mock';

const Contact = () => {
  const socialIcons = {
    LinkedIn: Linkedin,
    Twitter: Twitter,
    GitHub: Github
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-black/70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about Gitely? Want to learn more about our AI-powered development platform? We'd love to hear from you.
          </p>

          {/* Contact info with glassmorphism */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 mb-16">
            {/* Email */}
            <a
              href={`mailto:${mockData.contact.email}`}
              className="group flex items-center text-black hover:text-red-600 transition-all duration-300 bg-black/5 backdrop-blur-2xl border border-black/10 rounded-3xl p-8 hover:border-red-600/30 hover:bg-black/10 hover:scale-105"
            >
              <div className="w-16 h-16 bg-red-600/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mr-6 group-hover:bg-red-600/20 transition-all duration-300">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-left">
                <div className="text-sm text-black/60 font-medium">Email us</div>
                <div className="text-xl font-semibold">{mockData.contact.email}</div>
              </div>
            </a>
          </div>

          {/* Social links with glassmorphism */}
          <div className="flex justify-center space-x-6 mb-16">
            {mockData.contact.social.map((social, index) => {
              const IconComponent = socialIcons[social.name];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-black/5 backdrop-blur-2xl border border-black/10 hover:border-red-600/30 rounded-2xl flex items-center justify-center transition-all duration-300 group hover:bg-black/10 hover:scale-110"
                >
                  <IconComponent className="w-7 h-7 text-black/60 group-hover:text-red-600 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Additional CTA with glassmorphism */}
          <div className="bg-black/5 backdrop-blur-2xl border border-black/10 rounded-3xl p-12 hover:bg-black/10 transition-all duration-500">
            <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">
              Ready to Transform Your Development Process?
            </h3>
            <p className="text-black/70 mb-8 text-lg font-light max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with AI-powered development.
            </p>
            <button
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;