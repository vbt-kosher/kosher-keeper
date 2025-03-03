
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-4 glass-effect shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a 
          href="/" 
          className="text-xl font-medium tracking-tight"
        >
          Kosher<span className="font-light">Keeper</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Products', 'Features', 'Security', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              'px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full',
              scrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white/20 backdrop-blur-sm text-primary hover:bg-white/40 border border-white/30'
            )}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 items-center justify-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-current transition-transform",
              menuOpen && "transform rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-current transition-opacity", 
              menuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-current transition-transform",
              menuOpen && "transform -rotate-45 -translate-y-2"
            )} 
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out",
          menuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {['Products', 'Features', 'Security', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-primary text-white rounded-full text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
