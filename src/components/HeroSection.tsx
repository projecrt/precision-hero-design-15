import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#0A1A20] min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left content - Main heading and CTA */}
          <div className="mb-12 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Precision Laser Cutting &
              <br />
              <span className="text-highlight-yellow">Engineering Solutions</span>
              <br />
              For Every Industry.
            </h1>
            <div className="mt-8">
              <Button 
                className="bg-white text-sky-950 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium flex items-center"
              >
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Stats panel */}
          <div className="md:w-5/12 text-right flex flex-col items-end">
            <div className="max-w-md">
              <p className="text-light-gray mb-8 text-base md:text-lg">
                We deliver precision engineering solutions with cutting-edge laser technology, 
                ensuring quality and accuracy for every project.
              </p>
              
              <div className="flex items-center justify-end">
                <div className="flex items-center justify-center bg-white rounded-full p-3 mr-6">
                  <Play className="h-5 w-5 text-sky-950" />
                </div>
                <div>
                  <span className="text-white text-4xl font-bold">64%</span>
                  <div className="text-white text-lg font-medium">Satisfying Clients</div>
                  <p className="text-sublabel-gray text-sm">Based on client feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
