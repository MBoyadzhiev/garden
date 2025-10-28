"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconClock, IconX } from "@tabler/icons-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SketchButton } from "@/components/ui/sketch-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getGlobalSettings, getStrapiImageUrl } from "@/lib/strapi";

export function LunchSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ mouseX: 0, mouseY: 0, tx: 0, ty: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lunchImageUrl, setLunchImageUrl] = useState("/lunch/lunch.jpg"); // fallback image

  // Fetch lunch image from Strapi
  useEffect(() => {
    const fetchLunchImage = async () => {
      try {
        console.log("Fetching lunch image from Strapi...");
        const globalData = await getGlobalSettings();
        console.log("Global data:", JSON.stringify(globalData, null, 2));

        if (globalData?.lunchMenuImage) {
          const imageUrl = getStrapiImageUrl(globalData.lunchMenuImage);
          console.log("Strapi image URL:", imageUrl);
          if (imageUrl) {
            setLunchImageUrl(imageUrl);
            console.log(
              "✅ Successfully loaded lunch image from Strapi:",
              imageUrl
            );
          }
        } else {
          console.log("❌ No lunch menu image found in Strapi, using fallback");
        }
      } catch (error) {
        console.log("❌ Failed to fetch lunch image from Strapi:", error);
        console.log("Using fallback image:", "/lunch/lunch.jpg");
      }
    };

    fetchLunchImage();
  }, []);

  // simple linear interpolation
  const lerp = (a: number, b: number, n = 0.12) => a + (b - a) * n;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointer = (ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = (ev.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const cy = (ev.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      stateRef.current.mouseX = cx;
      stateRef.current.mouseY = cy;
    };

    el.addEventListener("pointermove", onPointer, { passive: true });

    let rafId = 0;
    const loop = () => {
      const s = stateRef.current;
      s.tx = lerp(s.tx, s.mouseX, 0.14);
      s.ty = lerp(s.ty, s.mouseY, 0.14);

      const nodes = el.querySelectorAll<HTMLElement>("[data-layer]");
      nodes.forEach((node) => {
        const depth = Number(node.dataset.depth) || 0;
        const moveX = s.tx * (depth * 12);
        const moveY = s.ty * (depth * 12);
        const rotY = s.tx * depth * 2;
        const rotX = -s.ty * depth * 2;
        node.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(rafId);
    };
  }, []);

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
    <section
      className="relative py-20 px-4 bg-gray-900"
      style={{ perspective: 1200 }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#D4C4B0"
        />
      </div>

      {/* Main Container with Border */}
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto bg-[#F5F0E6] rounded-lg overflow-hidden z-10"
      >
        {/* Decorative Elements with Parallax */}
        <div
          data-layer
          data-depth="2"
          className="absolute top-4 right-4 w-16 h-16 opacity-20 will-change-transform"
        >
          <div className="w-full h-full bg-[#8B4545] rounded-full"></div>
        </div>

        <div
          data-layer
          data-depth="3"
          className="absolute bottom-4 left-4 w-12 h-12 opacity-15 will-change-transform"
        >
          <div className="w-full h-full bg-[#8B4545] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row min-h-[500px]">
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2 relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ amount: 0.2 }}
          >
            <div
              data-layer
              data-depth="1"
              className="absolute inset-0 will-change-transform flex items-center justify-center"
            >
              <Image
                src={lunchImageUrl}
                alt="Обедно меню - Garden Bogoridi"
                width={500}
                height={350}
                className="object-contain max-w-full max-h-full"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="lg:w-1/2 p-12 flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            viewport={{ amount: 0.2 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-elegant text-black leading-tight"
              >
                ОБЕДНО МЕНЮ
              </motion.h2>

              {/* Date and Time */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <div className="bg-white border border-[#8B4545] rounded-lg px-4 py-2 flex items-center gap-2">
                  <IconCalendar className="w-5 h-5 text-[#8B4545]" />
                  <span className="text-black font-medium">
                    {new Date().toLocaleDateString("bg-BG", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="bg-white border border-[#8B4545] rounded-lg px-4 py-2 flex items-center gap-2">
                  <IconClock className="w-5 h-5 text-[#8B4545]" />
                  <span className="text-black font-medium">
                    От 12:00 до 15:00
                  </span>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-black font-medium"
              >
                Разгледайте нашето разнообразно обедно меню с вкусни ястия!
              </motion.p>

              {/* Body Text */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 text-lg text-black leading-relaxed"
              >
                <p>
                  Приготвени с най-свежите продукти и традиционни рецепти. Всяко
                  ястие е внимателно подбрано да задоволи вкуса ви.
                </p>

                <p>
                  Нашето обедно меню предлага перфектен баланс между класически
                  български ястия и модерни кулинарни интерпретации.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 py-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Свежи
                  </div>
                  <div className="text-sm text-black/70">продукти</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Традиционни
                  </div>
                  <div className="text-sm text-black/70">рецепти</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Разнообразно
                  </div>
                  <div className="text-sm text-black/70">меню</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <div
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <SketchButton className="inline-flex items-center gap-3">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    Разгледай менюто
                  </SketchButton>
                </div>
              </motion.div>
            </motion.div>
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
                src={lunchImageUrl}
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
