
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import './HeroSection.css';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/23c0c4b8-cbdf-4a78-934a-8cebcb337cdf.png"
          alt="Laser cutting with sparks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for better text readability */}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left content - Main heading and CTA */}
          <div className="mb-12 md:mb-0 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Precision Laser Cutting &
              <br className="hidden sm:block" />
              <span className="text-highlight-yellow">Engineering Solutions</span>
              <br className="hidden sm:block" />
              For Every Industry.
            </h1>
            <div className="mt-6 md:mt-8">
              <Button 
                className="bg-white text-sky-950 hover:bg-gray-100 rounded-full px-6 sm:px-8 py-2 sm:py-6 text-base sm:text-lg font-medium flex items-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Right content - Stats panel */}
          <div className="md:w-5/12 text-right flex flex-col items-center md:items-end">
            <div className="max-w-md">
              <p className="text-light-gray mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                We deliver precision engineering solutions with cutting-edge laser technology, 
                ensuring quality and accuracy for every project.
              </p>
              
              <div className="flex items-center justify-center md:justify-end">
                <div className="flex items-center justify-center bg-white rounded-full p-2 sm:p-3 mr-4 sm:mr-6">
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 text-sky-950" />
                </div>
                <div>
                  <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">64%</span>
                  <div className="text-white text-sm sm:text-base md:text-lg font-medium">Satisfying Clients</div>
                  <p className="text-sublabel-gray text-xs sm:text-sm">Based on client feedback</p>
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
