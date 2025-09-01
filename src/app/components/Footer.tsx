"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3B2B1A] text-white pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Posterly</h2>
          <p className="mt-3 text-sm text-[#E9D3B8]">
            Bringing walls to life with art that inspires and transforms your
            space.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-[#E9D3B8]">
            <li>
              <Link
                href="/shop"
                className="hover:text-[#C89F6B] transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#C89F6B] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#C89F6B] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-[#C89F6B] transition-colors"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-[#E9D3B8]">
            Email: support@posterly.com
          </p>
          <p className="text-sm text-[#E9D3B8]">Phone: +91 98765 43210</p>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            <a
              href="#"
              className="p-2 bg-[#C89F6B] rounded-full hover:bg-white hover:text-[#3B2B1A] transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-[#C89F6B] rounded-full hover:bg-white hover:text-[#3B2B1A] transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="p-2 bg-[#C89F6B] rounded-full hover:bg-white hover:text-[#3B2B1A] transition-colors"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-[#6A4E33] pt-6 text-center text-sm text-[#E9D3B8]">
        © {new Date().getFullYear()} Posterly. All rights reserved. <br />
        Created by{" "}
        <a
          href="https://sixthgenx.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C89F6B] hover:underline"
        >
          SixthGenX
        </a>
      </div>
    </footer>
  );
}
