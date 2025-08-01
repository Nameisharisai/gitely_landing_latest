import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Careers from './Careers';
import Waitlist from './Waitlist';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Careers />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;