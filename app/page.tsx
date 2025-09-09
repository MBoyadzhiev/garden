import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { DeliverySection } from "@/components/delivery-section";
import { LunchMenuSection } from "@/components/lunch-menu-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <DeliverySection />
      <LunchMenuSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
