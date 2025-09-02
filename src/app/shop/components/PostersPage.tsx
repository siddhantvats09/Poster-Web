"use client";

import Image from "next/image";
import { useState } from "react";

// Poster type
interface Poster {
  id: string;
  name: string;
  colors: string;
  sizes: string;
  price: string;
  image: string;
  orientation: string;
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
    orientation: "portrait",
  },
  {
    id: "222",
    name: "Bridal White Dress",
    colors: "White",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster2.jpg",
    orientation: "portrait",
  },
  {
    id: "223",
    name: "Classic Coat",
    colors: "Black",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster3.jpg",
    orientation: "portrait",
  },
  {
    id: "224",
    name: "Elegant Dress",
    colors: "Blue, Pink",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster4.jpg",
    orientation: "portrait",
  },
  {
    id: "225",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster5.jpg",
    orientation: "portrait",
  },
  {
    id: "225115",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster6.jpg",
    orientation: "portrait",
  },
  {
    id: "22432",
    name: "Elegant Dress",
    colors: "Blue, Pink",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/big/3.png",
    orientation: "landscape",
  },
  {
    id: "225990",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/7.png",
    orientation: "landscape",
  },
  {
    id: "22582",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/6.png",
    orientation: "landscape",
  },
  {
    id: "22522",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster7.jpg",
    orientation: "portrait",
  },
  {
    id: "22523",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster8.jpg",
    orientation: "portrait",
  },
  {
    id: "225221",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster9.jpg",
    orientation: "portrait",
  },
    {
    id: "224998",
    name: "Elegant Dress",
    colors: "Blue, Pink",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/big/11.png",
    orientation: "landscape",
  },
  {
    id: "225982",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/13.png",
    orientation: "landscape",
  },
  {
    id: "2257",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/14.png",
    orientation: "landscape",
  },
  {
    id: "22598",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/15.png",
    orientation: "landscape",
  },
  {
    id: "22587",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/12.png",
    orientation: "landscape",
  },
  {
    id: "2255437",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/9.png",
    orientation: "landscape",
  },
];

// WhatsApp function
const getWhatsAppLink = (poster: Poster): string => {
  const phoneNumber = "919817612848"; // Replace with your WhatsApp number
  const message = `Hello, I am interested in ordering:\n\n🆔 ID: ${poster.id}\n🖼 ${poster.name}\n🎨 Colors: ${poster.colors}\n📏 Sizes: ${poster.sizes}\n💰 Price: ${poster.price}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default function PostersPage() {

   const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);
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
            className="bg-white border border-[#E0C9A6] shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden flex flex-col cursor-pointer"
            onClick={() => setSelectedPoster(poster)}
          >
            {/* Poster Image */}
            <div
              className={`relative w-full ${
                poster.orientation === "portrait" ? "h-[450px]" : "h-64"
              } bg-white flex items-center justify-center`}
            >
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
                <p className="text-base">Colors: {poster.colors}</p>
                <p className="text-base">Sizes: {poster.sizes}</p>
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
                onClick={(e) => e.stopPropagation()} // prevent modal on button click
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPoster.image}
              alt={selectedPoster.name}
              width={1200}
              height={900}
              className="object-contain w-full h-full"
            />
            {/* Close button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 right-4 bg-black text-white rounded-full px-3 py-1 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
