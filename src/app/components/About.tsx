/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#481E01] text-[#FFE1B5] py-10 sm:py-14 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
        >
          <img
            src="/images/poster1.jpg"
            alt="Our Story"
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 leading-snug">
            About Our Brand
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#FFE1B5]/85 mb-4 sm:mb-6">
            Born in India, our journey began with a simple vision — to bring
            timeless art into modern homes. Every poster we create is not just
            decor, but a story of culture, craftsmanship, and meaning.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#FFE1B5]/85 mb-6 sm:mb-8">
            We collaborate with local artists, use premium archival materials,
            and ensure that every piece feels exclusive, personal, and built to
            last. When you own one of our posters, you own a fragment of art
            history — designed to inspire for decades.
          </p>
          <button className="bg-[#D4AF37] text-[#481E01] px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#FFE1B5] transition-all duration-300">
            Discover More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
