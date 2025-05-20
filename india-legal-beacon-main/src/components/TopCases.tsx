
import React from "react";

const TopCases = () => {
  const recentJudgments = [
    {
      id: 1,
      title: "Anand Kumar vs State of Maharashtra",
      court: "Supreme Court",
      judge: "Justice M.R. Shah",
      date: "May 8, 2025",
      summary: "The Court ruled that an accused is entitled to bail if the trial is not concluded within a specified time frame."
    },
    {
      id: 2,
      title: "Priya Sharma vs Union of India",
      court: "Delhi High Court",
      judge: "Justice S.K. Mishra",
      date: "May 7, 2025",
      summary: "The High Court upheld the constitutional validity of the recent amendments to the Arbitration and Conciliation Act."
    },
    {
      id: 3,
      title: "Tech Solutions Ltd. vs Cybersecurity Authority",
      court: "Supreme Court",
      judge: "Justice D.Y. Chandrachud",
      date: "May 6, 2025",
      summary: "The Court established new guidelines for data protection and privacy in corporate operations."
    }
  ];

  return (
    <div>
      <div className="border-b-2 border-legal-black mb-6 flex justify-between items-baseline">
        <h2 className="text-2xl font-serif font-bold pb-2">RECENT JUDGMENTS</h2>
        <a href="#" className="text-legal-black hover:text-legal-gold hover:underline text-sm">
          View All
        </a>
      </div>
      
      <div className="space-y-4">
        {recentJudgments.map((judgment) => (
          <div
            key={judgment.id}
            className="border-b border-gray-200 pb-4"
          >
            <h3 className="text-lg font-bold text-legal-black mb-1 font-serif">
              {judgment.title}
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              <span className="font-semibold">{judgment.court}</span> • {judgment.judge} • {judgment.date}
            </p>
            <p className="text-sm text-gray-600 mb-2">{judgment.summary}</p>
            <a
              href="#"
              className="text-legal-gold hover:underline text-sm font-semibold"
            >
              Read Full Judgment →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCases;
