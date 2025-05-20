
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { label: "Top Stories", href: "#" },
    { label: "Supreme Court", href: "#" },
    { label: "High Courts", href: "#" },
    { label: "Tribunals", href: "#" },
    { label: "Columns", href: "#" },
    { label: "Interviews", href: "#" },
  ];

  return (
    <header className="bg-legal-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold whitespace-nowrap">
                <span className="text-gray-500">T</span>
                <span className="text-amber-700">L</span>
                <span className="text-legal-black">H</span>
              </h1>
              <div className="text-xs font-serif -mt-1">
                <span className="text-gray-500">The</span>{" "}
                <span className="text-amber-700">Law</span>{" "}
                <span className="text-legal-black">Hub</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search legal news..."
                className="px-4 py-2 pr-10 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-legal-gold"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-legal-gold hover:bg-legal-gold/80 text-legal-black rounded-none">
              Subscribe
            </Button>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-legal-dark focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <nav className="bg-legal-black text-legal-white hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-1">
            {categories.map((category) => (
              <li key={category.label}>
                <a
                  href={category.href}
                  className="block px-4 py-2 hover:bg-legal-gold hover:text-legal-black transition-colors duration-200 font-serif"
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-legal-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search legal news..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-legal-gold"
              />
            </div>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="block px-4 py-2 hover:bg-legal-light rounded-none transition-colors duration-200 font-serif"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button className="bg-legal-gold hover:bg-legal-gold/80 text-legal-black w-full rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
