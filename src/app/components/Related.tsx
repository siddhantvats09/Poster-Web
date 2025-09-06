"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const relatedProducts = [
  {
    id: "022",
    name: "Heroes Collage",
    price: "449 ₹",
    image: "/images/big/1.png",
  },
  {
    id: "023",
    name: "Marvel Faces Grid",
    price: "449 ₹",
    image: "/images/big/2.png",
  },
  {
    id: "024",
    name: "Ironman Collage",
    price: "449 ₹",
    image: "/images/big/3.png",
  },
  {
    id: "026",
    name: "Black Widow Team",
    price: "449 ₹",
    image: "/images/big/5.png",
  },
];


export default function Related() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % relatedProducts.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + relatedProducts.length) % relatedProducts.length
      );
    }
  };

  const handleClose = () => setSelectedIndex(null);

  const selectedProduct =
    selectedIndex !== null ? relatedProducts[selectedIndex] : null;

  return (
    <section className="w-full bg-[#E9D3B8] py-2 md:py-6 px-6 md:px-10">
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedIndex(i)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-[#342e27]/80 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#FDF1E5] rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg relative p-4 sm:p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 z-9 right-3 p-2 border border-[#3B2B1A] rounded-full bg-[#FDF1E5] hover:bg-[#E9D3B8] transition"
              >
                <X className="w-5 h-5 text-[#3B2B1A]" />
              </button>

              {/* Product Image */}
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-[#FDF1E5] flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain w-full h-auto"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4 text-center px-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#3B2B1A]">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-[#3B2B1A]">
                  {selectedProduct.price}
                </p>
                <Link href={`/posters/${selectedProduct.id}`}
                  
                  className="inline-block mt-4 px-6 py-2 rounded-xl bg-[#3B2B1A] text-white font-medium shadow-md hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition-colors"
                >
                  Buy Now
                </Link>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 border border-[#3B2B1A] rounded-full bg-[#FDF1E5] hover:bg-[#E9D3B8] transition"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B2B1A]" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 border border-[#3B2B1A] rounded-full bg-[#FDF1E5] hover:bg-[#E9D3B8] transition"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B2B1A]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
