import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="bg-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="mb-6">
            Get the latest updates and exclusive content delivered to your inbox!
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 px-6 py-2 rounded-r-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;