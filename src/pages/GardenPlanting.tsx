import React from 'react';
import CategoryHero from '../components/CategoryHero';
import NewsletterSignup from '../components/NewsletterSignup';
import { Sun, Droplets, Wind } from 'lucide-react';

const GardenPlanting = () => {
  const guides = [
    {
      title: 'Spring Planting Guide',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      description: 'Essential tips for your spring garden planning and planting.',
    },
    {
      title: 'Herb Garden Basics',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
      description: 'Start your own herb garden with these beginner-friendly tips.',
    },
    {
      title: 'Garden Tool Essentials',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800',
      description: 'Must-have tools for every gardening enthusiast.',
    },
  ];

  return (
    <div>
      <CategoryHero
        title="Garden Planting"
        description="Create your perfect garden with expert advice"
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Sun className="h-5 w-5 mr-1" />
                      <span>Full Sun</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Droplets className="h-5 w-5 mr-1" />
                      <span>Regular Water</span>
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Read Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default GardenPlanting;