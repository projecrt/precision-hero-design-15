
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tool } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
  return (
    <Card className={`relative overflow-hidden rounded-3xl h-full ${
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
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <Badge className="bg-white text-black px-4 py-2 rounded-full">
              <Tool className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">Precision</span>
            </Badge>
          </div>
        </>
      ) : (
        // Solid background card with yellow icon badge
        <div className="absolute top-0 left-6">
          <div className="bg-highlight-yellow rounded-b-xl px-5 py-3">
            <Tool className="h-5 w-5 text-black" />
          </div>
        </div>
      )}
      
      <div className={`p-6 ${hasImage ? 'mt-32' : 'mt-14'} flex flex-col h-full`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className={`text-sm mb-6 ${hasImage ? 'text-light-gray' : 'text-gray-500'}`}>
          {description}
        </p>
        <div className="mt-auto">
          <a 
            href="#" 
            className={`flex items-center text-sm font-medium ${
              hasImage ? 'text-white' : 'text-cta-blue'
            } hover:underline`}
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Left - Section Label + Heading */}
          <div className="md:w-1/2">
            <Badge variant="outline" className="mb-4 text-gray-500 uppercase text-xs px-4 py-1 rounded-full">
              WHAT WE DO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Accurate<br />
              <span className="text-highlight-yellow">Laser Cutting Services</span><br />
              Tailored To Your Needs.
            </h2>
          </div>
          
          {/* Right - Subtext & CTA */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end">
            <p className="text-gray-500 mb-6 md:text-right max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button 
              className="bg-cta-blue hover:bg-blue-600 text-white rounded-full px-6 py-2 flex items-center"
            >
              Discover All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
