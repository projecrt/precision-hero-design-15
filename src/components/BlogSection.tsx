
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import BlogCard from './BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Precision Laser Cutting: Advanced Techniques for Modern Manufacturing',
    description: "Exploring the latest advancements in laser cutting technology and how they're revolutionizing manufacturing processes across industries.",
    category: 'ENGINEERING',
    date: '16 FEB',
    image: '/lovable-uploads/29982958-a02a-46c9-86fb-fdd0b5dc6481.png' // Using one of the existing uploaded images
  },
  {
    id: 2,
    title: 'The Future of Metal Fabrication: Trends to Watch in 2025',
    description: 'Discover emerging trends in metal fabrication that are setting new standards for precision, efficiency, and sustainability in industrial projects.',
    category: 'TECHNOLOGY',
    date: '28 MAR',
    image: '/lovable-uploads/9d3d61ff-3d00-4d16-8b53-70f573b03f22.png' // Using one of the existing uploaded images
  },
  {
    id: 3,
    title: 'Quality Control in High-Precision Engineering Projects',
    description: 'Learn how rigorous quality control processes ensure consistent excellence in high-precision engineering and manufacturing operations.',
    category: 'QUALITY',
    date: '04 APR',
    image: '/lovable-uploads/29982958-a02a-46c9-86fb-fdd0b5dc6481.png' // Reusing an image for the third card
  }
];

const BlogSection = () => {
  return (
    <section className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <span className="inline-block bg-white text-gray-500 text-xs uppercase tracking-wider py-1 px-3 rounded-full border border-gray-200 mb-3">
              OUR BLOG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Discover Our Latest <br />
              <span className="text-yellow-400">High–Precision</span> <br />
              And Updates
            </h2>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
            See All Blog <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <BlogCard 
              key={post.id} 
              title={post.title}
              description={post.description}
              category={post.category}
              date={post.date}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
