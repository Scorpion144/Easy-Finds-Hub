import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Plane, Tv, Flower } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import FeaturedArticle from '../components/FeaturedArticle';

const Home = () => {
  const categories = [
    {
      title: 'Home Decor Ideas',
      description: 'Get inspired with our latest home decor ideas and DIY projects.',
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      link: '/home-decor'
    },
    {
      title: 'Travel Company Deals',
      description: 'Discover the best travel deals and tips for your next adventure.',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
      link: '/travel-deals'
    },
    {
      title: 'Latest Home Appliances',
      description: 'Stay updated with reviews and guides on the latest home appliances.',
      icon: Tv,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      link: '/home-appliances'
    },
    {
      title: 'Garden Planting',
      description: 'Turn your outdoor space into a beautiful garden with our tips and tools.',
      icon: Flower,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      link: '/garden-planting'
    }
  ];

  const featuredArticles = [
    {
      slug: 'modern-interior-design-trends',
      title: 'Modern Interior Design Trends',
      excerpt: 'Discover the latest trends in modern interior design and how to incorporate them into your home.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Home Decor',
      readTime: '8 min read'
    },
    {
      slug: 'best-travel-destinations-2024',
      title: 'Best Travel Destinations 2024',
      excerpt: 'Explore the most exciting travel destinations for your next adventure in 2024.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600',
      author: 'Michael Chen',
      date: 'March 14, 2024',
      category: 'Travel',
      readTime: '10 min read'
    },
    {
      slug: 'smart-home-technology-guide',
      title: 'Smart Home Technology Guide',
      excerpt: 'Everything you need to know about the latest smart home technology innovations.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600',
      author: 'Emily Williams',
      date: 'March 13, 2024',
      category: 'Home Appliances',
      readTime: '12 min read'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Easy Finds Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your go-to source for top-notch products and services!
            </p>
            <Link
              to="/about"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <category.icon className="h-6 w-6 text-indigo-600 mr-2" />
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <FeaturedArticle key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Easy Finds Hub</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about our mission and the team behind Easy Finds Hub. We're dedicated to bringing you the best content and recommendations across home decor, travel, appliances, and gardening.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;