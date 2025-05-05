
import React from 'react';
import { Play } from 'lucide-react';

const ClientTestimonialSection = () => {
  return (
    <section className="bg-neutral-950 py-12 sm:py-16 md:py-24 relative overflow-hidden px-4">
      {/* Background line pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" 
             style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(255,255,255,0.05))" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl">
        {/* Section Label */}
        <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-gray-700 rounded-full">
          <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">CLIENT REVIEW</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          <span className="text-white block mb-1">What Our Clients Say About Amazing</span>
          <span className="text-yellow-400">Precision And Attention To Detail.</span>
        </h2>
        
        {/* Testimonial Quote */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-10">
          <div className="flex">
            <span className="text-yellow-400 text-3xl sm:text-4xl font-serif leading-none mr-2">"</span>
            <p className="text-white text-base sm:text-lg md:text-xl italic font-semibold">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil.
            </p>
          </div>
          
          {/* Client Info */}
          <div className="flex items-center mt-4 sm:mt-6">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-800 overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3">
              <h4 className="text-white font-bold text-sm sm:text-base">Mr. John Doe</h4>
              <p className="text-gray-400 text-xs uppercase tracking-wider">CLIENTS</p>
            </div>
          </div>
        </div>
        
        {/* Video Card */}
        <div className="relative mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" 
            alt="Female engineer with safety equipment" 
            className="w-full h-full object-cover object-center" 
            style={{ minHeight: "250px", maxHeight: "300px" }}
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
            <button 
              className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform transition-transform hover:scale-110"
              aria-label="Play video"
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
