"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

export default function Landing() {
  return (
    <div className="bg-[#FDF1E5] min-h-screen pt-50">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-5 bg-transparent">
        {/* Logo */}
        <div className="text-2xl font-semibold text-[#3B2B1A]">Posterly</div>

        {/* Menu */}
        <div className="hidden md:flex space-x-10 text-[#6A4E33] font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/category">Category</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          {/* Search */}
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-[#3B2B1A] leading-tight"
          >
            Fall in love with <br /> your own{" "}
            <span className="text-[#C89F6B]">Walls</span>
          </motion.h1>

          <p className="mt-6 text-[#6A4E33] text-base md:text-lg max-w-md">
            Discover the perfect posters that bring life and creativity into your space.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link href="/shop">
              <button className="px-8 py-3 rounded-full bg-[#3B2B1A] text-white font-medium hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10 justify-center md:justify-start text-[#3B2B1A]">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Posters</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50k+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image with Curved Mask */}
        <div className="flex-1 relative mt-12 md:mt-0 md:ml-12">
          <div className="relative w-[90%] md:w-[500px] h-[400px] md:h-[550px] overflow-hidden rounded-[100px] rounded-br-[200px] shadow-xl">
            <Image
              src="/images/poster-hero.jpg"
              alt="Poster Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
