/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Posters JSON
const posters = [
  {
    id: "001",
    name: "Men Are Brave",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Black",
    sizes: "M, L",
    price: "1,000 ₹",
    image: "/images/poster1.jpg",
    orientation: "portrait",
  },
  {
    id: "002",
    name: "Rebuild It",
    material: "Acrylic Sheet + Fiber",
    colors: "Grey, White",
    sizes: "M, L",
    price: "1,000 ₹",
    image: "/images/poster2.jpg",
    orientation: "portrait",
  },
  {
    id: "003",
    name: "Wall of Motivation",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster3.jpg",
    orientation: "portrait",
  },
  {
    id: "004",
    name: "Discipline Grind",
    material: "Acrylic Sheet + Fiber",
    colors: "Dark Grey, White",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster4.jpg",
    orientation: "portrait",
  },
  {
    id: "005",
    name: "Fight Club Lineup",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, White",
    sizes: "M, L",
    price: "1,300 ₹",
    image: "/images/poster5.jpg",
    orientation: "portrait",
  },
  {
    id: "006",
    name: "Joker Painted",
    material: "Acrylic Sheet + Fiber",
    colors: "Yellow, Purple, Orange",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster6.jpg",
    orientation: "portrait",
  },
  {
    id: "007",
    name: "Money Power",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster7.jpg",
    orientation: "portrait",
  },
  {
    id: "008",
    name: "Market Hustler",
    material: "Acrylic Sheet + Fiber",
    colors: "Grey, White",
    sizes: "M, L",
    price: "1,000 ₹",
    image: "/images/poster8.jpg",
    orientation: "portrait",
  },
  {
    id: "009",
    name: "Reacher Bold",
    material: "Acrylic Sheet + Fiber",
    colors: "Yellow, Black",
    sizes: "M, L",
    price: "1,300 ₹",
    image: "/images/poster9.jpg",
    orientation: "portrait",
  },
  {
    id: "010",
    name: "Believe Football",
    material: "Acrylic Sheet + Fiber",
    colors: "Brown, Black",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster10.jpg",
    orientation: "portrait",
  },
  {
    id: "011",
    name: "Football Stadium Glow",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,400 ₹",
    image: "/images/poster11.jpg",
    orientation: "portrait",
  },
  {
    id: "012",
    name: "Goku Saiyan Power",
    material: "Acrylic Sheet + Fiber",
    colors: "Orange, Blue, Yellow",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster12.jpg",
    orientation: "portrait",
  },
  {
    id: "013",
    name: "Fall Seven Rise Eight",
    material: "Acrylic Sheet + Fiber",
    colors: "Brown, Red",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster13.jpg",
    orientation: "portrait",
  },
  {
    id: "014",
    name: "GOAT Kiss Trophy",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,400 ₹",
    image: "/images/poster14.jpg",
    orientation: "portrait",
  },
  {
    id: "015",
    name: "Messi Colors",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Blue, Yellow",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/poster15.jpg",
    orientation: "portrait",
  },
  {
    id: "016",
    name: "Thanos Rule",
    material: "Acrylic Sheet + Fiber",
    colors: "Purple, Red, Blue",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/poster16.jpg",
    orientation: "portrait",
  },
  {
    id: "017",
    name: "Breaking Bad",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Black",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/poster17.jpg",
    orientation: "portrait",
  },
  {
    id: "018",
    name: "No Risk No Story",
    material: "Acrylic Sheet + Fiber",
    colors: "Grey, Black",
    sizes: "M, L",
    price: "1,400 ₹",
    image: "/images/poster18.jpg",
    orientation: "portrait",
  },
  {
    id: "019",
    name: "No Risk No Porsche",
    material: "Acrylic Sheet + Fiber",
    colors: "Yellow, Green",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/poster19.jpg",
    orientation: "portrait",
  },
  {
    id: "020",
    name: "Formula Sunset",
    material: "Acrylic Sheet + Fiber",
    colors: "Orange, Red, Black",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/story.jpg",
    orientation: "landscape",
  },
  {
    id: "021",
    name: "California Plate Quote",
    material: "Acrylic Sheet + Fiber",
    colors: "Beige, Black",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/story2.jpg",
    orientation: "landscape",
  },
  {
    id: "022",
    name: "Heroes Collage",
    material: "Acrylic Sheet + Fiber",
    colors: "Multi",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/1.png",
    orientation: "landscape",
  },
  {
    id: "023",
    name: "Marvel Faces Grid",
    material: "Acrylic Sheet + Fiber",
    colors: "Multi",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/2.png",
    orientation: "landscape",
  },
  {
    id: "024",
    name: "Ironman Collage",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Gold",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/3.png",
    orientation: "landscape",
  },
  {
    id: "025",
    name: "Glasses Reflection",
    material: "Acrylic Sheet + Fiber",
    colors: "Blue, Grey",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/big/4.png",
    orientation: "landscape",
  },
  {
    id: "026",
    name: "Black Widow Team",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, Red",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/5.png",
    orientation: "landscape",
  },
  {
    id: "027",
    name: "John Wick Cool",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, Grey",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/big/6.png",
    orientation: "landscape",
  },
  {
    id: "028",
    name: "Spiderman Trio",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Blue",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/7.png",
    orientation: "landscape",
  },
  {
    id: "029",
    name: "Spiderman & Friends",
    material: "Acrylic Sheet + Fiber",
    colors: "Red, Gold",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/8.png",
    orientation: "landscape",
  },
  {
    id: "030",
    name: "Porsche 911 Duo",
    material: "Acrylic Sheet + Fiber",
    colors: "Green, Grey",
    sizes: "L, XL",
    price: "2,000 ₹",
    image: "/images/big/9.png",
    orientation: "landscape",
  },
  {
    id: "031",
    name: "Venom Faces",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,500 ₹",
    image: "/images/big/10.png",
    orientation: "landscape",
  },
  {
    id: "032",
    name: "Venom We Are",
    material: "Acrylic Sheet + Fiber",
    colors: "Dark, White",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/big/11.png",
    orientation: "landscape",
  },
  {
    id: "033",
    name: "Luxury Fashion Duo",
    material: "Acrylic Sheet + Fiber",
    colors: "Brown, White",
    sizes: "M, L",
    price: "1,600 ₹",
    image: "/images/big/12.png",
    orientation: "landscape",
  },
  {
    id: "034",
    name: "Hip Hop Kings",
    material: "Acrylic Sheet + Fiber",
    colors: "Black, White",
    sizes: "M, L",
    price: "1,800 ₹",
    image: "/images/big/13.png",
    orientation: "landscape",
  },
  {
    id: "035",
    name: "Strong Women Collage",
    material: "Acrylic Sheet + Fiber",
    colors: "Multi",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/14.png",
    orientation: "landscape",
  },
  {
    id: "036",
    name: "Legends Collage",
    material: "Acrylic Sheet + Fiber",
    colors: "Multi",
    sizes: "L, XL",
    price: "1,800 ₹",
    image: "/images/big/15.png",
    orientation: "landscape",
  },
];

