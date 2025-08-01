import React from 'react';
import { Bot, GitBranch, Cloud, Activity } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Bot,
  GitBranch,
  Cloud,
  Activity
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto font-light">
            Our AI-powered platform revolutionizes every aspect of software development
          </p>
        </div>

        {/* Features grid with glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mockData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/60 backdrop-blur-2xl border border-black/10 hover:border-red-600/30 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon with glassmorphism */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-600/10 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-lg font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with glassmorphism */}
        <div className="text-center mt-20">
          <button
            onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;