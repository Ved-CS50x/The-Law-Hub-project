import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import EnhancedFooter from "@/components/EnhancedFooter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  letter: string;
}

export const LegalDictionary = () => {
  const [activeLetterFilter, setActiveLetterFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Comprehensive legal glossary data sample - based on dictionary.law.com
  // format for manual addition in the legal glossary ( { term:"", definition:"", letter:"" }, )
  const glossaryTerms: GlossaryTerm[] = [
    { term: "Ab Initio", definition: "Latin for 'from the beginning,' 'from the first act,' or 'the start.' In legal parlance, it refers to something being the case from the beginning or outset.", letter: "A" },
    { term: "Abandonment", definition: "The act of giving up, withdrawing from, or relinquishing an interest, claim, civil proceedings, appeal, privilege, possession, or right, especially with the intent of never again resuming or reasserting it.", letter: "A" },
    { term: "Abatement", definition: "A reduction, a decrease, or a diminution. The suspension or cessation, in whole or in part, of a continuing charge, such as rent.", letter: "A" },
    { term: "Breach", definition: "The breaking of a law, or the failure (either intentional or unintentional) to fulfill a duty or contractual obligation.", letter: "B" },
    { term: "Bona Fide", definition: "Latin for 'good faith,' it refers to actions taken without knowledge of defect or deception, or sincere, honest intention or belief, regardless of the outcome.", letter: "B" },
    { term: "Beneficiary", definition: "A person who benefits from the act of another, particularly in a will, trust, or insurance policy.", letter: "B" },
    { term: "Causation", definition: "The relationship between an action and its consequence; particularly used in criminal or tort cases to establish liability.", letter: "C" },
    { term: "Certiorari", definition: "Latin for 'to be more fully informed,' it refers to a writ seeking judicial review from a higher court.", letter: "C" },
    { term: "Contempt of Court", definition: "Disregarding or disobeying a court order, or disrupting court proceedings. It can result in penalties including fines or imprisonment.", letter: "C" },
    { term: "De Facto", definition: "Latin for 'in fact' or 'in reality,' refers to situations that exist in reality, even if not officially recognized by law.", letter: "D" },
    { term: "Due Process", definition: "The requirement that the government must respect legal rights owed to a person according to the law, especially in matters of deprivation of life, liberty, or property.", letter: "D" },
    { term: "Defamation", definition: "Any intentional false communication that harms a person's reputation, decreases the respect or confidence in which a person is held, or induces negative or hostile feelings or opinions against a person.", letter: "D" },
    { term: "Estoppel", definition: "A legal principle that prevents someone from asserting a claim or right that contradicts what they have said or done previously, or what has been legally established as true.", letter: "E" },
    { term: "Ex Parte", definition: "Latin for 'by one party,' referring to legal proceedings conducted with only one party present.", letter: "E" },
    { term: "Exculpatory", definition: "Evidence or testimony that tends to justify, excuse, or clear the defendant from fault or blame.", letter: "E" },
    { term: "Force Majeure", definition: "A common clause in contracts that frees both parties from liability when an extraordinary event prevents one or both parties from fulfilling obligations.", letter: "F" },
    { term: "Fraud", definition: "A deliberate deception to secure unfair or unlawful gain, or to deprive a victim of a legal right.", letter: "F" },
    { term: "Fiduciary", definition: "A person who holds a legal or ethical relationship of trust with one or more other parties, typically involving the care of money or assets.", letter: "F" },
    { term: "Garnishment", definition: "A legal process whereby money or property due to a debtor but in the possession of a third party is applied to the payment of the debt.", letter: "G" },
    { term: "Good Faith", definition: "Honesty in fact in the conduct or transaction concerned, implying a sincere belief or motive without any malice or design to defraud.", letter: "G" },
    { term: "Guardian Ad Litem", definition: "A person appointed by a court to protect the interests of a minor or incompetent person in legal proceedings.", letter: "G" },
    { term: "Habeas Corpus", definition: "A writ requiring a person to be brought before a judge or court, especially to investigate the lawfulness of their detention.", letter: "H" },
    { term: "Hearsay", definition: "Evidence based on the reports of others rather than on personal knowledge, generally not admissible in court.", letter: "H" },
    { term: "Hold Harmless", definition: "A provision in a legal agreement stating that one party will not hold the other party liable for risk, danger, or damage.", letter: "H" },
  ];
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const handleDictionarySearch = (searchTerm: string) => {
    const url = `https://dictionary.law.com/Default.aspx?typed=${encodeURIComponent(searchTerm)}&type=1`;
    window.open(url, '_dictionary');
  };

  const filteredTerms = glossaryTerms.filter((term) => {
    // Filter by active letter if not "ALL"
    const matchesLetter = activeLetterFilter === "ALL" || term.letter === activeLetterFilter;
    
    // Filter by search query if any
    const matchesSearch = searchQuery === "" || 
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLetter && matchesSearch;
  });
  
  // Group terms by letter for display
  const termsByLetter: Record<string, GlossaryTerm[]> = {};
  filteredTerms.forEach(term => {
    if (!termsByLetter[term.letter]) {
      termsByLetter[term.letter] = [];
    }
    termsByLetter[term.letter].push(term);
  });
  
  // Get available letters from our data
  const availableLetters = Array.from(new Set(glossaryTerms.map(term => term.letter)));
  
  return (
    <div className="flex flex-col min-h-screen bg-legal-white dark:bg-legal-black dark:text-legal-white">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 border-b-2 border-legal-black dark:border-legal-white pb-2">
          LEGAL DICTIONARY
        </h1>
        
        {/* External Legal Dictionary Search */}
        <div className="mb-8 bg-legal-gold/5 rounded-lg p-4 text-center">
          <div className="mb-4">
            <img  
              //
              alt="The Law Hub Dictionary" 
              width="150" 
              height="40"
              className="mx-auto"
            />
          </div>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements[0] as HTMLInputElement;
              if (input && input.value) {
                handleDictionarySearch(input.value);
              }
            }}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              name="typed"
              placeholder="Search Legal Terms and Definition..."
              className="w-full max-w-md px-4 py-2 mb-2 border-2 border-legal-gold rounded-lg bg-transparent text-legal-black dark:text-legal-white focus:outline-none focus:ring-2 focus:ring-legal-gold"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            />
            <button
              type="submit"
              className="w-full max-w-md px-4 py-2 bg-legal-gold text-legal-black dark:text-legal-white font-serif font-bold rounded-lg hover:bg-legal-gold/90 transition-colors"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem'
              }}
            >
              Look Up
            </button>
          </form>
        </div>

        {/* Search and explanation section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Input 
                type="text"
                placeholder="Search legal terms..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <Button 
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="border-legal-gold hover:bg-legal-gold/10"
            >
              Clear
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Browse our comprehensive dictionary of legal terms to better understand legal jargon and terminology.
          </p>
        </div>
        
        {/* Alphabet navigation */}
        <div className="mb-8 border-y border-gray-200 dark:border-gray-700 py-4">
          <div className="flex flex-wrap gap-1 justify-center">
            <Button
              variant={activeLetterFilter === "ALL" ? "default" : "outline"}
              className={`min-w-8 h-8 p-0 font-serif ${activeLetterFilter === "ALL" ? "bg-legal-gold text-legal-white" : "hover:text-legal-gold"}`}
              onClick={() => setActiveLetterFilter("ALL")}
            >
              ALL
            </Button>
            {alphabet.map((letter) => (
              <Button
                key={letter}
                variant={activeLetterFilter === letter ? "default" : "outline"}
                className={`min-w-8 h-8 p-0 font-serif ${
                  availableLetters.includes(letter) 
                    ? activeLetterFilter === letter 
                      ? "bg-legal-gold text-legal-white" 
                      : "hover:text-legal-gold"
                    : "opacity-40 cursor-not-allowed"
                }`}
                onClick={() => availableLetters.includes(letter) && setActiveLetterFilter(letter)}
                disabled={!availableLetters.includes(letter)}
              >
                {letter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Dictionary content */}
        <div className="space-y-8">
          {Object.keys(termsByLetter).sort().map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-20">
              <h2 className="text-2xl font-serif font-bold border-b border-legal-gold pb-2 mb-4">
                {letter}
              </h2>
              <dl className="space-y-6">
                {termsByLetter[letter].map((term, index) => (
                  <div key={index} className="group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-3 -mx-3 rounded-md transition-colors">
                    <dt className="font-serif font-bold text-lg group-hover:text-legal-gold transition-colors">
                      {term.term}
                    </dt>
                    <dd className="text-gray-600 dark:text-gray-400 mt-1">
                      {term.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          
          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No terms found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or browse a different letter.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <EnhancedFooter />
    </div>
  );
};

export default LegalDictionary;
