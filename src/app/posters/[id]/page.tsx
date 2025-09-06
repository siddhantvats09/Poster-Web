/* eslint-disable @typescript-eslint/no-unused-vars */

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PosterDetail from "./components/PosterDetails";
import RelatedPosters from "./components/RelatedPosters";

// import "./globals.css"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Landing/> */}
      <Navbar />
      {/* <PosterDetail></PosterDetail> */}
      <RelatedPosters></RelatedPosters>
      <Footer />
    </main>
  );
}
