import React, { useState } from 'react';
import { Mail, User, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { mockData, mockAPI } from '../mock';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await mockAPI.submitWaitlist(formData);
      setIsSubmitted(true);
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '' });
      }, 3000);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {mockData.waitlist.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            {mockData.waitlist.subtitle}
          </p>
        </div>

        {/* Waitlist Form with enhanced glassmorphism */}
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name input with glassmorphism */}
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5 group-hover:text-white/60 transition-colors duration-300" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-12 bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder-white/50 h-16 rounded-2xl focus:border-red-600 focus:ring-red-600/20 hover:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email input with glassmorphism */}
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5 group-hover:text-white/60 transition-colors duration-300" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder-white/50 h-16 rounded-2xl focus:border-red-600 focus:ring-red-600/20 hover:bg-white/15 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto hover:scale-105 hover:shadow-2xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Joining...
                      </div>
                    ) : (
                      <>
                        Join the Waitlist
                        <ArrowRight className="ml-3 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* Success state with glassmorphism */
            <div className="text-center py-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Welcome to the future!
              </h3>
              <p className="text-white/80 text-lg">
                {mockData.waitlist.successMessage}
              </p>
            </div>
          )}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 inline-block">
            <p className="text-white/60 text-sm font-light">
              No spam, ever. We'll only send you updates about Gitely's progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;