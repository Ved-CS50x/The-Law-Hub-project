
import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, LogIn } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const Masthead = () => {
  const { theme, setTheme } = useTheme();
  
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="border-b border-legal-black">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          {/* Top bar with date and theme toggle */}
          <div className="w-full flex justify-between items-center mb-2 text-xs">
            <div>{formattedDate}</div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          
          {/* Masthead */}
          <Link to="/" className="flex flex-col items-center mb-2">
            <h1 className="text-4xl md:text-6xl font-serif font-bold whitespace-nowrap">
              <span className="text-gray-500">T</span>
              <span className="text-yellow-500">L</span>
              <span className="text-legal-black dark:text-legal-white">H</span>
            </h1>
            <div className="text-sm font-serif -mt-1">
              <span className="text-gray-500">The</span>{" "}
              <span className="text-yellow-500">Law</span>{" "}
              <span className="text-legal-black dark:text-legal-white">Hub</span>
            </div>
          </Link>
          
          {/* Updated Tagline */}
          <div className="text-xs italic mb-2 text-gray-600 dark:text-gray-400">
            "A Student Initiative"
          </div>



          {/* Search bar with auth buttons */}
          <div className="w-full max-w-md mx-auto mt-2 flex gap-2 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search legal news, articles, academic material..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-none focus:outline-none focus:ring-1 focus:ring-legal-gold bg-white dark:bg-legal-black dark:text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                className="bg-legal-gold hover:bg-legal-gold/90 text-white px-3 py-1 h-9 rounded-none font-medium text-sm"
              >
                Subscribe
              </Button>
              <Button 
                className="bg-legal-gold hover:bg-legal-gold/90 text-white px-3 py-1 h-9 rounded-none font-medium text-sm flex items-center gap-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
