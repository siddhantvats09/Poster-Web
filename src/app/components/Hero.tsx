"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FDF1E5] relative w-full max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between">
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

        <p className="mt-6 text-[#6A4E33] text-base md:text-lg max-w-md mx-auto md:mx-0">
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
      <div className="flex-1 relative mt-12 md:mt-0 md:ml-12 flex justify-center">
        <div className="relative w-[280px] h-[350px] md:w-[500px] md:h-[550px] overflow-hidden rounded-[60px] md:rounded-[100px] md:rounded-br-[200px] shadow-xl">
          <Image
            src="/images/poster1.jpg"
            alt="Poster Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
