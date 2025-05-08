import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'Service', href: '#', active: false },
  { name: 'Projects', href: '#', active: false },
  { name: 'About us', href: '#', active: false },
  { name: 'Contact us', href: '#', active: false },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (navRef.current) {
            if (currentScrollY > 10) {
              navRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
              navRef.current.style.backdropFilter = 'blur(8px)';
            } else {
              navRef.current.style.backgroundColor = 'transparent';
              navRef.current.style.backdropFilter = 'none';
            }
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 w-full py-3 md:py-4 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container-fluid mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="text-white text-base sm:text-xl font-bold">Ayushi Enterprise</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-3 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-white text-sm lg:text-base transition-colors duration-200 hover:text-highlight-yellow",
                link.active && "border-b-2 border-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-cta-blue hover:bg-blue-600 text-white rounded-full px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm transform-gpu"
          >
            Get A Queue
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-sky-950/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-white py-2 transition-colors duration-200 hover:text-highlight-yellow",
                  link.active && "border-b-2 border-white"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-cta-blue hover:bg-blue-600 text-white rounded-full w-full mt-2"
            >
              Get A Queue
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
