
import React from 'react';
import HeroSectionUpdate from '../components/HeroSectionUpdate';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import FeaturedProjectsHighlight from '../components/FeaturedProjectsHighlight';
import ClientTestimonialSection from '../components/ClientTestimonialSection';
import BusinessNumbersSection from '../components/BusinessNumbersSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import ConsultationBanner from '../components/ConsultationBanner';
import FinalCTA from '../components/FinalCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IndexUpdate = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSectionUpdate />
      <WhatWeDoSection />
      <WhoWeAreSection />
      <FeaturedProjectsSection />
      <FeaturedProjectsHighlight />
      <ClientTestimonialSection />
      <BusinessNumbersSection />
      <BlogSection />
      <FAQSection />
      <ConsultationBanner />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default IndexUpdate;
