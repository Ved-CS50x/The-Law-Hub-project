
import React from "react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const NewsGrid = () => {
  // Get articles 3-7 for the news grid
  const newsArticles = articles.slice(3);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {newsArticles.map((article) => (
        <div key={article.id} className="border-b border-legal-black pb-4 hover:bg-legal-light transition-colors">
          <Link to={`/article/${article.id}`} className="block">
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover mb-3"
              />
            )}
            <div className="px-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-legal-gold">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2 font-serif">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
              <span className="text-legal-black hover:text-legal-gold font-semibold text-sm">
                Continue Reading →
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
