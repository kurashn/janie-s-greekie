import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Reviews />
      <Delivery />
      <Footer />
      <StickyCTA />
    </main>
  );
}
