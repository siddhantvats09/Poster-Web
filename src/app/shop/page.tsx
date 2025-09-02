/* eslint-disable @typescript-eslint/no-unused-vars */

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostersPage from "./components/PostersPage";
import ShopPage from "./components/ShopPage";

// import "./globals.css"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Landing/> */}
      <Navbar />
      {/* <ShopPage></ShopPage> */}
      <PostersPage></PostersPage>
      <Footer />
    </main>
  );
}
