
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Business Identity / Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ayushi Enterprise</h3>
            <p className="text-gray-300 text-sm mb-6">
              High-precision engineering solutions for modern manufacturing needs. 
              Quality and innovation in every project we deliver.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>aayushienterprise07@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+91 94283 04536</span>
                <span>+91 87808 79909</span>
                <span>+91 94273 13283</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-200 hover:text-white transition-colors">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Featured Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Featured Service</h3>
            <ul className="space-y-3">
              <li className="text-gray-200">Precision Laser Cutting</li>
              <li className="text-gray-200">CNC Machining</li>
              <li className="text-gray-200">Metal Fabrication</li>
              <li className="text-gray-200">Industrial Prototyping</li>
              <li className="text-gray-200">Custom Metal Works</li>
            </ul>
          </div>

          {/* Column 4 - Email Signup + Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Featured Service</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get Our Latest Update & New Offers Sales Discount
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <Input 
                type="email" 
                placeholder="Email" 
                className="rounded-full bg-white text-black" 
              />
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
              >
                Subscribe
              </Button>
            </div>
            
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-gray-500 text-xs tracking-wider uppercase">
          ALLRIGHT RESERVED – EIGHTHEME TEMPLATE KIT
        </div>
      </div>
    </footer>
  );
};

export default Footer;
