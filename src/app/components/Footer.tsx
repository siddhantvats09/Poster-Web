"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#481E01] text-[#FFE1B5] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#D4AF37] mb-4">
            PosterAura
          </h2>
          <p className="text-[#FFE1B5]/80 text-sm leading-relaxed">
            Crafting timeless posters that bring art, culture, and stories into
            your home.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4 text-base md:text-lg">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Shop All
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Contact
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              FAQ
            </li>
          </ul>
        </motion.div>

        {/* Policies */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold mb-4 text-base md:text-lg">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Shipping Policy
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Returns & Refunds
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#D4AF37] transition-colors cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </motion.div>

        {/* Social + Payments */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="font-semibold mb-4 text-base md:text-lg">Connect</h3>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          <h3 className="font-semibold mb-4 text-base md:text-lg">We Accept</h3>
          <div className="flex space-x-4 text-2xl md:text-3xl">
            <FaCcVisa />
            <FaCcMastercard />
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 md:mt-12 text-center text-xs md:text-sm text-[#FFE1B5]/70 border-t border-[#FFE1B5]/20 pt-6">
        © {new Date().getFullYear()} PosterAura. All rights reserved.
      </div>
    </footer>
  );
}
