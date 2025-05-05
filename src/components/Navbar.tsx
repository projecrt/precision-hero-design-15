
import React, { useState } from 'react';
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="text-white text-xl font-bold">Ayushi Enterprise</div>
        
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
        <div className="hidden md:flex md:items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-white transition-colors duration-200 hover:text-highlight-yellow",
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
            className="bg-cta-blue hover:bg-blue-600 text-white rounded-full"
          >
            Get A Queue
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-sky-950">
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
