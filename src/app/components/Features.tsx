"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaPaintBrush, FaShippingFast, FaSmile } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Eco-Friendly Prints",
    desc: "We use sustainable paper and inks that are safe for your home and the planet.",
    icon: <FaLeaf size={28} />,
  },
  {
    id: 2,
    title: "Premium Quality",
    desc: "Every poster is printed with high-resolution detail and vibrant colors.",
    icon: <FaPaintBrush size={28} />,
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "Get your posters delivered quickly with our reliable shipping service.",
    icon: <FaShippingFast size={28} />,
  },
  {
    id: 4,
    title: "Customer Happiness",
    desc: "Our mission is to bring joy to your walls and smiles to our customers.",
    icon: <FaSmile size={28} />,
  },
];

export default function Features() {
  return (
    <section className="w-full bg-[#F5E1C8] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#3B2B1A]"
        >
          Why Choose Us
        </motion.h2>
        <p className="mt-2 text-[#6A4E33] max-w-xl mx-auto">
          We make posters that are not just art, but an experience you’ll love to hang on your walls.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-[#C89F6B] mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#3B2B1A]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[#6A4E33]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
