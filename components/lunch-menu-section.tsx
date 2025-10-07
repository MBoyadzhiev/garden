"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconX,
  IconClock,
  IconCalendar,
  IconChefHat,
} from "@tabler/icons-react";

export const LunchMenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-stone-50 to-white"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-stone-200/30 to-gray-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-gray-200/30 to-stone-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-stone-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <IconChefHat className="w-4 h-4" />
                Дневно меню
              </div>
              <h2 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-8">
                Обедно меню
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8"
            >
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <IconCalendar className="w-5 h-5 text-stone-600" />
                <p className="text-lg font-semibold text-gray-800">
                  {new Date().toLocaleDateString("bg-BG", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <IconClock className="w-5 h-5 text-stone-600" />
                <p className="text-lg font-semibold text-gray-800">
                  От 12:00 до 15:00
                </p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Разгледайте нашето разнообразно обедно меню с вкусни ястия,
              приготвени с най-свежите продукти и традиционни рецепти.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-stone-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              <div
                className="relative cursor-pointer transform hover:scale-105 transition-all duration-500"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/lunch/lunch.jpg"
                    alt="Обедно меню - Garden Bogoridi"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain transition-all duration-500 group-hover:brightness-110"
                    priority
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-700 to-stone-700 text-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Кликнете върху менюто за да го разгледате в пълен размер
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-stone-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
                <IconChefHat className="w-5 h-5" />
                Виж менюто
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 backdrop-blur-md bg-black/50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/20"
            >
              <IconX className="w-8 h-8" />
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
                className="w-full h-full max-w-full max-h-full object-contain rounded-2xl"
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
    </section>
  );
};
