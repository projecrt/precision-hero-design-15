
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isWide?: boolean;
}

const ProjectCard = ({ title, description, imageUrl, isWide = false }: ProjectCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl group ${isWide ? 'col-span-2' : 'col-span-1'}`}>
      {/* Background Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Yellow Arrow Icon in top right */}
        <div className="absolute top-4 right-4">
          <ArrowRight className="h-6 w-6 text-highlight-yellow transform -rotate-45" />
        </div>
        
        {/* Play Button Icon */}
        <div className="absolute bottom-20 left-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="bg-white rounded-full p-3 hover:scale-110 transition-transform shadow-lg">
                <Play className="h-5 w-5 text-cta-blue fill-cta-blue" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-48">
              <p className="text-sm">Watch project video</p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-light-gray text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjectsSection = () => {
  return (
    <section className="bg-[#F1F5F9] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3D8BFF" d="M42.8,-65.2C56.6,-59.3,69.7,-50,76.8,-37.1C84,-24.1,85.1,-7.5,81.6,7.3C78,22,69.8,35,59.3,44.9C48.8,54.9,35.9,62,22.1,67.3C8.2,72.6,-6.8,76.1,-20.8,73.5C-34.9,70.9,-48,62.3,-57.3,50.6C-66.5,38.9,-71.9,24.2,-74.1,9.1C-76.4,-6,-75.5,-21.5,-68,-32.2C-60.5,-43,-46.3,-49,-33.6,-54.8C-20.8,-60.7,-9.6,-66.5,2.4,-70.2C14.4,-73.9,28.9,-71.1,42.8,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Left - Section Label + Subtext */}
          <div className="md:w-1/2">
            <Badge variant="outline" className="mb-4 text-gray-500 uppercase text-xs px-4 py-1 rounded-full">
              FEATURED PROJECTS
            </Badge>
            <p className="text-gray-500 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          
          {/* Right - Heading & CTA */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight md:text-right mb-6">
              Our Work Speaks<br />
              <span className="text-highlight-yellow">Innovative Engineering</span><br />
              Unmatched Precision.
            </h2>
            <div className="flex justify-start md:justify-end">
              <Button 
                className="bg-cta-blue hover:bg-blue-600 text-white rounded-full px-6 py-2 flex items-center"
              >
                Discover All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full-width Top Project */}
          <ProjectCard 
            title="Automotive Precision Parts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
            imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            isWide={true}
          />
          
          {/* Half-width Projects */}
          <ProjectCard 
            title="Industrial Machinery Components"
            description="Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper."
            imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          />
          
          <ProjectCard 
            title="Architectural Metalworks"
            description="Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
