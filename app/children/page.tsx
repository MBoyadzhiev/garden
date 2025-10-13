import { Navbar } from "@/components/navbar";
import { SecondaryHero } from "@/components/secondary-hero";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function ChildrenPage() {
  const childrenImages = [
    {
      src: "/restaurant/detski-kut.jpg",
      alt: "Детски кът - игрална зона",
      title: "Игрална зона",
      description: "Безопасно и весело място за игра",
    },
    {
      src: "/restaurant/detski2.jpg",
      alt: "Детски кът - маси",
      title: "Детски маси",
      description: "Специално проектирани маси за малки гости",
    },
    {
      src: "/restaurant/masi-detski.jpg",
      alt: "Детски кът - обстановка",
      title: "Уютна обстановка",
      description: "Комфортно пространство за семействата",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SecondaryHero imageSrc="/restaurant/detski-kut.jpg" height="h-80" />

      {/* Page Content Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-elegant text-gray-900 mb-6">
            Детски кът
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-elegant">
            Специално място за нашите малки гости. Безопасна и весела среда,
            където децата могат да играят, докато родителите се наслаждават на
            вкусната храна и спокойната атмосфера.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant text-gray-900 mb-6">
              Защо да изберете нашия детски кът?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ние разбираме колко важно е децата да се чувстват комфортно и
              родителите да могат да се отпуснат
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Безопасност
              </h3>
              <p className="text-gray-600">
                Всички играчки и обзавеждане са проверени за безопасност и са
                подходящи за всички възрасти
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Забавление
              </h3>
              <p className="text-gray-600">
                Разнообразни игри и дейности, които ще задържат вниманието на
                децата
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Семейна атмосфера
              </h3>
              <p className="text-gray-600">
                Пространство, където цялото семейство може да се наслаждава
                заедно
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-elegant text-gray-900 mb-6">
              Нашият детски кът
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Разгледайте нашите пространства, специално създадени за малките
              гости
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {childrenImages.map((image, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-elegant text-white mb-6">
            Доведете цялото семейство
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Нашият детски кът е готов да приеме вашите малки гости. Разгледайте
            нашето меню и поръчайте онлайн за цялото семейство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Разгледай менюто
            </a>
            <a
              href="/orders"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Поръчай онлайн
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
