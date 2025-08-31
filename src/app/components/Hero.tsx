"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1a1a] text-[#fdfcf9] flex items-center justify-center overflow-hidden">
      {/* Background Accent (fixed for mobile) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#d4af37]/20 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-20 gap-10 overflow-hidden">
        {/* Left: Text */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Transform Your Walls <br /> 
            <span className="text-[#d4af37]">Elevate Your Space</span>
          </h1>
          <p className="mt-6 text-base md:text-xl font-sans text-[#fdfcf9]/80 max-w-xl mx-auto md:mx-0">
            Discover limited-edition posters crafted with museum-grade precision. 
            More than art – it’s a statement of who you are.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-3 bg-[#d4af37] text-[#1a1a1a] px-6 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Shop Collection
            <ArrowRight size={22} />
          </motion.button>
        </motion.div>

        {/* Right: Poster Showcase */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[280px] h-[400px] md:w-[400px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fdfcf9]">
            <Image
              src="/images/poster1.jpg"
              alt="Premium Poster"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
