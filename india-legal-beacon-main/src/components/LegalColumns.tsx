
import React from "react";

const LegalColumns = () => {
  const columns = [
    {
      id: 1,
      title: "The Evolution of Digital Rights in India's Legal Framework",
      author: "Adv. Rajesh Kumar",
      authorTitle: "Senior Advocate, Supreme Court",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      date: "May 8, 2025",
      excerpt: "An analysis of how digital rights have evolved in India's legal framework over the past decade and the challenges that lie ahead.",
    },
    {
      id: 2,
      title: "Environmental Justice: The Path Forward for India",
      author: "Dr. Amrita Singh",
      authorTitle: "Environmental Law Professor, NLU Delhi",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      date: "May 7, 2025",
      excerpt: "Examining recent environmental law judgments and their implications for India's sustainable development goals.",
    },
    {
      id: 3,
      title: "The Constitutionality of Executive Orders in Modern Governance",
      author: "Prof. Vikram Mehta",
      authorTitle: "Constitutional Law Expert",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      date: "May 6, 2025",
      excerpt: "A critical examination of the increasing use of executive orders and their impact on constitutional principles.",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-2xl font-serif font-bold">Legal Opinions & Columns</h2>
        <a href="#" className="text-legal-black hover:text-legal-gold hover:underline">
          View All Columns
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div
            key={column.id}
            className="legal-card bg-legal-white rounded-lg overflow-hidden shadow-md p-5"
          >
            <div className="flex items-center mb-4">
              <img
                src={column.avatar}
                alt={column.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{column.author}</h4>
                <p className="text-xs text-gray-500">{column.authorTitle}</p>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3">{column.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {column.excerpt}
            </p>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">{column.date}</span>
              <a
                href="#"
                className="text-legal-black hover:text-legal-gold font-semibold text-sm"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalColumns;
