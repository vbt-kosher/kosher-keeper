
import React from 'react';
import FadeIn from './FadeIn';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, className }) => (
  <FadeIn 
    direction="up" 
    delay={delay}
    className={cn(
      "bg-white border border-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:translate-y-[-4px]",
      className
    )}
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </FadeIn>
);

const Features = () => {
  const features = [
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-primary"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "App Filtering",
      description: "Restricts usage to a pre-approved list of applications, ensuring only authorized apps can be installed or run.",
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-primary"
        >
          <path d="m12 12-8-4.5 8-4.5 8 4.5z" />
          <path d="M4 7.5V16l8 4.5" />
          <path d="M20 7.5V16l-8 4.5" />
          <line x1="4" y1="12" x2="12" y2="16.5" />
          <line x1="12" y1="16.5" x2="20" y2="12" />
        </svg>
      ),
      title: "Controlled Updates",
      description: "Allows only verified updates from a private source, preventing unauthorized modifications to the system.",
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-primary"
        >
          <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
          <path d="M6 11v.01" />
          <path d="M10 11v.01" />
          <path d="M14 11v.01" />
          <path d="M18 11v.01" />
        </svg>
      ),
      title: "Tamper Protection",
      description: "Locks the device or revokes its status if unauthorized modifications are detected, maintaining system integrity.",
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-primary"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Trusted Environment",
      description: "Provides a secure space for sensitive operations with continuous verification of the system's integrity.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Comprehensive Security Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed with security at its core, our solution provides multiple layers of protection to ensure a controlled and secure environment.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={300 + (index * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
