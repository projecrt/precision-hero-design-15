import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px]">
      {/* Background image with fixed position and overlay */}
      <div className="absolute inset-0 bg-[url('/img/mechanical.jpg')] bg-cover bg-no-repeat bg-[center_40%]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-[500px] translate-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
          Let's Bring Your Vision To Life<br />
          With <span className="text-yellow-400">High–Precision</span><br />
          Engineering.
        </h2>

        <Button className="bg-white text-gray-900 hover:bg-white/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full ">
          Start Your Project <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
