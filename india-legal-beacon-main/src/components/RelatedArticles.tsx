
import React from "react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

interface RelatedArticlesProps {
  categoryId: number;
  currentArticleId: number;
}

const RelatedArticles = ({ categoryId, currentArticleId }: RelatedArticlesProps) => {
  const relatedArticles = articles
    .filter(article => article.categoryId === categoryId && article.id !== currentArticleId)
    .slice(0, 3);
  
  if (relatedArticles.length === 0) return null;
  
  return (
    <div className="bg-legal-light py-8">
      <div className="container mx-auto px-4">
        <div className="border-b-2 border-legal-black mb-6">
          <h2 className="text-2xl font-serif font-bold pb-2">Related Stories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <div
              key={article.id}
              className="legal-card bg-legal-white rounded-lg overflow-hidden shadow-md"
            >
              <Link to={`/article/${article.id}`}>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-legal-gold">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="text-legal-black hover:text-legal-gold font-semibold text-sm">
                    Continue Reading →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
