import React from 'react';
import { Zap, Shield, Users, Rocket } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
            {mockData.about.title}
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            {mockData.about.description}
          </p>
          <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
            {mockData.about.subtitle}
          </p>
        </div>

        {/* Stats/Benefits with glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-red-600/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-600/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-all duration-300">
              <Zap className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">10x</h3>
            <p className="text-white/80 font-medium">Faster Development</p>
            <p className="text-white/50 text-sm mt-2">With AI automation</p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-red-600/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-600/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-all duration-300">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-white/80 font-medium">Uptime</p>
            <p className="text-white/50 text-sm mt-2">Enterprise grade security</p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-red-600/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-600/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-all duration-300">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-white/80 font-medium">Teams</p>
            <p className="text-white/50 text-sm mt-2">Already building with us</p>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-red-600/30 transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-600/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/30 transition-all duration-300">
              <Rocket className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
            <p className="text-white/80 font-medium">Support</p>
            <p className="text-white/50 text-sm mt-2">From startup to scale</p>
          </div>
        </div>

        {/* Trust signals with glassmorphism */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
            <p className="text-2xl text-white/90 mb-8 font-light italic">
              "We're redefining how developers and businesses launch software"
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/60 font-medium">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
                AI POWERED
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
                ENTERPRISE READY
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
                NEXT-GEN PLATFORM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;