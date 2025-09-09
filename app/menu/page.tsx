import { Navbar } from "@/components/navbar";
import { SecondaryHero } from "@/components/secondary-hero";
import { Carousel } from "@/components/ui/carousel";
import { Footer } from "@/components/footer";

export default function MenuPage() {
  const menuSlides = [
    {
      title: "🥗 Салати",
      button: "Виж менюто",
      src: "/menu/1.jpg",
    },
    {
      title: "🍝 Основни ястия",
      button: "Виж менюто",
      src: "/menu/2.jpg",
    },
    {
      title: "🥩 Специалитети",
      button: "Виж менюто",
      src: "/menu/3.jpg",
    },
    {
      title: "☕ Напитки",
      button: "Виж менюто",
      src: "/menu/4.jpg",
    },
    {
      title: "🍰 Десерти",
      button: "Виж менюто",
      src: "/menu/5.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondaryHero imageSrc="/food/falafel.jpg" height="h-80" />

      {/* Page Content Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-elegant text-gray-900 mb-6">
            Нашето меню
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-elegant">
            Открийте богатството на българската кухня с нашите традиционни
            ястия, приготвени с най-качествените продукти и много любов.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Carousel slides={menuSlides} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
