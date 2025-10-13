import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { DeliverySection } from "@/components/delivery-section";
import { BestsellersSection } from "@/components/bestsellers-section";
import { LunchBirthdayCombinedSection } from "@/components/lunch-birthday-combined-section";
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
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full">
        <div className="flex-1">
          <LunchBirthdayCombinedSection />
        </div>
      </div>
      <LocationSection />
      <Footer />
    </div>
  );
}
