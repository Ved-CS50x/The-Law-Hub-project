
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const KnowYourRights = () => {
  const rightsTopics = [
    {
      id: 1,
      title: "Employee Rights in the Workplace",
      description: "Understanding labor laws and protections.",
      icon: "👷‍♂️"
    },
    {
      id: 2,
      title: "Rights During Police Encounters",
      description: "What to know about searches and detention.",
      icon: "🚔"
    },
    {
      id: 3,
      title: "Consumer Protection Laws",
      description: "Your rights with products and services.",
      icon: "🛒"
    },
    {
      id: 4,
      title: "Rental and Housing Rights",
      description: "Tenant protections and rental agreements.",
      icon: "🏠"
    }
  ];

  return (
    <div className="py-6">
      <div className="border-b-2 border-legal-black dark:border-legal-white mb-4 flex items-center">
        <BookOpen className="mr-2 text-legal-gold" size={20} />
        <h2 className="text-xl font-serif font-bold pb-1">KNOW YOUR RIGHTS</h2>
      </div>
      
      <div className="space-y-4">
        {rightsTopics.map((topic) => (
          <Link 
            to="#" 
            key={topic.id}
            className="border border-gray-300 dark:border-gray-700 p-3 block hover:border-legal-gold transition-colors group"
          >
            <div className="flex items-start">
              <div className="text-xl mr-3">{topic.icon}</div>
              <div>
                <h3 className="font-serif font-bold mb-1 group-hover:text-legal-gold transition-colors text-sm">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <Link 
          to="#" 
          className="text-legal-gold dark:text-legal-gold hover:underline font-serif text-sm"
        >
          View All Rights Guides →
        </Link>
      </div>
    </div>
  );
};

export default KnowYourRights;
