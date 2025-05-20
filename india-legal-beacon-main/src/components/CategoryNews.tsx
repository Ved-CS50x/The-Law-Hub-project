
import React from "react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

interface CategoryNewsProps {
  title: string;
  category: string;
}

const CategoryNews = ({ title, category }: CategoryNewsProps) => {
  const categoryArticles = articles.filter(article => article.category === category).slice(0, 3);
  
  if (categoryArticles.length === 0) return null;
  
  return (
    <div className="py-8">
      <div className="border-b-2 border-legal-black mb-6 flex justify-between items-baseline">
        <h2 className="text-2xl md:text-3xl font-serif font-bold pb-2">{title}</h2>
        <Link to="#" className="text-legal-black hover:text-legal-gold hover:underline text-sm">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {categoryArticles.map((article) => (
          <div
            key={article.id}
            className="border-b border-gray-200 pb-6"
          >
            <Link to={`/article/${article.id}`} className="flex flex-col md:flex-row gap-4">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full md:w-1/3 h-48 md:h-32 object-cover"
                />
              )}
              <div className="md:w-2/3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-legal-gold">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                <span className="text-legal-black hover:text-legal-gold font-semibold text-sm">
                  Continue Reading →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
