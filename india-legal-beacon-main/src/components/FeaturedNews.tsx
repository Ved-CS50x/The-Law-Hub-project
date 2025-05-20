
import React from "react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const FeaturedNews = () => {
  // Get the first 3 articles for featured section
  const featuredArticles = articles.slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main featured article (larger) */}
        <div className="md:col-span-7 relative h-[400px] overflow-hidden rounded-none border border-legal-black">
          <Link to={`/article/${featuredArticles[0].id}`} className="block h-full">
            <div 
              className="h-full w-full" 
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${featuredArticles[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6 text-legal-white">
                <div className="mb-2">
                  <span className="bg-legal-gold px-2 py-1 text-xs font-bold rounded-none text-legal-black">
                    {featuredArticles[0].category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold mb-2">{featuredArticles[0].title}</h2>
                <p className="mb-4 text-base opacity-90 line-clamp-2">
                  {featuredArticles[0].excerpt}
                </p>
                <div className="text-sm opacity-75 mb-2">
                  {featuredArticles[0].date} • {featuredArticles[0].author}
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Secondary featured articles (stacked) */}
        <div className="md:col-span-5 flex flex-col space-y-4">
          {featuredArticles.slice(1, 3).map((article) => (
            <Link 
              key={article.id} 
              to={`/article/${article.id}`}
              className="block relative h-[192px] overflow-hidden rounded-none border border-legal-black"
            >
              <div 
                className="h-full w-full" 
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 text-legal-white">
                  <div className="mb-1">
                    <span className="bg-legal-gold px-2 py-1 text-xs font-bold rounded-none text-legal-black">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-1">{article.title}</h3>
                  <div className="text-xs opacity-75">
                    {article.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
