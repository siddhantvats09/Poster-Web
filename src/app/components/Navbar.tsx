"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-[#fdfcf9] shadow-md z-50 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16 relative">
        {/* Left Links (desktop only) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#d4af37] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Brand in Middle */}
        <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2">
          <h1 className="font-serif text-xl md:text-2xl font-bold text-[#d4af37]">
            PosterAura
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-5 items-center">
          <FaShoppingCart className="cursor-pointer hover:text-[#d4af37] transition-colors" />
          <FaUser className="cursor-pointer hover:text-[#d4af37] transition-colors" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1a1a1a] border-t border-[#fdfcf9]/20 overflow-hidden"
        >
          <ul className="flex flex-col space-y-4 py-6 px-6 text-sm">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#d4af37] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
