"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { SketchButton } from "@/components/ui/sketch-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

export const DeliverySection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ mouseX: 0, mouseY: 0, tx: 0, ty: 0 });

  // simple linear interpolation
  const lerp = (a: number, b: number, n = 0.12) => a + (b - a) * n;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointer = (ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      // center-based coordinates - range roughly [-1, 1]
      const cx = (ev.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const cy = (ev.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      stateRef.current.mouseX = cx;
      stateRef.current.mouseY = cy;
    };

    // touch fallback — pointer works for touch on modern browsers
    el.addEventListener("pointermove", onPointer, { passive: true });

    let rafId = 0;
    const loop = () => {
      const s = stateRef.current;
      // smooth the target
      s.tx = lerp(s.tx, s.mouseX, 0.14);
      s.ty = lerp(s.ty, s.mouseY, 0.14);

      // apply transforms to each layer element
      const nodes = el.querySelectorAll<HTMLElement>("[data-layer]");
      nodes.forEach((node) => {
        const depth = Number(node.dataset.depth) || 0;
        // depth scales how much this layer moves
        const moveX = s.tx * (depth * 12); // px
        const moveY = s.ty * (depth * 12);
        // subtle rotate for depth
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

  return (
    <section
      id="delivery"
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
                src="/food/pasta-calamari.jpg"
                alt="Garden Bogoridi Delivery"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Overlay for better text contrast if needed */}
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
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-elegant text-black leading-tight">
                ДОСТАВКА ДО ДОМА
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-black font-medium">
                Храна? Започни деня си подобаващо!
              </p>

              {/* Body Text */}
              <div className="space-y-4 text-lg text-black leading-relaxed">
                <p>
                  Всяка поръчка е история, разказана с грижа и внимание към
                  детайла. Създаваме моменти от първия аромат на прясно сготвени
                  ястия до последната хапка.
                </p>

                <p>
                  Нашето внимателно подбрано меню обхваща от класически
                  български ястия до иновативни специалитети, приготвени с
                  най-добрите продукти от цял свят.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    30-45
                  </div>
                  <div className="text-sm text-black/70">минути</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Безплатна
                  </div>
                  <div className="text-sm text-black/70">доставка</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-black/70">поръчки</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="tel:+359876762053">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    За Garden Bogoridi доставка
                  </SketchButton>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
