"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#F5E1C8] py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#3B2B1A]"
        >
          About Us
        </motion.h2>

        <p className="mt-4 text-[#6A4E33] max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#3B2B1A]">Posterly</span>, we
          believe every wall deserves a story. Our mission is to create
          high-quality, artistic posters that inspire, motivate, and beautify
          your living spaces. From minimalistic designs to bold statements, our
          posters are crafted with love and creativity.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: "Happy Customers", value: "10K+" },
            { label: "Posters Sold", value: "25K+" },
            { label: "Years of Creativity", value: "5+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#C89F6B]">
                {stat.value}
              </h3>
              <p className="mt-2 text-[#3B2B1A] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
