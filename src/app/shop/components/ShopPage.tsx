"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

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
    id: "1",
    name: "Long Shiny Dress",
    colors: "Pink, Yellow, Orange",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "2",
    name: "Bridal White Dress",
    colors: "White",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "3",
    name: "Classic Coat",
    colors: "Black",
    sizes: "S, M, L",
    price: "1,200 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "4",
    name: "Elegant Dress",
    colors: "Blue, Pink",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster1.jpg",
  },
  {
    id: "5",
    name: "Luxury Gown",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/poster1.jpg",
  },
];

// WhatsApp function
const getWhatsAppLink = (poster: Poster): string => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = `Hello, I am interested in ordering:\n\n🖼 ${poster.name}\n🎨 Colors: ${poster.colors}\n📏 Sizes: ${poster.sizes}\n💰 Price: ${poster.price}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default function ShopPage() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-[#FDF1E5] min-h-fit px-0 sm:px-6 lg:px-12 py-12 pb-24">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#3B2B1A] mb-12">
        Our Posters
      </h1>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          onInit={(swiper) => {
            // Connect custom navigation buttons
            // @ts-expect-error hisisi
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error hisisi
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {posters.map((poster) => (
            <SwiperSlide key={poster.id}>
              <div className="flex flex-col items-center text-center bg-[#FFF9F3] border border-[#E9D3B8] p-4 shadow hover:shadow-lg transition">
                {/* Poster Image */}
                <div className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden border border-[#C89F6B]">
                  <Image
                    src={poster.image}
                    alt={poster.name}
                    fill
                    className="object-cover bg-white"
                  />
                </div>

                {/* Poster Details */}
                <div className="mt-4 text-[#3B2B1A] text-sm space-y-1">
                  <p className="uppercase tracking-wide text-[#C89F6B] font-bold">
                    {poster.name}
                  </p>
                  <p>Color: {poster.colors}</p>
                  <p>Size: {poster.sizes}</p>
                  <p className="font-semibold text-[#C89F6B]">
                    Price: {poster.price}
                  </p>
                </div>

                {/* Order Now Button */}
                <a
                  href={getWhatsAppLink(poster)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#C89F6B] text-[#3B2B1A] font-semibold px-6 py-2 shadow-md hover:bg-[#E9D3B8] transition"
                >
                  Order Now
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows at Bottom Middle */}
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex space-x-6">
          <button
            ref={prevRef}
            className="bg-[#C89F6B] text-[#3B2B1A] p-3 shadow hover:bg-[#E9D3B8] transition"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-[#C89F6B] text-[#3B2B1A] p-3 shadow hover:bg-[#E9D3B8] transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
