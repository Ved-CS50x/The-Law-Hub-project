
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Constitutional Law",
      count: 124,
      icon: "⚖️",
    },
    {
      id: 2,
      title: "Criminal Law",
      count: 98,
      icon: "🔒",
    },
    {
      id: 3,
      title: "Civil Law",
      count: 87,
      icon: "📝",
    },
    {
      id: 4,
      title: "Corporate Law",
      count: 76,
      icon: "🏢",
    },
    {
      id: 5,
      title: "Taxation",
      count: 65,
      icon: "💰",
    },
    {
      id: 6,
      title: "Environmental Law",
      count: 42,
      icon: "🌳",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-2xl font-serif font-bold">Browse by Category</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            to="#"
            key={category.id}
            className="legal-card bg-legal-white p-4 rounded-lg text-center shadow-sm hover:border-legal-gold hover:border transition-all"
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-semibold mb-1">{category.title}</h3>
            <p className="text-sm text-gray-500">{category.count} articles</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
