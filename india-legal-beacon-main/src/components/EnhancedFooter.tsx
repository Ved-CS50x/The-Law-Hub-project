
import React from "react";
import { Link } from "react-router-dom";

const EnhancedFooter = () => {
  const sections = [
    {
      title: "Legal Resources",
      links: [
        { name: "Supreme Court Judgments", href: "#" },
        { name: "High Court Databases", href: "#" },
        { name: "Legal Forms & Templates", href: "#" },
        { name: "Acts & Regulations", href: "#" },
        { name: "Legal Dictionary", href: "#" },
      ],
    },
    {
      title: "Knowledge Center",
      links: [
        { name: "Know Your Rights", href: "#" },
        { name: "Legal Explainers", href: "#" },
        { name: "Commentaries & Analysis", href: "#" },
        { name: "Legal Updates", href: "#" },
        { name: "Video Tutorials", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Legal Forum", href: "#" },
        { name: "Ask A Lawyer", href: "#" },
        { name: "Law Student Corner", href: "#" },
        { name: "Events & Webinars", href: "#" },
        { name: "Submit an Article", href: "#" },
      ],
    },
    {
      title: "About TLH",
      links: [
        { name: "About Us", href: "#" },
        { name: "Editorial Team", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Advertise With Us", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-legal-black text-legal-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Subscription */}
        <div className="border-b border-gray-700 pb-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold mb-3">Subscribe to Our Legal Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Get the latest legal news, case analysis, and expert commentary delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-legal-black border border-gray-700 focus:border-legal-gold focus:outline-none"
              />
              <button className="bg-legal-gold hover:bg-legal-gold/80 text-legal-black px-6 py-2 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-serif font-bold mb-4 border-b border-legal-gold pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-legal-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Disclaimer and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-xs text-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold mb-2">Disclaimer</h5>
              <p>
                The content on this site is provided for informational purposes only and does not constitute 
                legal advice. Users should contact a qualified legal professional for advice on specific 
                legal issues. The Law Hub does not guarantee the accuracy or reliability of any information 
                presented on this website.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-2">Copyright Notice</h5>
              <p>
                © {new Date().getFullYear()} The Law Hub (TLH). All rights reserved. No part of this publication 
                may be reproduced, distributed, or transmitted in any form without prior written permission.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link to="#" className="hover:text-legal-gold">Privacy Policy</Link>
                <Link to="#" className="hover:text-legal-gold">Terms of Use</Link>
                <Link to="#" className="hover:text-legal-gold">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
