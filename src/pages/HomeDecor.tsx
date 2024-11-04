import React from 'react';
import CategoryHero from '../components/CategoryHero';
import NewsletterSignup from '../components/NewsletterSignup';

const HomeDecor = () => {
  const articles = [
    {
      title: 'Modern Minimalist Design Tips',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      excerpt: 'Discover the art of minimalist design and how to create a clutter-free living space.',
    },
    {
      title: 'Color Trends for 2024',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
      excerpt: 'Explore this year\'s hottest color combinations for your home interior.',
    },
    {
      title: 'DIY Wall Art Projects',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800',
      excerpt: 'Create stunning wall art pieces with these simple DIY tutorials.',
    }
  ];

  return (
    <div>
      <CategoryHero
        title="Home Decor Ideas"
        description="Transform your space with inspiring decor ideas and expert tips"
        backgroundImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
};

export default HomeDecor;