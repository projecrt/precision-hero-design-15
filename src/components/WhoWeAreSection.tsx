import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const WhoWeAreSection = () => {
  return (
    <section className="bg-[#0A0F12] py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto px-0 sm:px-4 md:px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-10">
          {/* Left - Intro Text */}
          <div className="md:w-1/2">
            <h6 className="text-light-gray text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-4">WHO WE ARE</h6>
            <p className="text-light-gray text-sm sm:text-base italic">
              At Ayushi Enterprise, we provide expert metal cutting and bending services. With one year of dedicated service, we’re committed to precision, reliability, and fast delivery. We aim to support industries with high-quality custom fabrication solutions.
            </p>
          </div>

          {/* Right - Heading */}
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              We Specialize In Delivering<br />
              Top–Notch <span className="text-highlight-yellow">Laser Cutting</span> And<br />
              Engineering Services.
            </h2>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left - Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full max-w-md aspect-[4/3] shadow-lg">
              <img
                src="/img/whatwedo.png"
                alt="What we do"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Feature List & CTA */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="text-white mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">High-precision metal cutting and bending with modern equipment</span>
              </li>
              <li className="flex items-start">
                <Check className="text-white mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">Fabrication solutions for industrial and custom needs</span>
              </li>
              <li className="flex items-start">
                <Check className="text-white mr-3 mt-1 h-4 w-4" />
                <span className="text-light-gray text-sm">Skilled team with strong focus on quality and timely delivery</span>
              </li>
            </ul>

            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base font-medium flex items-center w-fit">
              Learn More <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
