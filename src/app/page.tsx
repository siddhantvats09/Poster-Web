import Hero from "./components/Hero";
import ProductGallery from "./components/ProductGallery";
import Features from "./components/Features";
import Story from "./components/Story";
import Reviews from "./components/Reviews";
import Related from "./components/Related";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import "./globals.css"

export default function Home() {
  return (
    <main  className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Features />
      <Story />
      <Reviews />
      <Related />
      <About />
      <Footer />
    </main>
  );
}
