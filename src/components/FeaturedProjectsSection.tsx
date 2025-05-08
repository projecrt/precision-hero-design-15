import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// === ProjectCard Component ===
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  isWide?: boolean;
}

const ProjectCard = ({ title, description, imageUrl, videoUrl, isWide = false }: ProjectCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl group ${isWide ? 'md:col-span-2' : ''}`}>
      <div className="relative h-[280px] w-full overflow-hidden">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Arrow Icon */}
        

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-light-gray text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// === FeaturedProjectsSection Component ===
const FeaturedProjectsSection = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3D8BFF"
            d="M42.8,-65.2C56.6,-59.3,69.7,-50,76.8,-37.1C84,-24.1,85.1,-7.5,81.6,7.3C78,22,69.8,35,59.3,44.9C48.8,54.9,35.9,62,22.1,67.3C8.2,72.6,-6.8,76.1,-20.8,73.5C-34.9,70.9,-48,62.3,-57.3,50.6C-66.5,38.9,-71.9,24.2,-74.1,9.1C-76.4,-6,-75.5,-21.5,-68,-32.2C-60.5,-43,-46.3,-49,-33.6,-54.8C-20.8,-60.7,-9.6,-66.5,2.4,-70.2C14.4,-73.9,28.9,-71.1,42.8,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section - Centered */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Badge variant="outline" className="mb-4 text-gray-500 uppercase text-xs px-4 py-1 rounded-full">
            FEATURED PROJECTS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
            Our Work Speaks<br />
            <span className="text-highlight-yellow">Innovative Engineering</span><br />
            Unmatched Precision.
          </h2>
          <Button className="bg-cta-blue hover:bg-blue-600 text-white rounded-full px-6 py-2 flex items-center mx-auto">
            Discover All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Precision Laser Cutting"
            description="High-precision metal fabrication with advanced laser technology."
            videoUrl="/videos/laser-cutting.mp4"
            isWide={true}
          />
          <ProjectCard
            title="CNC Precision Machining"
            description="High-accuracy CNC cutting operations for metal components, ensuring consistent quality and tight dimensional tolerances."
            videoUrl="/videos/cnc-cutting.mp4"
          />
          <ProjectCard
            title="CNC Metal Bending"
            description="Precision sheet metal bending using advanced CNC press brakes — delivering consistent angles and smooth curves for industrial and custom parts."
            videoUrl="/videos/metal-bending.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
