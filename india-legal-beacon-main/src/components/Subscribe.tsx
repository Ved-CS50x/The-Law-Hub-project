
import React from "react";
import { Button } from "@/components/ui/button";

const Subscribe = () => {
  return (
    <div className="bg-legal-black text-legal-white py-12 border-t border-legal-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Stay Updated with Legal Developments
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and receive daily legal updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-5 py-3 rounded-none text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-legal-gold border-none"
            />
            <Button className="bg-legal-gold hover:bg-legal-gold/80 text-legal-black px-6 py-3 font-semibold rounded-none">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs mt-4 opacity-70">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
