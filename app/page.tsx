import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { DeliverySection } from "@/components/delivery-section";
import { BestsellersSection } from "@/components/bestsellers-section";
import { BirthdaySection } from "@/components/birthday-section";
import { LunchSection } from "@/components/lunch-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <DeliverySection />
      <BestsellersSection />
      <BirthdaySection />
      <LunchSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
