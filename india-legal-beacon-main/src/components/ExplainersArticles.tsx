
import React from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const ExplainersArticles = () => {
  const explainers = [
    {
      id: 101,
      title: "Demystifying India's New Data Protection Bill",
      excerpt: "A breakdown of key provisions and how they affect individuals and businesses.",
      category: "Tech Law",
      author: "Aisha Sharma",
      date: "May 14, 2025",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 102,
      title: "How Arbitration Works: A Step-by-Step Guide",
      excerpt: "Understanding the alternative dispute resolution process from filing to resolution.",
      category: "Civil Law",
      author: "Rajiv Mehta",
      date: "May 13, 2025",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 103,
      title: "The Legal Framework of Corporate Governance in India",
      excerpt: "Examining the regulations that govern how companies are directed and controlled.",
      category: "Corporate Law",
      author: "Priya Desai",
      date: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="py-6">
      <div className="border-b-2 border-legal-black dark:border-legal-white mb-4 flex items-center">
        <BookOpen className="mr-2 text-legal-gold" size={20} />
        <h2 className="text-2xl font-serif font-bold pb-1">EXPLAINERS & ARTICLES</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {explainers.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <Link 
          to="#" 
          className="text-legal-gold dark:text-legal-gold hover:underline font-serif text-sm"
        >
          View All Explainers →
        </Link>
      </div>
    </div>
  );
};

export default ExplainersArticles;
