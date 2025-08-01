import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../mock';

const Careers = () => {
  const navigate = useNavigate();

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 tracking-tight">
            Join Our Mission
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            {mockData.careers.title}
          </p>
        </div>

        {/* Quick preview of positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mockData.careers.positions.slice(0, 4).map((position, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-black/5 backdrop-blur-2xl border border-black/10 hover:border-red-600/30 hover:bg-black/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => navigate('/careers')}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-black tracking-tight group-hover:text-red-600 transition-colors duration-300">{position.title}</h3>
                <span className="bg-red-600/10 backdrop-blur-xl text-red-600 px-4 py-2 rounded-2xl text-sm font-medium border border-red-600/20">
                  {position.type}
                </span>
              </div>
              
              <div className="flex items-center text-black/60 mb-8">
                <span>{position.location}</span>
              </div>

              <div className="flex items-center text-red-600 group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-medium mr-2">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to careers page */}
        <div className="text-center bg-black/5 backdrop-blur-2xl border border-black/10 rounded-3xl p-12 hover:bg-black/10 transition-all duration-500">
          <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">
            Ready to Build the Future?
          </h3>
          <p className="text-black/70 mb-8 text-lg font-light max-w-2xl mx-auto">
            Explore all open positions, learn about our benefits, and apply to join our team.
          </p>
          <Button
            onClick={() => navigate('/careers')}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Positions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;