"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Gem, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Museum-Grade Quality",
    desc: "Printed on archival paper with fade-resistant inks to preserve brilliance for decades.",
  },
  {
    icon: Gem,
    title: "Limited Edition",
    desc: "Only 50 prints available worldwide — every piece comes with a certificate of authenticity.",
  },
  {
    icon: Truck,
    title: "Secure, Fast Shipping",
    desc: "Safely packaged and delivered to your doorstep with tracking and insurance.",
  },
  {
    icon: Star,
    title: "Premium Experience",
    desc: "From ordering to unboxing, every detail is designed to feel exclusive and personal.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-[#481E01] text-[#FFE1B5] py-10 sm:py-14 md:py-18 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl sm:text-3xl md:text-5xl font-serif font-bold mb-8 sm:mb-12 md:mb-16 leading-snug"
        >
          Why Choose Our Posters?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#FFE1B5]/5 border border-[#FFE1B5]/20 shadow-md hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <f.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#D4AF37] mb-3 sm:mb-4" />

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold font-serif mb-1 sm:mb-2">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#FFE1B5]/80">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
