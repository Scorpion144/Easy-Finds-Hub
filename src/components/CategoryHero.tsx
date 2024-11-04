import React from 'react';

interface CategoryHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const CategoryHero = ({ title, description, backgroundImage }: CategoryHeroProps) => {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;