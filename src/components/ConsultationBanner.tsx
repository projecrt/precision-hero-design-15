
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsultationBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="relative h-[400px] md:h-[300px] w-full">
        {/* Background Image - Industrial welder with sparks */}
        <div className="absolute top-0 left-0 w-[70%] h-full">
          <img 
            src="/lovable-uploads/9d3d61ff-3d00-4d16-8b53-70f573b03f22.png" 
            alt="Industrial welder working with visible sparks" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay - Left to right (transparent to black) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-black/70 to-black"></div>
        
        {/* Content Container - Right aligned */}
        <div className="absolute top-0 right-0 h-full w-full md:w-[60%] flex items-center justify-end">
          <div className="p-8 md:p-12 max-w-lg flex flex-col items-end space-y-6">
            {/* Heading - 3 lines with different styling */}
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="text-white block mb-1">Looking For the Best</span>
                <span className="text-highlight-yellow block mb-1">Laser Cutting</span>
                <span className="text-white block">And Engineering Service ?</span>
              </h2>
            </div>
            
            {/* CTA Button - Pill shaped with arrow */}
            <Button 
              className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-6 text-sm font-medium"
            >
              Get A Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
