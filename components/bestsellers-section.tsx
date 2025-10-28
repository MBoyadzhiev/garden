"use client";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

export function BestsellersSection() {
  const cards = [
    {
      title: "Пилешко филе",
      src: "/food/chicken.jpg",
    },
    {
      title: "Стек",
      src: "/food/steak.jpg",
    },
    {
      title: "Паста с миди",
      src: "/food/pasta-muscles.jpg",
    },
    {
      title: "Ризото",
      src: "/food/rizoto.jpg",
    },
    {
      title: "Фалафел",
      src: "/food/falafel.jpg",
    },
    {
      title: "Паста с каламари",
      src: "/food/pasta-calamari.jpg",
    },
    {
      title: "Снежанка",
      src: "/food/snowwhite.jpg",
    },
    {
      title: "Микс салата",
      src: "/food/mixed-salad.jpg",
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#D4C4B0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-4 font-sans">
            Нашите бестселъри
          </h2>
          <p className="text-xl lg:text-2xl text-black/80 font-light font-sans max-w-2xl mx-auto">
            Открийте най-обичаните ястия от нашето меню
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FocusCards cards={cards} />
        </motion.div>
      </div>
    </section>
  );
}
