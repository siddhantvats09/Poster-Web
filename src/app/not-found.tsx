"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-[#FDF1E5] text-center px-6">
      {/* Big Image in Center */}
      <div className="relative w-80 h-80 mt-14 md:mt-0 md:w-[450px] md:h-[400px] ">
        <Image
          src="/images/404.png" // replace with your image
          alt="Page Not Found"
          fill
          className="object-contain "
          priority
        />
      </div>

      {/* Text */}
      <h1 className=" text-3xl md:text-5xl font-bold text-[#3B2B1A]">
        Oops! Page Not Found
      </h1>
      <p className="mt-4 text-[#6A4E33] max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link href="/">
        <button className="mt-6 px-8 py-3 rounded-full bg-[#3B2B1A] text-white font-medium hover:bg-[#C89F6B] hover:text-[#3B2B1A] transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
