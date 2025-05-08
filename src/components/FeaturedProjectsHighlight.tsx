import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const FeatureItem = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start space-x-2 sm:space-x-3">
      <div className="mt-1 flex-shrink-0">
        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-highlight-yellow" />
      </div>
      <div>
        <h4 className="font-bold text-white text-xs sm:text-sm">{title}</h4>
        <p className="text-[10px] sm:text-xs text-[#CBD5E1]">{description}</p>
      </div>
    </div>
  );
};

const PartnerLogo = ({
  name
}: {
  name: string;
}) => {
  return (
    <div className="text-white font-bold text-xs sm:text-sm">
      {name}
    </div>
  );
};

const FeaturedProjectsHighlight = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#0A0F12] px-4">
      <div className="container mx-auto px-3 sm:px-6 max-w-5xl">
        <div className="max-w-full sm:max-w-2xl mb-8 sm:mb-12">
          {/* Badge */}
          <Badge variant="outline" className="mb-3 sm:mb-4 text-gray-400 uppercase text-[10px] sm:text-xs tracking-wider border-[#374151] px-2 py-1 sm:px-2 sm:py-1">
            FEATURED PROJECTS
          </Badge>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
            We Give Precision<br />
            <span className="text-highlight-yellow">Efficiency And Excellence For Services.</span>
          </h2>

          {/* CTA Button */}
          <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium">
            Learn More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* Middle Grid - Overlap Applied */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 sm:mb-16">
          {/* Left Image */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden h-60 sm:h-80 w-full">
            <img
              alt="Engineers in industrial setting"
              className="w-full h-full object-cover"
              src="/lovable-uploads/29982958-a02a-46c9-86fb-fdd0b5dc6481.png"
            />
          </div>

          {/* Right Feature Grid with Overlap */}
          <div className="bg-[#1E293B] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-1/2
                lg:absolute lg:right-0 lg:bottom-12 lg:-translate-x-1/4 lg:translate-y-1/4 shadow-xl">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              <FeatureItem 
                title="3kW Laser Cutting System" 
                description="High-powered laser for fast, clean, and accurate cuts" 
              />
              <FeatureItem 
                title="5-Axis CNC Precision" 
                description="CNC-controlled machining for complex, multi-directional operations" 
              />
              <FeatureItem 
                title="1-Inch Thick Material Capacity" 
                description="Handles thick metals with consistent quality and finish" 
              />
              <FeatureItem 
                title="Automated Material Handling" 
                description="Streamlined workflow for faster, safer production" 
              />
              <FeatureItem 
                title="CAD/CAM Integrated Workflow" 
                description="Seamless design-to-production process with minimal manual setup" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsHighlight;
