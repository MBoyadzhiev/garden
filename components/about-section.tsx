import Image from "next/image";
import Link from "next/link";
import { SketchButton } from "@/components/ui/sketch-button";

export const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
            <div className="space-y-8 flex flex-col justify-center px-8 py-12 text-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900 leading-tight">
                  За нас
                </h2>
                <div className="flex justify-center">
                  <Image
                    src="/bogoridi-bg.png"
                    alt="Garden Bogoridi Logo"
                    width={200}
                    height={120}
                    className="object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Създаваме незабравими моменти, където всяко ястие разказва
                    история, а всяка вечер става приказка. Това не е просто
                    ресторант - това е място за споделяне на радост, любов и
                    истински вкусове.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-800 text-center">
                      Уникални предимства
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Две големи външни градини
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Вътрешен и външен детски кът
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Седмични тематични събития
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Специално обедно меню
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/menu">
                      <SketchButton className="w-full sm:w-auto px-6 py-3 text-base font-semibold">
                        Разгледай менюто
                      </SketchButton>
                    </Link>
                    <a href="#delivery">
                      <SketchButton className="w-full sm:w-auto px-6 py-3 text-base font-semibold">
                        Поръчай
                      </SketchButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <Image
                src="/restaurant/nosht-gradina.jpg"
                alt="Garden Bogoridi Restaurant - Night Garden"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
