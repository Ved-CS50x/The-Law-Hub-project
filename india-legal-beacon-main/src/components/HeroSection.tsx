
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredNews = [
    {
      id: 1,
      title: "Supreme Court Strikes Down Section 66A of IT Act as Unconstitutional",
      category: "Constitutional Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "In a landmark judgment, the Supreme Court today struck down Section 66A of the Information Technology Act, declaring it unconstitutional and a violation of free speech.",
    },
    {
      id: 2,
      title: "High Court Mandates Environmental Impact Assessment for Urban Development Projects",
      category: "Environmental Law",
      image: "https://images.unsplash.com/photo-1464268533545-3e77f0d64a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "The High Court has ruled that all urban development projects must undergo a comprehensive environmental impact assessment before approval.",
    },
    {
      id: 3,
      title: "New Digital Personal Data Protection Bill Passed by Parliament",
      category: "Technology Law",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Parliament has passed the Digital Personal Data Protection Bill, introducing strict regulations on handling of personal data by companies and government agencies.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === featuredNews.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredNews.length]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        {featuredNews.map((news, index) => (
          <div
            key={news.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${news.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2">
                <span className="bg-legal-gold px-2 py-1 text-xs font-bold rounded-sm text-legal-black">
                  {news.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{news.title}</h2>
              <p className="mb-4 text-base md:text-lg opacity-90 line-clamp-2 md:line-clamp-3">
                {news.excerpt}
              </p>
              <button className="bg-legal-gold hover:bg-legal-gold/80 text-legal-black px-4 py-2 rounded transition">
                Read Full Story
              </button>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 right-4 flex space-x-2">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-legal-gold" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
