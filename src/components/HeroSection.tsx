import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import './HeroSection.css';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section h-screen opacity-0 transition-opacity duration-1000">
      {/* Background Video */}
      <div className="hero-background absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content */}
      <div className="hero-content container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          {/* Left */}
          <div className="text-white max-w-4xl md:w-3/3 ">
            <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 flex flex-col space-y-2">
              <span>Precision Laser Cutting &</span>
              <span className="text-yellow-400">Engineering Solutions</span>
              <span>For Every Industry.</span>
            </h1>

            <Button className="bg-white text-gray-900 rounded-full px-6 py-3 text-base font-semibold hover:bg-gray-200 transition">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right */}
          <div className="mt-10 md:mt-0 md:w-1/3 flex flex-col items-center md:items-end text-white">
            <p className="text-sm md:text-base max-w-xs mb-4 text-right text-gray-200">
              <span className="text-white font-medium">Precision-driven. Client-focused.</span><br />
              <span className="text-yellow-400">Every cut matters.</span>
            </p>

            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3 animate-pulse-ring">
                <Play className="text-sky-950 w-5 h-5" />
              </div>
              <div>
                <div className="text-3xl font-bold">64%</div>
                <div className="text-sm font-semibold">Satisfying Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
