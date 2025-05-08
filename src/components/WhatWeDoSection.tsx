import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const ServiceCard = ({
  title,
  description,
  hasImage = false,
  imageUrl = '',
  iconType = 'laser',
  index = 0
}: {
  title: string;
  description: string;
  hasImage?: boolean;
  imageUrl?: string;
  iconType?: 'laser' | 'cnc' | 'fabrication';
  index?: number;
}) => {
  const isMobile = useIsMobile();
  const [showDescription, setShowDescription] = useState(false);

  const iconMap: Record<string, string> = {
    laser: '/svg/svg2.svg',
    cnc: '/svg/laser.svg',
    fabrication: '/svg/svg3.svg',
  };

  const iconSrc = iconMap[iconType] || iconMap['laser'];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showDescription) {
      timeout = setTimeout(() => {
        setShowDescription(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showDescription]);

  const showOverlay = index !== 0;

  return (
    <Card
      className={`group relative overflow-hidden rounded-xl sm:rounded-3xl h-full transition-transform duration-300 ${hasImage ? 'text-white' : 'bg-[#F1F5F9] text-black'
        }`}
    >
      {hasImage && (
        <>
          {/* Image */}
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover absolute inset-0 z-0 transition-transform duration-500 ${showOverlay ? 'scale-100 group-hover:scale-105' : ''
              }`}
          />

          {/* White overlay fades out on hover */}
          {showOverlay && (
            <div className="absolute inset-0 bg-white z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
          )}

          {/* Gradient overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-20" />
        </>
      )}

      {/* Icon */}
      <div
        className={`absolute top-0 left-4 sm:left-6 z-30 bg-white rounded-bl-[999px] rounded-br-[999px] px-5 py-6 shadow-md ${index !== 0 ? 'transition-colors duration-300 group-hover:bg-yellow-400' : ''
          }`}
      >
        <img
          src={iconSrc}
          alt={`${iconType} icon`}
          className={`w-10 h-10 transition duration-300 ${index !== 0 ? 'group-hover:opacity-80' : ''
            }`}
        />

      </div>

      <div
        className={`relative z-30 p-4 sm:p-6 ${hasImage ? 'mt-24 sm:mt-32' : 'mt-10 sm:mt-14'
          } flex flex-col h-full`}
      >
        <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>

        {showDescription ? (
          <p className="text-xs sm:text-sm mb-4 sm:mb-6 font-semibold text-white drop-shadow-lg">
            {description}
          </p>
        ) : (
          <Button
            variant="ghost"
            className="group/button relative text-xs sm:text-sm font-medium text-white px-0 py-2 mt-2 w-fit z-10 mb-4 sm:mb-6 transition-all duration-300 bg-transparent hover:bg-transparent hover:text-yellow-400 hover:translate-y-[-2px]"
            onClick={() => setShowDescription(true)}
          >
            <span className="flex items-center gap-1">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </span>
          </Button>
        )}

        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center text-xs sm:text-sm font-medium text-white hover:text-yellow-400 transition-all"
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
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto px-0 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 sm:mb-12 md:mb-16 gap-6 sm:gap-8">
          <div className="md:w-1/2">
            <Badge
              variant="outline"
              className="mb-3 sm:mb-4 text-gray-500 uppercase text-[10px] sm:text-xs px-2 sm:px-4 py-0.5 sm:py-1 rounded-full"
            >
              WHAT WE DO
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              Accurate
              <br />
              <span className="text-highlight-yellow">Laser Cutting Services</span>
              <br />
              Tailored To Your Needs.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ServiceCard
            hasImage={true}
            imageUrl="/img/Fiber Laser Cutting.png"
            title="Laser Cutting Service"
            description="Precision fiber-laser cutting for steel, stainless steel, and aluminum with burr-free edges, ±0.1 mm tolerance, and rapid turnaround."
            iconType="laser"
            index={0}
          />
          <ServiceCard
            hasImage={true}
            imageUrl="/img/CNC.jpg"
            title="CNC Machining Service"
            description="High-precision CNC milling and turning for aluminum, steel, and plastics with burr-free finishes, ±0.02 mm tolerance, and fast turnaround for prototypes or production runs."
            iconType="cnc"
            index={1}
          />
          <ServiceCard
            hasImage={true}
            imageUrl="/img/Fabrication.jpg"
            title="Custom Metal Fabrication"
            description="Expert custom metal fabrication services including TIG/MIG welding, CNC bending, laser cutting, and assembly for steel, stainless steel, and aluminum with precise tolerances, quality finishes, and scalable production timelines."
            iconType="fabrication"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
