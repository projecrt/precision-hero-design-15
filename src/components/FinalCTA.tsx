
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      </div>
      
      {/* Content container */}
      <div className="relative container mx-auto py-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Let's Bring Your Vision To Life<br />
          With <span className="text-yellow-400">High–Precision</span><br />
          Engineering.
        </h2>
        
        <Button 
          className="bg-white text-gray-900 hover:bg-white/90 text-base px-8 py-6 h-auto"
        >
          Start Your Project <ArrowRight className="ml-1" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