const sizeOptions = [
  { label: "A4", price: 249 },
  { label: "A3", price: 399 },
  { label: 'Inch 28"×20"', price: 849 },
];

export default function PosterDetail() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : (params?.id);

  const poster = posters.find((p) => p.id === id);

  const [selectedPrice, setSelectedPrice] = useState(sizeOptions[0].price);

  if (!poster) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#FDF1E5]">
        <p className="text-2xl font-bold text-[#3B2B1A]">
          Poster not found! 🚫
        </p>
      </div>
    );
  }

  return (
    <section className="bg-[#FDF1E5] min-h-screen px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-12">
      {/* Poster Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-[320px] h-[420px] md:w-[500px] md:h-[650px] overflow-hidden rounded-[40px] shadow-2xl">
          <Image
            src={poster.image}
            alt={poster.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Poster Info */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3B2B1A] mb-4">
          {poster.name}
        </h1>

        <p className="text-lg text-[#6A4E33] mb-6">{poster.material}</p>

        {/* Price */}
        <p className="text-2xl font-semibold text-[#C89F6B] mb-6">
          ₹ {selectedPrice}
        </p>

        {/* Size Buttons */}
        <div className="flex gap-4 mb-6">
          {sizeOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => setSelectedPrice(option.price)}
              className={`px-6 py-2 rounded-full border transition font-medium
                ${
                  selectedPrice === option.price
                    ? "bg-[#3B2B1A] text-white border-[#3B2B1A]"
                    : "bg-white text-[#3B2B1A] border-[#C89F6B] hover:bg-[#C89F6B] hover:text-[#3B2B1A]"
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Quality Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#3B2B1A] mb-4">
            Quality
          </h2>
          <ul className="list-disc list-inside text-[#6A4E33] space-y-2">
            <li>Acryllic Sheet</li>
            <li>Made of high quality Fiber Sheet</li>
          </ul>
        </div>

        {/* CTA */}
        <Link href="/checkout">
          <button className="px-8 py-3 rounded-full bg-[#3B2B1A] text-white font-medium hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
}
