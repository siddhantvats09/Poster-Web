/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const related = [
  {
    title: "Mystic Lotus Bloom",
    price: "₹2,499",
    img: "/images/poster1.jpg",
  },
  {
    title: "Golden Horizon",
    price: "₹3,299",
    img: "/images/poster1.jpg",
  },
  {
    title: "Sacred Geometry Mandala",
    price: "₹2,999",
    img: "/images/poster1.jpg",
  },
  {
    title: "Eternal Waves",
    price: "₹2,199",
    img: "/images/poster1.jpg",
  },
];

export default function Related() {
  return (
    <section className="w-full bg-[#fdfcf9] py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1a1a1a] font-bold mb-8 sm:mb-10 md:mb-12 text-center"
        >
          You May Also Love
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {related.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Poster Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col items-center text-center">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[#d4af37] font-medium mb-3 sm:mb-4">
                  {item.price}
                </p>
                <button className="bg-[#1a1a1a] text-[#fdfcf9] px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
