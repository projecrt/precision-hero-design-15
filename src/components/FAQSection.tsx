
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  // FAQ data structure with questions and answers
  const faqsColumn1 = [
    {
      id: "col1-q1",
      question: "How does your design process work?",
      answer: "Our design process involves understanding your requirements, creating initial concepts, refining based on feedback, and delivering final designs with ongoing support.",
      defaultOpen: true,
    },
    {
      id: "col1-q2",
      question: "What types of projects do you work on?",
      answer: "We work on a wide range of projects including web design, mobile applications, branding, and digital marketing campaigns tailored to your business needs.",
      defaultOpen: false,
    },
    {
      id: "col1-q3",
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, we offer ongoing maintenance packages to ensure your digital assets remain up-to-date, secure and performing optimally.",
      defaultOpen: false,
    },
  ];

  const faqsColumn2 = [
    {
      id: "col2-q1",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple websites might take 2-4 weeks, while more complex applications can take 2-3 months or more.",
      defaultOpen: true,
    },
    {
      id: "col2-q2",
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after an initial consultation.",
      defaultOpen: false,
    },
    {
      id: "col2-q3",
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients globally and have experience managing projects across different time zones and cultural contexts.",
      defaultOpen: false,
    },
  ];

  const faqsColumn3 = [
    {
      id: "col3-q1",
      question: "What makes your approach different?",
      answer: "Our approach combines innovative design thinking with technical expertise and a deep understanding of user experience to create solutions that truly stand out.",
      defaultOpen: true,
    },
    {
      id: "col3-q2",
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in integrating new designs and functionalities with your existing systems and processes for seamless operations.",
      defaultOpen: false,
    },
    {
      id: "col3-q3",
      question: "How do you handle revisions and feedback?",
      answer: "We have a structured feedback process with dedicated revision rounds to ensure your input is incorporated effectively throughout the project.",
      defaultOpen: false,
    },
  ];

  // Custom AccordionItem component - fixed to not use render props incorrectly
  const CustomAccordionItem = ({ item }) => {
    return (
      <AccordionItem value={item.id} className="mb-6 border-none">
        <AccordionTrigger
          className={`px-6 py-4 hover:no-underline hover:text-opacity-80 font-medium text-base rounded-2xl w-full h-16 flex items-center ${
            item.defaultOpen
              ? "bg-blue-900 text-white"
              : "bg-slate-100 text-gray-900"
          }`}
        >
          <div className="text-left flex-1">{item.question}</div>
          {item.defaultOpen ? (
            <ChevronUp className="h-5 w-5 shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
          )}
        </AccordionTrigger>
        <AccordionContent className={`px-6 pb-4 pt-0 text-gray-500 text-sm ${
          item.defaultOpen ? "bg-blue-900 rounded-b-2xl" : ""
        }`}>
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center px-4 py-1.5 border border-gray-200 rounded-full">
            <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">
              USUALLY ASKED
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="block mb-1">Discover Our Usually</span>
            <span className="text-yellow-400">Asked Question From Clients.</span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <Accordion
              type="single"
              defaultValue={faqsColumn1.find(item => item.defaultOpen)?.id}
              collapsible
              className="space-y-6"
            >
              {faqsColumn1.map((faq) => (
                <CustomAccordionItem key={faq.id} item={faq} />
              ))}
            </Accordion>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <Accordion
              type="single"
              defaultValue={faqsColumn2.find(item => item.defaultOpen)?.id}
              collapsible
              className="space-y-6"
            >
              {faqsColumn2.map((faq) => (
                <CustomAccordionItem key={faq.id} item={faq} />
              ))}
            </Accordion>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <Accordion
              type="single"
              defaultValue={faqsColumn3.find(item => item.defaultOpen)?.id}
              collapsible
              className="space-y-6"
            >
              {faqsColumn3.map((faq) => (
                <CustomAccordionItem key={faq.id} item={faq} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
