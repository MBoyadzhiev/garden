"use client";
import Image from "next/image";
import { SketchButton } from "@/components/ui/sketch-button";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";

export const Hero = () => {
  const foodImages = [
    "/restaurant/gradina.jpg",
    "/food/pasta-calamari.jpg",
    "/restaurant/interior.jpg",
    "/restaurant/detski2.jpg",
    "/restaurant/masi.jpg",
    "/restaurant/hora1.jpg",
  ];

  return (
    <div className="h-screen relative overflow-hidden">
      <ImagesSlider
        images={foodImages}
        className="h-full"
        overlay={<div className="absolute inset-0 bg-black/50 z-40" />}
        autoplay={true}
        direction="up"
      >
        {/* Content Overlay */}
        <div className="relative z-50 h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-0">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-white space-y-4 lg:space-y-8"
              >
                {/* Logo */}
                <div>
                  <div className="flex justify-start mt-8 lg:mt-16">
                    <Image
                      src="/logo-white-bg-cropped.png"
                      alt="Garden Bogoridi Logo"
                      width={260}
                      height={200}
                      className="object-contain max-w-full h-auto w-40 sm:w-48 lg:w-52 xl:w-26 2xl:w-80 2xl:h-60"
                      priority
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-md font-elegant">
                  Всяко ястие е история, всяка трапеза е спомен. Тук не
                  сервираме само храна - създаваме емоции и връзки, които
                  остават завинаги.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-6 items-center sm:items-start">
                  <a href="/menu" className="w-full sm:w-auto max-w-xs">
                    <SketchButton
                      className="w-full py-3 lg:py-4 text-base lg:text-lg font-semibold"
                      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                    >
                      Разгледай менюто
                    </SketchButton>
                  </a>
                  <div className="w-full sm:w-auto max-w-xs">
                    <SketchButton
                      className="w-full py-3 lg:py-4 text-base lg:text-lg font-semibold"
                      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                    >
                      Направи резервация
                    </SketchButton>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Restaurant Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative hidden lg:block"
              ></motion.div>
            </div>
          </div>
        </div>
      </ImagesSlider>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
