
import React from "react";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import FeaturedProjectsHighlight from "../components/FeaturedProjectsHighlight";
import ConsultationBanner from "../components/ConsultationBanner";
import ClientTestimonialSection from "../components/ClientTestimonialSection";
import FAQSection from "../components/FAQSection";
import BusinessNumbersSection from "../components/BusinessNumbersSection";

const Index: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhatWeDoSection />
      <WhoWeAreSection />
      <FeaturedProjectsSection />
      <FeaturedProjectsHighlight />
      <ConsultationBanner />
      <ClientTestimonialSection />
      <FAQSection />
      <BusinessNumbersSection />
    </div>
  );
};

export default Index;
