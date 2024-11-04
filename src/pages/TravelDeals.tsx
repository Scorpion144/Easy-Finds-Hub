import React from 'react';
import CategoryHero from '../components/CategoryHero';
import NewsletterSignup from '../components/NewsletterSignup';
import { MapPin, Calendar, Tag } from 'lucide-react';

const TravelDeals = () => {
  const deals = [
    {
      destination: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      price: '$899',
      duration: '7 days',
      description: 'Experience the magic of Bali with this all-inclusive package.',
    },
    {
      destination: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
      price: '$1299',
      duration: '5 days',
      description: 'Explore the stunning white-washed buildings and crystal-clear waters.',
    },
    {
      destination: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
      price: '$1499',
      duration: '6 days',
      description: 'Adventure awaits in the majestic Swiss Alps.',
    },
  ];

  return (
    <div>
      <CategoryHero
        title="Travel Deals"
        description="Discover amazing travel packages and destinations"
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full">
                    {deal.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{deal.destination}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {deal.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Flight Included
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    View Deal
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

export default TravelDeals;