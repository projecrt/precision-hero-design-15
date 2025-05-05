
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const ServiceCard = ({ 
  title, 
  description, 
  hasImage = false, 
  imageUrl = '', 
  iconType = 'laser' 
}: { 
  title: string; 
  description: string; 
  hasImage?: boolean;
  imageUrl?: string;
  iconType?: 'laser' | 'cnc' | 'fabrication';
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className={`relative overflow-hidden rounded-xl sm:rounded-3xl h-full ${
      hasImage ? 'text-white' : 'bg-[#F1F5F9] text-black'
    }`}>
      {hasImage ? (
        // Image background card
        <>
          <div className="absolute inset-0">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-white text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs">
              <Wrench className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="font-medium">Precision</span>
            </Badge>
          </div>
        </>
      ) : (
        // Solid background card with yellow icon badge
        <div className="absolute top-0 left-4 sm:left-6">
          <div className="bg-highlight-yellow rounded-b-lg sm:rounded-b-xl px-3 sm:px-5 py-2 sm:py-3">
            <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
          </div>
        </div>
      )}
      
      <div className={`p-4 sm:p-6 ${hasImage ? 'mt-24 sm:mt-32' : 'mt-10 sm:mt-14'} flex flex-col h-full`}>
        <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
        <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${hasImage ? 'text-light-gray' : 'text-gray-500'}`}>
          {description}
        </p>
        <div className="mt-auto">
          <a 
            href="#" 
            className={`flex items-center text-xs sm:text-sm font-medium ${
              hasImage ? 'text-white' : 'text-cta-blue'
            } hover:underline`}
          >
            Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
};

const WhatWeDoSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto px-0 sm:px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-12 md:mb-16 gap-6 sm:gap-8">
          {/* Left - Section Label + Heading */}
          <div className="md:w-1/2">
            <Badge variant="outline" className="mb-3 sm:mb-4 text-gray-500 uppercase text-[10px] sm:text-xs px-2 sm:px-4 py-0.5 sm:py-1 rounded-full">
              WHAT WE DO
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              Accurate<br />
              <span className="text-highlight-yellow">Laser Cutting Services</span><br />
              Tailored To Your Needs.
            </h2>
          </div>
          
          {/* Right - Subtext & CTA */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end">
            <p className="text-gray-500 mb-4 sm:mb-6 text-sm md:text-right max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button 
              className="bg-cta-blue hover:bg-blue-600 text-white rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm flex items-center"
            >
              Discover All <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
        
        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ServiceCard 
            hasImage={true}
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            title="Laser Cutting Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
          />
          
          <ServiceCard 
            title="CNC Machining Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            iconType="cnc"
          />
          
          <ServiceCard 
            title="Custom Metal Fabrication"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            iconType="fabrication"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
