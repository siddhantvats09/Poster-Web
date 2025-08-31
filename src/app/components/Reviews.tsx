"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav Mehta",
    text: "The poster quality is incredible — thick paper, vibrant colors. It feels like a piece of art from a gallery. Totally elevated my study room!",
    rating: 5,
  },
  {
    name: "Sneha Raghavan",
    text: "I was skeptical at first, but when I unboxed it, I genuinely gasped. The print feels premium, and it came safely packed. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Rohan Kulkarni",
    text: "What I loved the most was the story behind the art. It adds so much meaning when you hang it on your wall. My living room looks transformed.",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    text: "This isn’t just a poster — it’s a conversation starter. Friends keep asking me where I got it. Already planning to buy another design!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-[#1a1a1a] text-[#fdfcf9] py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-8 sm:mb-12 md:mb-16"
        >
          Hear From Our Collectors
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#fdfcf9]/5 border border-[#fdfcf9]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left shadow-md sm:shadow-lg hover:shadow-xl transition-all"
            >
              {/* Stars */}
              <div className="flex items-center mb-2 sm:mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      idx < review.rating ? "text-[#d4af37]" : "text-[#fdfcf9]/30"
                    }`}
                    fill={idx < review.rating ? "#d4af37" : "none"}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-[#fdfcf9]/80 mb-3 sm:mb-4 leading-relaxed">
                “{review.text}”
              </p>

              {/* Name */}
              <p className="font-semibold text-base sm:text-lg text-[#d4af37]">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
