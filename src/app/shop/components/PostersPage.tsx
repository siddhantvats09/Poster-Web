"use client";

import Image from "next/image";

// Poster type
interface Poster {
  id: string;
  name: string;
  colors: string;
  sizes: string;
  price: string;
  image: string;
}

// Sample posters
const posters: Poster[] = [
  {
    id: "221",
    name: "Long Shiny Dress",
    colors: "Pink, Yellow, Orange",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "222",
    name: "Bridal White Dress",
    colors: "White",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "223",
    name: "Classic Coat",
    colors: "Black",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "224",
    name: "Elegant Dress",
    colors: "Blue, Pink",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "225",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster1.jpg",
  },
];

// WhatsApp function
const getWhatsAppLink = (poster: Poster): string => {
  const phoneNumber = "919817612848"; // Replace with your WhatsApp number
  const message = `Hello, I am interested in ordering:\n\n🆔 ID: ${poster.id}\n🖼 ${poster.name}\n🎨 Colors: ${poster.colors}\n📏 Sizes: ${poster.sizes}\n💰 Price: ${poster.price}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default function PostersPage() {
  return (
    <div className="bg-[#FDF1E5] min-h-screen px-6 lg:px-20 py-12">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#3B2B1A] mb-12">
        Explore Our Posters
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="bg-white border border-[#E0C9A6] shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden flex flex-col"
          >
            {/* Poster Image (reduced size) */}
            <div className="relative w-full h-80 bg-white flex items-center justify-center">
              <Image
                src={poster.image}
                alt={poster.name}
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Poster Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="text-gray-800 space-y-2">
                <p className="uppercase tracking-wide text-[#C89F6B] font-bold text-lg">
                  {poster.name}
                </p>
                <p className="text-base"> Colors: {poster.colors}</p>
                <p className="text-base"> Sizes: {poster.sizes}</p>
                <p className="font-semibold text-[#3B2B1A] text-lg">
                  Rs. {poster.price}
                </p>
              </div>

              {/* Order Now Button */}
              <a
                href={getWhatsAppLink(poster)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-center bg-[#3B2B1A] text-[#FDF1E5] font-semibold px-6 py-3 shadow-md hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition rounded-lg text-lg"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
