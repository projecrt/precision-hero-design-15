
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSectionUpdate = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/0b1515fb-5f70-44cb-8a7c-c3f402177f96.png" 
          alt="Precision laser cutting with sparks" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:items-start md:text-left lg:px-20">
        <div className="max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="block">Precision Laser Cutting &</span>
            <span className="block mt-2">Engineering Solutions</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl">
            For Every Industry.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Our Services
            </Button>
            <Button variant="outline" className="border-orange-500 text-white hover:bg-orange-500/10">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg 
          className="h-6 w-6 text-white" 
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSectionUpdate;
