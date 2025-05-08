import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from '@/hooks/use-mobile';

const FAQSection = () => {
  const isMobile = useIsMobile();
  const faqs = [
    {
      id: "q1",
      question: "What types of metal fabrication services do you offer?",
      answer: "We offer complete metal fabrication solutions including cutting, bending, welding, and finishing to meet your custom requirements.",
      defaultOpen: true,
    },
    {
      id: "q2",
      question: "Can you handle custom designs for metal components?",
      answer: "Yes, we specialize in custom metal works and can fabricate parts based on your CAD drawings or specifications.",
      defaultOpen: false,
    },
    {
      id: "q3",
      question: "What’s the maximum thickness you can laser cut?",
      answer: "Our high-power laser machines can cut up to 1 inch thick mild steel, stainless steel, and aluminum with precision.",
      defaultOpen: false,
    },
    {
      id: "q4",
      question: "Do you provide CNC metal bending services?",
      answer: "Yes, we use advanced CNC press brakes to perform precise bends and angles on a variety of sheet metals.",
      defaultOpen: false,
    },
    {
      id: "q5",
      question: "How do I submit a custom fabrication request?",
      answer: "Simply contact us through our website or email with your specifications and design files. We'll respond promptly with a quote.",
      defaultOpen: false,
    },
    {
      id: "q6",
      question: "Do you offer one-off prototypes or only bulk orders?",
      answer: "We handle everything from single prototypes to high-volume production, depending on your needs.",
      defaultOpen: false,
    },
    {
      id: "q7",
      question: "What industries do you serve?",
      answer: "We serve industries including automotive, construction, manufacturing, and architectural design.",
      defaultOpen: false,
    },
    {
      id: "q8",
      question: "Can you help with design and material selection?",
      answer: "Yes, our experienced team can assist you in selecting the best materials and optimizing designs for fabrication.",
      defaultOpen: false,
    },
    {
      id: "q9",
      question: "What materials can you work with?",
      answer: "We commonly work with mild steel, stainless steel, aluminum, and galvanized sheets for custom fabrication.",
      defaultOpen: false,
    },
    {
      id: "q10",
      question: "How long does a typical order take?",
      answer: "Lead times vary by project size, but most custom orders are completed within 5–10 business days.",
      defaultOpen: false,
    },
    {
      id: "q11",
      question: "Do you offer delivery or shipping services?",
      answer: "Yes, we provide local delivery and can arrange shipping for outstation clients at additional cost.",
      defaultOpen: false,
    },
    {
      id: "q12",
      question: "Is there a minimum order quantity?",
      answer: "No, we cater to both small and large batch requirements — from single pieces to mass production.",
      defaultOpen: false,
    },
  ];
    

  const CustomAccordionItem = ({ item }) => (
    <AccordionItem value={item.id} className="mb-3 sm:mb-4 border-none">
      <AccordionTrigger
        className={`px-5 py-3 font-semibold text-sm sm:text-base rounded-full w-full flex items-center transition-all shadow-sm
        no-underline focus:no-underline hover:no-underline
        ${item.defaultOpen
          ? 'bg-[#1A2E52] text-white'
          : 'bg-[#F4F6FB] text-black hover:bg-[#eaeef6]'}`}
      >
        <div className="text-left flex-1 truncate whitespace-nowrap overflow-hidden">{item.question}</div>
        {item.defaultOpen ? (
          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white" />
        ) : (
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-black" />
        )}
      </AccordionTrigger>

      <AccordionContent className="px-5 pt-3 pb-4 text-sm sm:text-base text-gray-600 bg-transparent">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center px-4 py-1 border rounded-full">
            <span className="text-xs font-medium tracking-wider uppercase">
              Usually Asked
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A]">
            Discover Our <span className="text-[#1A1A1A]">Usually</span><br />
            <span className="text-[#FCD34D]">Asked Question From Clients.</span>
          </h2>
        </div>

        {/* FAQ Grid */}
        {isMobile ? (
          <Accordion
            type="single"
            defaultValue={faqs[0].id}
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq) => (
              <CustomAccordionItem key={faq.id} item={faq} />
            ))}
          </Accordion>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[0, 1, 2].map((colIndex) => {
              const itemsPerCol = Math.ceil(faqs.length / 3);
              const start = colIndex * itemsPerCol;
              const end = start + itemsPerCol;
              const faqsForColumn = faqs.slice(start, end);

              return (
                <div key={colIndex} className="space-y-4 sm:space-y-5">
                  <Accordion
                    type="single"
                    defaultValue={faqsForColumn.find(f => f.defaultOpen)?.id}
                    collapsible
                  >
                    {faqsForColumn.map((faq) => (
                      <CustomAccordionItem key={faq.id} item={faq} />
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
