
import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('security');

  const tabs: Tab[] = [
    {
      id: 'security',
      label: 'Security',
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium mb-4">Advanced Security Framework</h3>
            <p className="text-muted-foreground mb-6">
              Our system utilizes Android Verified Boot (AVB) with cryptographic signing to verify system integrity. 
              Any unauthorized change will be immediately detected and addressed.
            </p>
            <ul className="space-y-3">
              {[
                'Digital signature verification for system components',
                'Runtime Application Self-Protection (RASP)',
                'Secure boot process with integrity verification',
                'Continuous monitoring for tampering attempts'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3 h-3 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative glass-effect rounded-3xl p-6 shadow-xl shadow-black/5 max-w-[320px]">
              <div className="aspect-square bg-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="relative">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-24 h-24 text-primary/50"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-lg text-xs font-medium">
                System Integrity Verified
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'updates',
      label: 'Updates',
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium mb-4">Secure Update System</h3>
            <p className="text-muted-foreground mb-6">
              Our private Over-The-Air (OTA) server distributes signed updates that are verified before installation,
              ensuring only authorized system changes are applied.
            </p>
            <ul className="space-y-3">
              {[
                'Cryptographically signed updates',
                'Verification before installation',
                'Rollback protection for downgrade attacks',
                'Transparent update process with status indicators'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3 h-3 text-blue-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative glass-effect rounded-3xl p-6 shadow-xl shadow-black/5 max-w-[320px]">
              <div className="aspect-square bg-blue-500/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-16 h-16 mx-auto mb-4 text-blue-500/50"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  <p className="text-sm font-medium">System Update</p>
                  <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
                    <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Downloading update...</p>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-lg text-xs font-medium">
                Secure Update in Progress
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'apps',
      label: 'App Control',
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium mb-4">Application Control System</h3>
            <p className="text-muted-foreground mb-6">
              Our system enforces strict control over which applications can be installed and run, 
              using a whitelist approach to ensure only pre-approved apps are allowed.
            </p>
            <ul className="space-y-3">
              {[
                'Pre-approved application whitelist',
                'Application integrity verification',
                'Unauthorized app installation prevention',
                'Continuous runtime validation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3 h-3 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative glass-effect rounded-3xl p-6 shadow-xl shadow-black/5 max-w-[320px]">
              <div className="aspect-square bg-primary/5 rounded-2xl overflow-hidden flex items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[...Array(6)].map((_, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "aspect-square rounded-xl flex items-center justify-center",
                        index < 4 ? "bg-white" : "bg-gray-100"
                      )}
                    >
                      {index < 4 ? (
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
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                      ) : (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-6 h-6 text-gray-400"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-lg text-xs font-medium">
                Approved Applications
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Comprehensive Security System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the key components of our secure environment that work together to provide uncompromising protection.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 border-b border-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-all relative",
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          <FadeIn direction="up" className="py-8">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
