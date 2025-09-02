"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section className="w-full bg-[#E9D3B8] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center"
        >
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/story2.jpg" // replace with your image
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B2B1A]">
            Our Story
          </h2>
          <p className="mt-4 text-[#6A4E33] leading-relaxed max-w-xl mx-auto md:mx-0">
            What started as a small passion project has grown into a creative
            journey to bring unique, high-quality posters to homes everywhere.
            We believe walls deserve more than plain paint — they deserve
            stories, emotions, and inspiration. Every poster we create carries
            a touch of art, love, and authenticity.
          </p>

          {/* <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 rounded-2xl bg-[#3B2B1A] text-white font-medium shadow-md hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition-colors"
            >
              Learn More
            </motion.button>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}
