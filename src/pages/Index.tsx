
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import FeaturedProjectsHighlight from '@/components/FeaturedProjectsHighlight';
import ConsultationBanner from '@/components/ConsultationBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <FeaturedProjectsSection />
      <FeaturedProjectsHighlight />
      <ConsultationBanner />
    </div>
  );
};

export default Index;
