"use client";

import Image from "next/image";
import Link from "next/link";
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
  material: string;
}

// Sample posters
const posters: Poster[] = [
  
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
   orientation: "portrait",
  },
  {
    id: "021",
    name: "California Plate Quote",
    material: "Acrylic Sheet + Fiber",
    colors: "Beige, Black",
    sizes: "M, L",
    price: "1,200 ₹",
    image: "/images/story2.jpg",
    orientation: "portrait",
  },
  // ---- Big folder posters ----
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
              <Link href={`posters/${poster.id}`}
                
                className="mt-5 inline-block text-center bg-[#3B2B1A] text-[#FDF1E5] font-semibold px-6 py-3 shadow-md hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition rounded-lg text-lg"
                // prevent modal on button click
              >
                Order Now
              </Link>
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
      className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedPoster.image}
        alt={selectedPoster.name}
        width={1200}
        height={900}
        className="object-contain max-w-full max-h-[90vh]"
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
