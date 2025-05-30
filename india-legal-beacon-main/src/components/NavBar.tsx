
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "#" },
    { label: "Legal News", href: "#" },
    { label: "Supreme Court", href: "#" },
    { label: "High Courts", href: "#" },
    { label: "Discussion & Explainers", href: "#" },
    { label: "Important Cases", href: "#" },
    { label: "Know Your Rights", href: "#" },
    { label: "Events", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="bg-legal-black text-legal-white border-b border-legal-gold">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <ul className="flex whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="inline-block px-4 py-2 hover:bg-legal-gold hover:text-legal-black transition-colors duration-200 font-serif text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
