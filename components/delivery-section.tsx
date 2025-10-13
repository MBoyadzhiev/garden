"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { SketchButton } from "@/components/ui/sketch-button";

export const DeliverySection = () => {
  return (
    <section
      id="delivery"
      className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden min-h-screen"
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#D4C4B0"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-light text-gray-900 leading-tight">
              Доставяме до вашия дом
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Насладете се на вкусовете на Garden Bogoridi в комфорта на вашия
              дом. Свежи ястия, приготвени с любов, директно до вашата врата.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  30-45
                </div>
                <div className="text-gray-600">минути</div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  Безплатна
                </div>
                <div className="text-gray-600">доставка</div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">поръчки</div>
              </div>
            </div>

            <div className="pt-12">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-medium text-gray-800">
                  Телефон за доставки
                </h3>
                <a href="tel:+359876762053">
                  <SketchButton className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +359 87 6762053
                  </SketchButton>
                </a>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="pt-12">
              <div className="max-w-sm mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="text-center">
                    <p className="text-gray-600">
                      Очаквайте скоро и он-лайн поръчки
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
