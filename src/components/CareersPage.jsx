import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, Users, Target, Heart, Zap, Mail, User, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Navigation from './Navigation';
import Footer from './Footer';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = [
    {
      id: 'ai-engineer',
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Vizag / Hyderabad',
      description: 'Lead the development of our core AI systems that power automated code generation and intelligent development workflows.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow/PyTorch',
        'Experience with large language models',
        'Strong background in software engineering'
      ],
      responsibilities: [
        'Design and implement AI models for code generation',
        'Optimize model performance and accuracy',
        'Collaborate with product team on AI features',
        'Mentor junior AI engineers'
      ]
    },
    {
      id: 'fullstack-dev',
      title: 'Senior Full Stack Developer',
      type: 'Full-time',
      location: 'Vizag / Hyderabad',
      description: 'Build scalable web applications and APIs that serve millions of developers worldwide.',
      requirements: [
        '4+ years full-stack development experience',
        'Proficiency in React, Node.js, Python',
        'Experience with cloud platforms (AWS/GCP)',
        'Strong database design skills'
      ],
      responsibilities: [
        'Develop frontend and backend systems',
        'Design and implement APIs',
        'Optimize application performance',
        'Code review and mentorship'
      ]
    },
    {
      id: 'product-designer',
      title: 'Senior Product Designer',
      type: 'Full-time',
      location: 'Vizag / Hyderabad',
      description: 'Shape the user experience of our AI-powered development platform used by thousands of developers.',
      requirements: [
        '4+ years product design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Experience with developer tools',
        'Strong user research skills'
      ],
      responsibilities: [
        'Design intuitive user interfaces',
        'Conduct user research and testing',
        'Create design systems and guidelines',
        'Collaborate with engineering teams'
      ]
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Vizag / Hyderabad',
      description: 'Build and maintain the infrastructure that powers our AI-driven development platform.',
      requirements: [
        '3+ years DevOps/Infrastructure experience',
        'Expertise in Kubernetes, Docker, AWS',
        'Experience with CI/CD pipelines',
        'Strong automation skills'
      ],
      responsibilities: [
        'Manage cloud infrastructure',
        'Implement CI/CD pipelines',
        'Monitor system performance',
        'Ensure security and compliance'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness stipend'
    },
    {
      icon: Users,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours and quarterly team retreats'
    },
    {
      icon: Target,
      title: 'Growth & Learning',
      description: '$3,000 annual learning budget and mentorship programs'
    },
    {
      icon: Zap,
      title: 'Equity & Impact',
      description: 'Meaningful equity package and opportunity to shape the future of development'
    }
  ];

  const handleInputChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleApply = (position) => {
    setSelectedPosition(position);
    setApplicationData({ ...applicationData, position: position.title });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Gmail integration
      console.log('Application submitted:', applicationData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Application submitted successfully! We\'ll be in touch within 2-3 business days.');
      setSelectedPosition(null);
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        portfolio: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again or email us directly at betablu.ai@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Join Our Mission
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Help us build the world's first AI-driven development platform. We're looking for exceptional talent to revolutionize how software gets built.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12 tracking-tight">
            Why Work at Gitely<span className="text-red-600">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-black/5 backdrop-blur-2xl border border-black/10 rounded-3xl hover:bg-black/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-red-600/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-black/70 font-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12 tracking-tight">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position) => (
              <div
                key={position.id}
                className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">{position.title}</h3>
                  <span className="bg-red-600/20 backdrop-blur-xl text-red-400 px-4 py-2 rounded-2xl text-sm font-medium border border-red-600/30">
                    {position.type}
                  </span>
                </div>
                
                <div className="flex items-center text-white/60 mb-4 space-x-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                  </div>
                </div>

                <p className="text-white/80 mb-6 font-light leading-relaxed">
                  {position.description}
                </p>

                <Button
                  onClick={() => handleApply(position)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl font-medium group transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">
                Apply for {selectedPosition.title}
              </h3>
              <button
                onClick={() => setSelectedPosition(null)}
                className="text-black/60 hover:text-black text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    className="pl-12 bg-black/5 border-black/20 text-black h-14 rounded-2xl focus:border-red-600"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="pl-12 bg-black/5 border-black/20 text-black h-14 rounded-2xl focus:border-red-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  className="bg-black/5 border-black/20 text-black h-14 rounded-2xl focus:border-red-600"
                />

                <Input
                  type="text"
                  name="experience"
                  placeholder="Years of Experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  className="bg-black/5 border-black/20 text-black h-14 rounded-2xl focus:border-red-600"
                  required
                />
              </div>

              <Input
                type="url"
                name="portfolio"
                placeholder="Portfolio/LinkedIn URL"
                value={applicationData.portfolio}
                onChange={handleInputChange}
                className="bg-black/5 border-black/20 text-black h-14 rounded-2xl focus:border-red-600"
              />

              <div className="relative">
                <FileText className="absolute left-4 top-6 text-black/40 w-5 h-5" />
                <Textarea
                  name="coverLetter"
                  placeholder="Tell us why you're excited about this role and what you'd bring to Gitely..."
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  className="pl-12 bg-black/5 border-black/20 text-black rounded-2xl focus:border-red-600 min-h-32"
                  required
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={() => setSelectedPosition(null)}
                  className="flex-1 bg-black/10 border border-black/20 hover:bg-black/20 text-black py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CareersPage;