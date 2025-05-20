
import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, BookOpen, Search } from "lucide-react";

const LegalSidebar = () => {
  // Legal glossary preview terms
  const glossaryTerms = [
    { term: "Habeas Corpus", definition: "A writ requiring a person to be brought before a judge or court." },
    { term: "Prima Facie", definition: "A fact presumed to be true unless contradicted by evidence." },
    { term: "Suo Motu", definition: "An action taken by a court of its own accord without any request by the parties." },
    { term: "Amicus Curiae", definition: "A friend of the court; someone who offers information to assist a court." },
  ];

  // Trending topics
  const trendingTopics = [
    "Digital Privacy Law",
    "Environmental Litigation",
    "Arbitration Reforms",
    "Corporate Governance",
    "Property Rights"
  ];

  // Legal tips
  const legalTips = [
    "Always read contracts thoroughly before signing",
    "Keep records of all legal correspondence",
    "Know the limitation period for filing your case",
    "Consider alternative dispute resolution before litigation",
    "Consult a lawyer early in legal matters"
  ];

  return (
    <aside className="space-y-8">
      {/* Trending Legal Topics */}
      <div className="border border-gray-300 dark:border-gray-700 p-4">
        <div className="border-b border-legal-black dark:border-legal-white mb-4 flex items-center">
          <TrendingUp className="mr-2 text-legal-gold" size={16} />
          <h3 className="font-serif font-bold pb-1">TRENDING TOPICS</h3>
        </div>
        <ul className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <li key={index}>
              <Link 
                to="#" 
                className="text-sm hover:text-legal-gold transition-colors flex items-center"
              >
                <span className="text-legal-gold mr-2">#{index + 1}</span> {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal Glossary */}
      <div className="border border-gray-300 dark:border-gray-700 p-4">
        <div className="border-b border-legal-black dark:border-legal-white mb-4 flex items-center">
          <BookOpen className="mr-2 text-legal-gold" size={16} />
          <h3 className="font-serif font-bold pb-1">LEGAL GLOSSARY</h3>
        </div>
        <dl className="space-y-3">
          {glossaryTerms.map((item, index) => (
            <div key={index}>
              <dt className="font-serif font-bold text-sm">{item.term}</dt>
              <dd className="text-xs text-gray-600 dark:text-gray-400">{item.definition}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 text-center">
          <Link 
            to="/legal-dictionary" 
            className="text-xs text-legal-gold dark:text-legal-gold hover:underline"
          >
            View Full Legal Dictionary
          </Link>
        </div>
      </div>

      {/* Legal Tips */}
      <div className="border border-gray-300 dark:border-gray-700 p-4">
        <div className="border-b border-legal-black dark:border-legal-white mb-4 flex items-center">
          <Search className="mr-2 text-legal-gold" size={16} />
          <h3 className="font-serif font-bold pb-1">LEGAL TIPS</h3>
        </div>
        <ul className="space-y-2 list-disc pl-5">
          {legalTips.map((tip, index) => (
            <li key={index} className="text-xs text-gray-600 dark:text-gray-400">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Legal Quiz Banner */}
      <div className="bg-legal-gold p-4 text-legal-black">
        <h4 className="font-serif font-bold mb-2">TEST YOUR LEGAL KNOWLEDGE</h4>
        <p className="text-xs mb-3">Take our weekly quiz and challenge your understanding of Indian law.</p>
        <button className="bg-legal-black text-white text-xs py-1 px-3 hover:bg-legal-dark transition-colors">
          Start Quiz
        </button>
      </div>
    </aside>
  );
};

export default LegalSidebar;
