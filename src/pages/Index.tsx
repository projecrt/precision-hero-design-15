
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
    </div>
  );
};

export default Index;
