
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, category, date, image }) => {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md h-full flex flex-col">
      {/* Date Ribbon */}
      <div className="absolute left-0 top-6 sm:top-8 bg-yellow-400 text-white py-1 sm:py-2 px-2 sm:px-3 text-xs font-bold uppercase">
        {date}
      </div>
      
      {/* Card Image with Category Badge */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-36 sm:h-48 object-cover object-center" 
        />
        <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white text-black text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
          {category}
        </span>
      </div>
      
      {/* Card Content */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-4 line-clamp-2">{description}</p>
        <a href="#" className="text-blue-500 flex items-center text-xs sm:text-sm font-medium hover:text-blue-600 mt-auto">
          Read More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
