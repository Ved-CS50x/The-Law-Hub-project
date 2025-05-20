
import React from "react";
import Masthead from "@/components/Masthead";
import NavBar from "@/components/NavBar";
import NewsTicker from "@/components/NewsTicker";
import FeaturedNews from "@/components/FeaturedNews";
import KnowYourRights from "@/components/KnowYourRights";
import CaseLawHighlights from "@/components/CaseLawHighlights";
import ExplainersArticles from "@/components/ExplainersArticles";
import LegalSidebar from "@/components/LegalSidebar";
import EnhancedFooter from "@/components/EnhancedFooter";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-legal-white dark:bg-legal-black dark:text-legal-white">
      <Masthead />
      <NavBar />
      <NewsTicker />
      
      <main className="flex-grow">
        <FeaturedNews />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
            {/* Main content area (9 columns on desktop) */}
            <div className="lg:col-span-9">
              <div className="border-b-2 border-legal-black dark:border-legal-white mb-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold pb-2">LEGAL HEADLINES</h2>
              </div>
              
              {/* Main grid layout with CSS Grid for newspaper style - positions swapped */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                <div className="md:col-span-8">
                  <CaseLawHighlights />
                </div>
                <div className="md:col-span-4">
                  <KnowYourRights />
                </div>
              </div>
              
              <ExplainersArticles />
            </div>
            
            {/* Sidebar (3 columns on desktop) */}
            <div className="lg:col-span-3">
              <LegalSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <EnhancedFooter />
    </div>
  );
};

export default Index;
