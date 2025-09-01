"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sophie L.",
    rating: 5,
    message:
      "Absolutely love the quality! The poster looks even better in person and shipping was fast.",
  },
  {
    id: 2,
    name: "Arjun M.",
    rating: 4,
    message:
      "Beautiful designs that really changed the vibe of my living room. Will order again!",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    message:
      "The attention to detail is amazing. Every guest who visits compliments the posters.",
  },
  {
    id: 4,
    name: "Rahul S.",
    rating: 5,
    message:
      "Great customer service and top-notch quality. Highly recommend this shop!",
  },
];

export default function Reviews() {
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
          What Our Customers Say
        </motion.h2>
        <p className="mt-2 text-[#6A4E33] max-w-xl mx-auto">
          Real stories from people who’ve decorated their spaces with our posters.
        </p>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col text-left"
            >
              {/* Stars */}
              <div className="flex text-[#C89F6B] mb-3">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

              {/* Message */}
              <p className="text-[#3B2B1A] text-sm leading-relaxed">
                {review.message}
              </p>

              {/* Name */}
              <span className="mt-4 font-semibold text-[#6A4E33]">
                — {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
