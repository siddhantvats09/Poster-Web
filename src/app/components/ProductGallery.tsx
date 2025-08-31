"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const posterImages = [
  "/images/poster1.jpg",
  "/images/poster1.jpg",
  "/images/poster1.jpg",
  "/images/poster1.jpg",
];

export default function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const [size, setSize] = useState("Medium");

  return (
    <section className="relative w-full bg-[#f9f9f7] text-[#1a1a1a] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Image Gallery */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Main Image */}
          <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[480px] md:h-[640px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a1a1a]/20">
            <Image
              src={posterImages[selected]}
              alt="Premium Poster"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 sm:gap-4 mt-6 flex-wrap justify-center">
            {posterImages.map((img, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(i)}
                className={`relative w-16 h-24 sm:w-20 sm:h-28 rounded-md overflow-hidden border-2 transition ${
                  selected === i
                    ? "border-[#d4af37]"
                    : "border-transparent hover:border-[#1a1a1a]"
                }`}
              >
                <Image
                  src={img}
                  alt={`Poster ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right: Product Details */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            “Golden Horizon” Premium Poster
          </h2>

          {/* Price */}
          <p className="text-2xl font-semibold text-[#d4af37]">₹2,999</p>

          {/* Size Options */}
          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {["Small", "Medium", "Large"].map((option) => (
                <button
                  key={option}
                  onClick={() => setSize(option)}
                  className={`px-4 py-2 rounded-xl border transition font-medium ${
                    size === option
                      ? "bg-[#1a1a1a] text-[#f9f9f7] border-[#1a1a1a]"
                      : "border-[#1a1a1a]/40 hover:bg-[#f0f0f0]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-[#1a1a1a]/80 leading-relaxed">
            Crafted with <span className="font-semibold">archival inks</span> on
            museum-grade paper, this limited edition print elevates any space
            with timeless elegance. Only{" "}
            <span className="font-semibold">50 pieces</span> available.
          </p>

          {/* Add to Cart */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-3 bg-[#1a1a1a] text-[#f9f9f7] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <ShoppingBag size={22} />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
