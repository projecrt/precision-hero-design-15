
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1 flex-shrink-0">
        <Check className="h-5 w-5 text-highlight-yellow" />
      </div>
      <div>
        <h4 className="font-bold text-white text-base">{title}</h4>
        <p className="text-sm text-[#CBD5E1]">{description}</p>
      </div>
    </div>
  );
};

const PartnerLogo = ({ name }: { name: string }) => {
  return (
    <div className="text-white font-bold">
      {name}
    </div>
  );
};

const FeaturedProjectsHighlight = () => {
  return (
    <section className="bg-[#0A0F12] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M42.8,-65.2C56.6,-59.3,69.7,-50,76.8,-37.1C84,-24.1,85.1,-7.5,81.6,7.3C78,22,69.8,35,59.3,44.9C48.8,54.9,35.9,62,22.1,67.3C8.2,72.6,-6.8,76.1,-20.8,73.5C-34.9,70.9,-48,62.3,-57.3,50.6C-66.5,38.9,-71.9,24.2,-74.1,9.1C-76.4,-6,-75.5,-21.5,-68,-32.2C-60.5,-43,-46.3,-49,-33.6,-54.8C-20.8,-60.7,-9.6,-66.5,2.4,-70.2C14.4,-73.9,28.9,-71.1,42.8,-65.2Z" 
            fill="none" 
            stroke="white" 
            strokeWidth="1"
            transform="translate(100 400) scale(2)" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          {/* Badge */}
          <Badge variant="outline" className="mb-4 text-gray-400 uppercase text-xs tracking-wider border-[#374151] px-3 py-1">
            FEATURED PROJECTS
          </Badge>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            We Give Precision<br />
            <span className="text-highlight-yellow">Efficiency And Excellence For Services.</span>
          </h2>
          
          {/* CTA Button */}
          <Button 
            className="bg-white hover:bg-gray-100 text-black rounded-full px-6"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        {/* Middle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {/* Left Image */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9d2b12bbc75c" 
              alt="Engineers in industrial setting"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Feature Grid */}
          <div className="lg:col-span-2 bg-[#1E293B] rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureItem 
                title="Industry-Leading Accuracy" 
                description="Precision engineering with tight tolerances" 
              />
              <FeatureItem 
                title="Fast Turnaround Time" 
                description="Efficient production with quick delivery" 
              />
              <FeatureItem 
                title="Custom Solutions" 
                description="Tailored manufacturing to your needs" 
              />
              <FeatureItem 
                title="Eco-Friendly Processes" 
                description="Sustainable production methods" 
              />
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          <PartnerLogo name="IPSUM" />
          <PartnerLogo name="Logoipsum Brand Standard" />
          <PartnerLogo name="LOGO" />
          <PartnerLogo name="LUMY" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsHighlight;
