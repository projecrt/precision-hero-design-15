import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import FeaturedProjectsHighlight from '../components/FeaturedProjectsHighlight';
import BusinessNumbersSection from '../components/BusinessNumbersSection';
import ClientTestimonialSection from '../components/ClientTestimonialSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <FeaturedProjectsSection />
      <FeaturedProjectsHighlight />
      <BusinessNumbersSection />
      <ClientTestimonialSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

export default Index;
