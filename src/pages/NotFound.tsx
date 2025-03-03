
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className={cn(
            "w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto"
          )}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-10 h-10 text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-medium mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been moved, deleted, or perhaps never existed.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-2px] active:translate-y-[0px]"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
