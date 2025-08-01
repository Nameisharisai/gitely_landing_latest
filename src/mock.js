// Mock data for Gitely landing page

export const mockData = {
  navigation: {
    logo: "Gitely",
    links: [
      { name: "Features", href: "#features" },
      { name: "About", href: "#about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "#contact" }
    ]
  },
  
  hero: {
    headline: "Building the World's First AI-Driven Development Platform",
    subheadline: "From idea to production, Gitely automates coding, CI/CD, and live monitoring without human developers.",
    ctaText: "Join the Waitlist"
  },
  
  features: [
    {
      icon: "Bot",
      title: "AI-Driven Code Generation",
      description: "Advanced AI that understands your entire project context to generate optimal, production-ready code."
    },
    {
      icon: "GitBranch",
      title: "Automated CI/CD Pipelines", 
      description: "Zero-configuration pipelines that intelligently adapt to your project needs with automated optimization."
    },
    {
      icon: "Cloud",
      title: "One-Click Cloud Deployment",
      description: "Deploy to any cloud provider with optimized infrastructure configuration done automatically."
    },
    {
      icon: "Activity",
      title: "Live Monitoring & Auto-Fixes",
      description: "Proactive issue detection with automatic resolution before your users notice any problems."
    }
  ],
  
  about: {
    title: "Redefining Software Development",
    description: "Gitely is pioneering the next evolution of development tools by integrating AI deeply into every aspect of the software lifecycle.",
    subtitle: "Backed by cutting-edge AI technology, Gitely enables startups and enterprises to launch products 10x faster while maintaining enterprise-grade quality and security standards."
  },
  
  careers: {
    title: "We're building the future of AI-powered development. Want to join us?",
    positions: [
      { title: "AI Engineer", type: "Full-time", location: "Remote" },
      { title: "Full Stack Developer", type: "Full-time", location: "San Francisco" },
      { title: "Product Designer", type: "Full-time", location: "Remote" },
      { title: "DevOps Engineer", type: "Full-time", location: "New York" }
    ]
  },
  
  waitlist: {
    title: "Get Early Access to Gitely",
    subtitle: "Join our waitlist and shape the future of AI-driven development.",
    successMessage: "Thanks for joining! We'll be in touch soon."
  },
  
  contact: {
    email: "betablu.ai@gmail.com",
    social: [
      { name: "LinkedIn", url: "https://linkedin.com/company/gitely" },
      { name: "Twitter", url: "https://twitter.com/gitely" },
      { name: "GitHub", url: "https://github.com/gitely" }
    ]
  },
  
  footer: {
    links: ["About", "Careers", "Privacy Policy"],
    copyright: "© 2025 Gitely. All rights reserved."
  }
};

// Mock API functions
export const mockAPI = {
  submitWaitlist: async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Waitlist submission (mock):', data);
    return { success: true, message: 'Successfully joined waitlist!' };
  },
  
  submitApplication: async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Job application submission (mock):', data);
    return { success: true, message: 'Application submitted successfully!' };
  }
};