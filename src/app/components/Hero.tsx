/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const images = [
  "/images/poster15.jpg",
  "/images/poster18.jpg",
  "/images/poster16.jpg",
  "/images/poster5.jpg",
  "/images/poster6.jpg",
  "/images/poster7.jpg",
  "/images/poster19.jpg",
  "/images/poster8.jpg",
  "/images/poster9.jpg",
  "/images/poster17.jpg",
  "/images/poster10.jpg",
  "/images/poster11.jpg",
  "/images/poster12.jpg",
  "/images/poster13.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 3 sec auto-slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FDF1E5] relative w-full lg:pl-20 2xl:pl-30 mx-auto px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#3B2B1A] leading-tight"
        >
          Fall in love with <br /> your own{" "}
          <span className="text-[#C89F6B]">Walls</span>
        </motion.h1>

        <p className="mt-6 text-[#6A4E33] text-base md:text-lg max-w-md mx-auto md:mx-0">
          Discover the perfect posters that bring life and creativity into your
          space.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link href="/shop">
            <button className="px-8 py-3 rounded-full bg-[#3B2B1A] text-white font-medium hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 flex gap-10 justify-center md:justify-start text-[#3B2B1A]">
          <div>
            <p className="text-2xl font-bold">30+</p>
            <p className="text-sm">Posters</p>
          </div>
          <div>
            <p className="text-2xl font-bold">524+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Image with Curved Mask */}
      <div className="flex-1 relative mt-12 md:mt-0 md:ml-12 flex justify-center">
        <div className="relative w-[280px] h-[350px] md:w-[500px] md:h-[550px] overflow-hidden rounded-[60px] md:rounded-[100px] md:rounded-br-[200px] shadow-xl">
          <AnimatePresence mode="wait" custom={index}>
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`Poster ${index}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
