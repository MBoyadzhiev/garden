"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const LunchMenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-900 leading-tight mb-6">
              Обедно меню
            </h2>
            <div className="space-y-2 mb-6">
              <p className="text-lg font-medium text-gray-800">
                {new Date().toLocaleDateString("bg-BG", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-lg text-gray-600">От 12:00 до 15:00</p>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Разгледайте нашето разнообразно обедно меню с вкусни ястия,
              приготвени с най-свежите продукти и традиционни рецепти.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/lunch/lunch.jpg"
                  alt="Обедно меню - Garden Bogoridi"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto object-contain hover:shadow-xl transition-shadow duration-300"
                  priority
                />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Full Screen Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 z-50 backdrop-blur-md bg-white/20 flex items-center justify-center p-4"
                onClick={() => setIsModalOpen(false)}
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 text-gray-800 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
                >
                  <IconX className="w-6 h-6" />
                </motion.button>

                <motion.div
                  initial={{ scale: 0.3, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.3, opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.1,
                  }}
                  className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src="/lunch/lunch.jpg"
                    alt="Обедно меню - Garden Bogoridi"
                    className="w-full h-full max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
