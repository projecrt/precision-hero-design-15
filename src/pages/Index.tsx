
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import FeaturedProjectsHighlight from '../components/FeaturedProjectsHighlight';
import BusinessNumbersSection from '../components/BusinessNumbersSection';
import ClientTestimonialSection from '../components/ClientTestimonialSection';
import FAQSection from '../components/FAQSection';
import ConsultationBanner from '../components/ConsultationBanner';
import BlogSection from '../components/BlogSection';
import FinalCTA from '../components/FinalCTA';

function Index() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <FeaturedProjectsSection />
      <FeaturedProjectsHighlight />
      <BusinessNumbersSection />
      <ClientTestimonialSection />
      <FAQSection />
      <ConsultationBanner />
      <BlogSection />
      <FinalCTA />
    </>
  );
}

export default Index;
