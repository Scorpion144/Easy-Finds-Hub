import React from 'react';
import CategoryHero from '../components/CategoryHero';
import NewsletterSignup from '../components/NewsletterSignup';
import { Star, DollarSign, Award } from 'lucide-react';

const HomeAppliances = () => {
  const appliances = [
    {
      name: 'Smart Refrigerator Pro',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800',
      rating: 4.8,
      price: '$1,299',
      description: 'Advanced cooling technology with smart features.',
    },
    {
      name: 'EcoWash Dishwasher',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
      rating: 4.6,
      price: '$899',
      description: 'Energy-efficient dishwashing with quiet operation.',
    },
    {
      name: 'SmartCook Oven',
      image: 'https://images.unsplash.com/photo-1585351650024-8e333a17aeff?w=800',
      rating: 4.9,
      price: '$1,499',
      description: 'Professional-grade cooking with smart controls.',
    },
  ];

  return (
    <div>
      <CategoryHero
        title="Home Appliances"
        description="Discover the latest in smart home technology"
        backgroundImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appliances.map((appliance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={appliance.image}
                  alt={appliance.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{appliance.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 text-gray-600">{appliance.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <DollarSign className="h-5 w-5" />
                    <span className="font-semibold">{appliance.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{appliance.description}</p>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Learn More
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

export default HomeAppliances;