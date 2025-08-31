"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Story() {
  return (
    <section className="w-full bg-[#fdfcf9] text-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Lifestyle Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#1a1a1a]/20"
        >
          <Image
            src="/images/poster1.jpg" // 🔥 replace with real lifestyle poster image
            alt="Poster in Lifestyle Setting"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: Story + Specs */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            The Story Behind <span className="text-[#d4af37]">“Golden Horizon”</span>
          </h2>

          {/* Emotional Description */}
          <p className="text-lg text-[#1a1a1a]/80 leading-relaxed">
            Inspired by the meeting of the earth and sky, “Golden Horizon” captures 
            the balance between strength and serenity. Each print is a tribute to 
            moments of stillness that elevate the soul, designed to transform not 
            just your walls but your state of mind.
          </p>

          {/* Technical Specs */}
          <div className="space-y-3 mt-6">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <ul className="space-y-2">
              {[
                "Archival-grade matte paper (310 gsm)",
                "Fade-resistant pigment inks",
                "Unframed / Framed options available",
                "Dimensions: 18x24 in | 24x36 in",
                "Limited to 50 editions only",
              ].map((spec, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
