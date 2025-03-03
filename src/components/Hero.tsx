
import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-28 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-28 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        <FadeIn 
          direction="up" 
          className="mb-6 text-center"
          delay={100}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Advanced Security for Mobile Devices
          </span>
        </FadeIn>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl mx-auto text-balance">
          <AnimatedText
            text="Secure Digital Experience with Controlled Environment"
            tag="span"
            delay={300}
          />
        </h1>
        
        <FadeIn
          direction="up"
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10"
          delay={600}
        >
          A premium, tamper-proof solution that provides an uncompromising environment where only authorized applications are allowed and integrity is continuously verified.
        </FadeIn>
        
        <FadeIn
          direction="up"
          className="flex flex-col sm:flex-row gap-4 mb-16"
          delay={800}
        >
          <a
            href="#features"
            className="px-8 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            Explore Features
          </a>
          <a
            href="#security"
            className="px-8 py-3 bg-white border border-border rounded-full font-medium transition-all hover:bg-secondary/50 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            Security Details
          </a>
        </FadeIn>
        
        {/* Device mockup */}
        <FadeIn
          direction="up"
          delay={1000}
          className="relative w-full max-w-3xl mx-auto"
        >
          <div className="relative glass-effect rounded-3xl p-1 shadow-xl shadow-black/5">
            <div className="aspect-[9/16] max-w-[280px] mx-auto rounded-2xl overflow-hidden border-[8px] border-black">
              <div className="bg-primary/5 w-full h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-8 h-8 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">KosherKeeper</h3>
                  <p className="text-sm text-muted-foreground">Secure Environment Active</p>
                </div>
              </div>
            </div>
            
            {/* Security indicators */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-lg text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Verified</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
