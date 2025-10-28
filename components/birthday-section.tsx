"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SketchButton } from "@/components/ui/sketch-button";
import Image from "next/image";
import Link from "next/link";

export function BirthdaySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ mouseX: 0, mouseY: 0, tx: 0, ty: 0 });

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
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src="/restaurant/detski-kut.jpg"
                alt="Детски кът Garden Bogoridi"
                fill
                className="object-cover"
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
                ПРАЗНУВАЙ РОЖДЕН ДЕН
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-black font-medium"
              >
                Организирай незабравим рожден ден за твоето дете в Garden
                Bogoridi!
              </motion.p>

              {/* Body Text */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 text-lg text-black leading-relaxed"
              >
                <p>
                  Забавления, вкусна храна и специална детска зона. Създаваме
                  моменти, които децата ще помнят завинаги с нашата внимателно
                  подбрана програма.
                </p>

                <p>
                  Нашият детски кът предлага безопасна и забавна среда за всяка
                  възраст, докато родителите се наслаждават на вкусна храна в
                  спокойна атмосфера.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 py-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Безопасна
                  </div>
                  <div className="text-sm text-black/70">среда</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Забавления
                  </div>
                  <div className="text-sm text-black/70">за деца</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Вкусна
                  </div>
                  <div className="text-sm text-black/70">храна</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Специална
                  </div>
                  <div className="text-sm text-black/70">зона</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Link href="/children">
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Виж детския кът
                  </SketchButton>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
