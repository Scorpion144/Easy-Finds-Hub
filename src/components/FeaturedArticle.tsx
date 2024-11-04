import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

interface FeaturedArticleProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const FeaturedArticle = ({
  slug,
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime,
}: FeaturedArticleProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/article/${slug}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform hover:scale-105"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Link
            to={`/category/${category.toLowerCase()}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            {category}
          </Link>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
        <Link to={`/article/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-indigo-600">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <User className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;