
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type MetricProps = {
  number: string;
  label: string;
  description: string;
};

const MetricBlock: React.FC<MetricProps> = ({ number, label, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-yellow-400 text-4xl font-bold">{number}</div>
      <div className="text-white font-medium text-base mt-2">{label}</div>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );
};

const BusinessNumbersSection: React.FC = () => {
  const metrics: MetricProps[] = [
    {
      number: "10Y +",
      label: "Years Of Experience",
      description: "Curabitur nibh cum sed nisl donec porta.",
    },
    {
      number: "5,457 +",
      label: "Projects Done",
      description: "Curabitur nibh cum sed nisl donec porta.",
    },
    {
      number: "248 +",
      label: "Satisfied Clients",
      description: "Curabitur nibh cum sed nisl donec porta.",
    },
    {
      number: "98% +",
      label: "Customer Satisfaction Rate",
      description: "Curabitur nibh cum sed nisl donec porta.",
    },
  ];

  return (
    <section className="bg-[#0A0F12] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <Badge
            variant="outline"
            className="border-gray-700 text-gray-400 text-xs font-medium tracking-wider uppercase px-4 py-1.5 mb-4"
          >
            BUSINESS NUMBER
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">
            Our Engineering Industry And <br />
            <span>
              <span className="text-yellow-400">Business Impact</span> In Numbers.
            </span>
          </h2>
          
          <Separator className="bg-gray-800 my-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricBlock
              key={index}
              number={metric.number}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessNumbersSection;
