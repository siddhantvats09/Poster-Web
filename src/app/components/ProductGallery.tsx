"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Abstract Art Poster",
    price: "$25",
    image: "/images/poster1.jpg",
  },
  {
    id: 2,
    name: "Minimalist Line Art",
    price: "$20",
    image: "/images/poster1.jpg",
  },
  {
    id: 3,
    name: "Vintage Travel Poster",
    price: "$30",
    image: "/images/poster1.jpg",
  },
  {
    id: 4,
    name: "Modern Typography",
    price: "$22",
    image: "/images/poster1.jpg",
  },
];

export default function ProductGallery() {
  return (
    <section className="w-full bg-[#E9D3B8] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#3B2B1A]"
        >
          Shop Our Posters
        </motion.h2>

        <p className="mt-2 text-[#6A4E33] max-w-xl mx-auto">
          Explore our curated collection of posters to bring creativity and
          character to your walls.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h3 className="text-lg font-medium text-[#3B2B1A]">
                  {product.name}
                </h3>
                <p className="mt-1 text-[#6A4E33]">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-3 rounded-2xl bg-[#3B2B1A] text-white font-medium shadow-md hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition-colors"
          >
            View All
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
