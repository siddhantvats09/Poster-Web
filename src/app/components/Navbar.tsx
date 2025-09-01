"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 bg-[#FDF1E5] relative">
      {/* Logo */}
      <div className="text-2xl font-semibold text-[#3B2B1A]">Posterly</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-[#6A4E33] font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/category">Category</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search (desktop only) */}
        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none text-sm bg-transparent"
          />
        </div>

        {/* Cart */}
        <button className="p-2 rounded-full border border-[#3B2B1A]">
          <ShoppingCart className="w-5 h-5 text-[#3B2B1A]" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full border border-[#3B2B1A]"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-[#3B2B1A]" />
          ) : (
            <Menu className="w-5 h-5 text-[#3B2B1A]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDF1E5] shadow-md flex flex-col items-center py-6 space-y-6 text-[#3B2B1A] font-medium md:hidden z-50">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link href="/category" onClick={() => setMobileOpen(false)}>Category</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

          {/* Mobile Search */}
          <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm w-10/12">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none text-sm bg-transparent w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
