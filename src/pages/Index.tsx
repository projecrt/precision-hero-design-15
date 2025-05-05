
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <FeaturedProjectsSection />
    </div>
  );
};

export default Index;
