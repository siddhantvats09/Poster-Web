"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 border-b-[2px] border-[#E9D3B8] bg-[#FDF1E5] relative">
      {/* Left (placeholder to balance layout, can hold menu later) */}
      <div className="w-10"></div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-[#3B2B1A]">
        <Link href="/">Posterly</Link>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full border border-[#3B2B1A]">
          <ShoppingCart className="w-5 h-5 text-[#3B2B1A]" />
        </button>
      </div>

      {/* Mobile menu (still hidden, can be enabled later) */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDF1E5] shadow-md flex flex-col items-center py-6 space-y-6 text-[#3B2B1A] font-medium md:hidden z-50">
          {/* <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link href="/category" onClick={() => setMobileOpen(false)}>Category</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link> */}
        </div>
      )}
    </nav>
  );
}
