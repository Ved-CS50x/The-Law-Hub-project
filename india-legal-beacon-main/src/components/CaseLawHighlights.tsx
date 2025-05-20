
import React from "react";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const CaseLawHighlights = () => {
  const cases = [
    {
      id: 1,
      title: "Supreme Court Expands Free Speech Protections Online",
      court: "Supreme Court",
      description: "The top court ruled that social media comments are protected under Article 19 free speech provisions.",
      date: "May 12, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Delhi High Court Orders Pollution Control Measures",
      court: "Delhi High Court",
      description: "New ruling establishes strict timelines for implementing air quality improvement measures.",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Competition Commission Fines Tech Giant ₹1,200 Crore",
      court: "Competition Commission",
      description: "Landmark anti-trust ruling against market dominance practices in digital advertising.",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "NCLAT Upholds Resolution Plan for Stressed Steel Company",
      court: "NCLAT",
      description: "Appellate tribunal rejected creditors' challenge to the bankruptcy resolution process.",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Supreme Court Clarifies Property Inheritance Rights",
      court: "Supreme Court",
      description: "Landmark judgment on succession and inheritance laws for ancestral properties.",
      date: "May 3, 2025",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="py-6">
      <div className="border-b-2 border-legal-black dark:border-legal-white mb-4 flex items-center">
        <Scale className="mr-2 text-legal-gold" size={24} />
        <h2 className="text-2xl font-serif font-bold pb-1">CASE LAW HIGHLIGHTS</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-x-6 gap-y-4">
        {cases.map((caseItem) => (
          <div key={caseItem.id} className="border-b border-gray-200 dark:border-gray-800 pb-4">
            <div className="flex">
              {caseItem.image && (
                <div className="mr-4 w-24 h-24 flex-shrink-0">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-bold text-legal-gold">{caseItem.court}</span>
                  <span className="text-gray-500 dark:text-gray-400">{caseItem.date}</span>
                </div>
                <Link to="#" className="block">
                  <h3 className="font-serif font-bold text-base md:text-lg mb-2 hover:text-legal-gold transition-colors">
                    {caseItem.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400">{caseItem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link 
          to="#" 
          className="inline-block border border-legal-gold text-legal-gold dark:text-legal-gold hover:bg-legal-gold hover:text-white dark:hover:text-legal-black px-6 py-2 font-serif text-sm transition-colors"
        >
          View Complete Case Law Database
        </Link>
      </div>
    </div>
  );
};

export default CaseLawHighlights;
