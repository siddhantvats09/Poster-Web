"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const relatedProducts = [
  {
    id: 1,
    name: "Nature Landscape",
    price: "$28",
    image: "/images/poster1.jpg",
  },
  {
    id: 2,
    name: "Modern Shapes",
    price: "$22",
    image: "/images/poster1.jpg",
  },
  {
    id: 3,
    name: "Vintage Portrait",
    price: "$30",
    image: "/images/poster1.jpg",
  },
  {
    id: 4,
    name: "Typography Design",
    price: "$24",
    image: "/images/poster1.jpg",
  },
];

export default function Related() {
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
          You May Also Like
        </motion.h2>
        <p className="mt-2 text-[#6A4E33] max-w-xl mx-auto">
          Discover posters that pair beautifully with your style.
        </p>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-base font-medium text-[#3B2B1A]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#6A4E33]">{product.price}</p>
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
            Browse More
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
