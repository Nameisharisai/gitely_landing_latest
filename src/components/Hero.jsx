import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-10 min-h-[70vh] mt-16" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          {mockData.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          {mockData.hero.subheadline}
        </p>

        {/* CTA Buttons with glassmorphism */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button
            onClick={scrollToWaitlist}
            className="group bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center hover:scale-105 hover:shadow-2xl"
          >
            {mockData.hero.ctaText}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={scrollToFeatures}
            className="group bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Trust indicators with glassmorphism */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
            <span className="text-white/70 text-sm font-medium">AI-Powered</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
            <span className="text-white/70 text-sm font-medium">Enterprise Ready</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
            <span className="text-white/70 text-sm font-medium">Next-Gen Platform</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToFeatures}
          className="animate-bounce text-white/50 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;