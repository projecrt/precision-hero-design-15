
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const WhoWeAreSection = () => {
  return (
    <section className="bg-[#0A0F12] py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto px-0 sm:px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Left Text Block - Section Intro */}
          <div className="md:w-1/2">
            <h6 className="text-light-gray text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-4">WHO WE ARE</h6>
            <p className="text-light-gray text-sm sm:text-base italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          
          {/* Right Text Block - Heading Title */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              We Specialize In Delivering<br />
              Top–Notch <span className="text-highlight-yellow">Laser Cutting</span> And<br />
              Engineering Services.
            </h2>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left Column - Image Box */}
          <div className="md:w-1/2">
            <div className="rounded-xl sm:rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Worker with industrial machinery" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Content + CTA */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <span className="text-[#1E3A8A] text-xl sm:text-2xl">*</span>
            </div>
            <p className="text-light-gray text-sm mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-start">
                <Check className="text-white mr-2 sm:mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">Precise cutting for all materials with advanced technology</span>
              </li>
              <li className="flex items-start">
                <Check className="text-white mr-2 sm:mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">Custom engineering solutions for every industry need</span>
              </li>
              <li className="flex items-start">
                <Check className="text-white mr-2 sm:mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">Expert team with years of technical experience</span>
              </li>
            </ul>
            <Button 
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium flex items-center w-fit"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
