import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/home-decor" className="hover:text-indigo-400">Home Decor</Link></li>
              <li><Link to="/travel-deals" className="hover:text-indigo-400">Travel Deals</Link></li>
              <li><Link to="/home-appliances" className="hover:text-indigo-400">Home Appliances</Link></li>
              <li><Link to="/garden-planting" className="hover:text-indigo-400">Garden Planting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-indigo-400"><Youtube size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get the latest updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} Easy Finds Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;