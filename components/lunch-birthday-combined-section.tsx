"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconClock, IconCalendar } from "@tabler/icons-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { SketchButton } from "@/components/ui/sketch-button";
import Image from "next/image";
import Link from "next/link";

export function LunchBirthdayCombinedSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-20 px-4 rounded-2xl shadow-xl overflow-hidden">
      {/* Sparkles background for both sections */}
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
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 w-full max-w-7xl mx-auto items-start">
        {/* Celebrate Birthday Section (left) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-light text-black mb-6 font-sans"
          >
            Празнувай рожден ден с нас
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-black/80 mb-6 font-light font-sans max-w-xl"
          >
            Организирай незабравим рожден ден за твоето дете в Garden Bogoridi!
            Забавления, вкусна храна и специална детска зона.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-12">
            <Link href="/children">
              <SketchButton className="py-3 lg:py-4 text-base lg:text-lg font-semibold">
                Виж детския кът
              </SketchButton>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-[500px] aspect-[10/7]">
              <Image
                src="/restaurant/detski-kut.jpg"
                alt="Детски кът Garden Bogoridi"
                width={500}
                height={350}
                className="w-full h-full rounded-2xl shadow-2xl border-4 border-primary/10 object-cover"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary/30 to-primary/20 w-16 h-16 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Lunch Menu Section (right) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-light text-black mb-6 font-sans"
          >
            Обедно меню
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <Button variant="outline" size="lg" className="pointer-events-none">
              <IconCalendar className="w-5 h-5" />
              {new Date().toLocaleDateString("bg-BG", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Button>
            <Button variant="outline" size="lg" className="pointer-events-none">
              <IconClock className="w-5 h-5" />
              От 12:00 до 15:00
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-black/80 mb-12 font-light font-sans max-w-xl"
          >
            Разгледайте нашето разнообразно обедно меню с вкусни ястия,
            приготвени с най-свежите продукти и традиционни рецепти.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center w-full"
          >
            <div className="relative w-full max-w-[500px]">
              <div
                className="relative group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative transform hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-primary/10">
                    <Image
                      src="/lunch/lunch.jpg"
                      alt="Обедно меню - Garden Bogoridi"
                      width={500}
                      height={350}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-md rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-10 h-10 text-gray-800"
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
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute top-6 right-6 z-10"
            >
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="secondary"
                size="icon"
                className="rounded-full shadow-lg"
              >
                <IconX className="w-6 h-6" />
              </Button>
            </motion.div>
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
              <Image
                src="/lunch/lunch.jpg"
                alt="Обедно меню - Garden Bogoridi"
                width={1200}
                height={1200}
                className="w-full h-full max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
