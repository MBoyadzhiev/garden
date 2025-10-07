"use client";
import Image from "next/image";
import Link from "next/link";
import { SketchButton } from "@/components/ui/sketch-button";
import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Fixed Background Image - Only when section is in view */}
      <div
        className={`fixed inset-0 w-full h-screen z-0 transition-opacity duration-1000 ease-in-out ${
          isInView ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/restaurant/interior.jpg"
          alt="Garden Bogoridi Restaurant - Interior"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Scrollable Text Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 space-y-8 transition-all duration-1000 ease-out transform ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight justify-center">
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
              </div>

              <div className="space-y-6 text-m lg:text-m text-gray-700 leading-relaxed text-center">
                <p>Ние сме ресторант за пица с квас в сърцето на града.</p>

                <p>
                  Квасът е биещото сърце на нашия ресторант. Бавно ферментираща
                  се брашно, на път да се превърне в пица.
                </p>

                <p>
                  Вярваме в снабдяването с занаятчийски продукти - местни,
                  когато са налични, но винаги вкусни, устойчиви и натурални.
                  Избираме продукти, които обичаме, и сме прозрачни за тях.
                  Помагаме на нашите гости да се борят срещу алчната хранителна
                  индустрия с всяка хапка – и се забавляваме страхотно, докато
                  го правим!
                </p>

                <p>
                  Не ни разбирайте погрешно. Да изпиеш кани Просеко, Берлински
                  Битърс и да похапнеш мега вкусна пица от ферментирано тесто -
                  определено все още е виновно удоволствие! Но не е ли чудесно
                  да знаеш, че някой друг печели от твоите грехове?
                </p>

                <p>
                  Наричаме това принципът на `&quot;греховната печалба`&quot;.
                  Ти се забавляваш и се генерират пари за качествени
                  производители.
                </p>

                <p>
                  Нашият ресторант ти позволява да помагаш - не съвсем насън -
                  но с храна и напитки.
                </p>

                <p className="text-lg lg:text-xl font-medium text-gray-900">
                  Елате и се присъединете към нашата малка революция.
                </p>

                <p className="text-xl lg:text-2xl font-semibold text-gray-900">
                  Нека се храним и пием за доброто.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200 text-center">
                <h3 className="text-xl lg:text-2xl font-medium text-gray-800">
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
                    <span className="text-gray-700">Специално обедно меню</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center justify-center">
                <Link href="/menu" className="w-full sm:w-auto max-w-xs">
                  <SketchButton className="w-full px-3 sm:px-6 py-3 text-base font-semibold">
                    Разгледай менюто
                  </SketchButton>
                </Link>
                <a href="#delivery" className="w-full sm:w-auto max-w-xs">
                  <SketchButton className="w-full px-3 sm:px-6 py-3 text-base font-semibold">
                    Поръчай
                  </SketchButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
