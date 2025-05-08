import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Their precision in metal cutting blew us away. The results exceeded our expectations.",
    name: "keyur Shah",
    role: "Manufacturing Partner",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Exceptional quality and attention to detail. Will definitely work with them again.",
    name: "Priya Mehta",
    role: "Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Reliable, fast, and accurate. Their team understands industrial needs perfectly.",
    name: "Rahul Desai",
    role: "Vendor",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const ClientTestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade-in next
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="bg-[#0A0F12] py-12 sm:py-16 md:py-24 relative overflow-hidden px-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-4xl text-center">
        {/* Section Label */}
        <div className="inline-flex items-center px-4 py-1 mb-4 border border-gray-300 rounded-full">
          <span className="text-gray-600 text-xs font-medium tracking-wider uppercase">Client Review</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-8">
          What Our Clients Say About<br />
          <span className="text-yellow-500">Precision And Service Quality</span>
        </h2>

        {/* Testimonial Card with Fade Animation */}
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          } rounded-xl px-6 py-8 max-w-2xl mx-auto`}
        >
          <p className="text-white text-base sm:text-lg md:text-xl italic font-medium mb-6 relative">
            <span className="text-yellow-500 text-3xl font-serif mr-2">“</span>
            {testimonial.quote}
          </p>
          <div className="flex justify-center items-center gap-4 ">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover border border-yellow-400"
            />
            <div className="text-left">
              <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
              <p className="text-white text-xs uppercase tracking-wider">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
