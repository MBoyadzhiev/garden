import { Navbar } from "@/components/navbar";
import { SecondaryHero } from "@/components/secondary-hero";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  const foodImages = [
    "/food/chicken.jpg",
    "/food/djolan.jpg",
    "/food/falafel.jpg",
    "/food/green-salad.jpg",
    "/food/mixed-salad.jpg",
    "/food/pasta-calamari.jpg",
    "/food/pasta-muscles.jpg",
    "/food/pasta.jpg",
    "/food/pate.jpg",
    "/food/plates.jpg",
    "/food/premeal.jpg",
    "/food/rizoto.jpg",
    "/food/snowwhite.jpg",
    "/food/snowwhite2.jpg",
    "/food/steak.jpg",
    "/food/steak2.jpg",
    "/food/tomato-salad.jpg",
    "/food/vegan.jpg",
  ];

  const restaurantImages = [
    "/restaurant/masi-detski.jpg",
    "/restaurant/masi.jpg",
    "/restaurant/detski2.jpg",
    "/restaurant/nosht2.jpg",
    "/restaurant/nosht-gradina.jpg",
    "/restaurant/detski-kut.jpg",
    "/restaurant/tenta.jpg",
    "/restaurant/hora1.jpg",
    "/restaurant/interior.jpg",
    "/restaurant/interior2.jpg",
    "/restaurant/gradina.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondaryHero imageSrc="/restaurant/tenta.jpg" height="h-80" />

      {/* Page Content Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-elegant text-gray-900 mb-6">
            Галерия
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-elegant">
            Открийте богатството на нашите ястия и атмосферата в ресторант
            Garden Bogoridi
          </p>
        </div>
      </section>

      {/* Food Gallery Section */}
      <Gallery
        images={foodImages}
        title="Нашите ястия"
        description="Всяко ястие е произведение на изкуството, приготвено с любов и внимание към детайла"
      />

      {/* Restaurant Gallery Section */}
      <Gallery
        images={restaurantImages}
        title="Нашият ресторант"
        description="Уютна атмосфера, красиви градини и комфортни пространства за незабравими моменти"
      />

      <Footer />
    </div>
  );
}
