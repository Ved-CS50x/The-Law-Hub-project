
import React from "react";

const LatestNews = () => {
  const latestNews = [
    {
      id: 1,
      title: "Collegium Recommends New Judges for Supreme Court",
      category: "Judiciary",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      excerpt:
        "The Supreme Court Collegium has recommended three High Court judges for elevation to the Supreme Court."
    },
    {
      id: 2,
      title: "New Guidelines for Virtual Court Proceedings Announced",
      category: "Court Procedure",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      excerpt:
        "The E-Committee of the Supreme Court has issued comprehensive guidelines for virtual court proceedings across all courts."
    },
    {
      id: 3,
      title: "Bar Council Revises Regulatory Framework for Law Firms",
      category: "Legal Profession",
      date: "May 7, 2025",
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      excerpt:
        "The Bar Council of India has revised the regulatory framework for law firms operating in the country."
    },
    {
      id: 4,
      title: "Parliament Passes Criminal Procedure Amendment Bill",
      category: "Legislation",
      date: "May 7, 2025",
      image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      excerpt:
        "Parliament has passed the Criminal Procedure (Amendment) Bill with several key changes to expedite trials."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-2xl font-serif font-bold">Latest Legal News</h2>
        <a href="#" className="text-legal-black hover:text-legal-gold hover:underline">
          View All
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestNews.map((news) => (
          <div key={news.id} className="legal-card bg-legal-white rounded-lg overflow-hidden shadow-md">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-legal-gold">
                  {news.category}
                </span>
                <span className="text-xs text-gray-500">{news.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
              <a
                href="#"
                className="text-legal-black hover:text-legal-gold font-semibold text-sm"
              >
                Continue Reading →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
