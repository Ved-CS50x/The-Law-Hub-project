
import React from "react";

const NewsTicker = () => {
  const latestNews = [
    "Supreme Court upholds constitutional validity of Citizenship Amendment Act",
    "Delhi High Court issues new guidelines on virtual hearings",
    "Legal experts react to landmark judgment on cryptocurrency regulation",
    "Chief Justice inaugurates new e-filing system for all courts",
    "Parliamentary committee proposes changes to judicial appointment process",
  ];

  return (
    <div className="bg-legal-black py-2 text-legal-gold overflow-hidden border-y border-legal-gold">
      <div className="container mx-auto px-4 flex items-center">
        <div className="font-bold whitespace-nowrap mr-4 text-xs md:text-sm border-r border-legal-gold pr-4">BREAKING NEWS</div>
        <div className="news-ticker relative flex-1 overflow-hidden">
          <div className="animate-marquee-slow inline-block whitespace-nowrap">
            {latestNews.map((news, index) => (
              <span key={index} className="mr-12 text-xs md:text-sm">• {news}</span>
            ))}
            {latestNews.map((news, index) => (
              <span key={`duplicate-${index}`} className="mr-12 text-xs md:text-sm">• {news}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
