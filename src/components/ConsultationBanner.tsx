import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ConsultationBanner = () => {
  return <section className="relative w-full overflow-hidden">
      {/* Container with sky background and rounded corners */}
      <div className="relative h-[400px] md:h-[300px] w-full bg-sky-950 rounded-xl mx-auto my-8 max-w-7xl">
        {/* Gradient Overlay - Maintain some visual interest */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-950 via-sky-900 to-sky-950 rounded-xl"></div>
        
        {/* Content Container - Centered */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-slate-950 rounded-3xl">
          <div className="p-8 md:p-12 max-w-lg flex flex-col items-center space-y-6 text-center">
            {/* Heading - 3 lines with different styling */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="text-white block mb-1">Looking For the Best</span>
                <span className="text-highlight-yellow block mb-1">Laser Cutting</span>
                <span className="text-white block">And Engineering Service ?</span>
              </h2>
            </div>
            
            {/* CTA Button - Pill shaped with arrow */}
            <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-6 py-6 text-sm font-medium">
              Get A Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ConsultationBanner;