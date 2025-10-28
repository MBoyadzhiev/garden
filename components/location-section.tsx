"use client";
import { useEffect, useRef } from "react";
import { SketchButton } from "@/components/ui/sketch-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";

// Type definitions for Leaflet
interface LeafletMap {
  setView: (latlng: [number, number], zoom: number) => LeafletMap;
  remove: () => void;
}

interface LeafletTileLayer {
  addTo: (map: LeafletMap) => LeafletTileLayer;
}

interface LeafletMarker {
  addTo: (map: LeafletMap) => LeafletMarker;
  bindPopup: (content: string) => LeafletMarker;
  openPopup: () => void;
}

interface LeafletDivIcon {
  readonly _leaflet_id?: number;
}

interface TileLayerOptions {
  maxZoom?: number;
  attribution?: string;
}

interface DivIconOptions {
  html?: string;
  className?: string;
  iconSize?: [number, number];
  iconAnchor?: [number, number];
}

interface MarkerOptions {
  icon?: LeafletDivIcon;
}

declare global {
  interface Window {
    L: {
      map: (element: HTMLElement) => LeafletMap;
      tileLayer: (url: string, options: TileLayerOptions) => LeafletTileLayer;
      divIcon: (options: DivIconOptions) => LeafletDivIcon;
      marker: (
        latlng: [number, number],
        options: MarkerOptions
      ) => LeafletMarker;
    };
  }
}

export const LocationSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const isMapLoadedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ mouseX: 0, mouseY: 0, tx: 0, ty: 0 });

  // simple linear interpolation
  const lerp = (a: number, b: number, n = 0.12) => a + (b - a) * n;

  // Parallax effect
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

  // Map initialization
  useEffect(() => {
    if (isMapLoadedRef.current || !mapRef.current) {
      return;
    }

    const loadLeafletMap = () => {
      if (mapRef.current && !isMapLoadedRef.current) {
        if (window.L) {
          initializeMap();
          return;
        }

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = () => {
          initializeMap();
        };
        document.head.appendChild(script);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || isMapLoadedRef.current || !window.L) {
        return;
      }

      try {
        if (mapRef.current.hasChildNodes()) {
          mapRef.current.innerHTML = "";
        }

        const map = window.L.map(mapRef.current).setView(
          [42.49437370477089, 27.475594753681918],
          16
        );

        mapInstanceRef.current = map;
        isMapLoadedRef.current = true;

        window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        const customIcon = window.L.divIcon({
          html: `
            <div style="
              width: 40px;
              height: 40px;
              background: #8B4545;
              border: 2px solid #ffffff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          `,
          className: "custom-marker",
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        });

        const marker = window.L.marker(
          [42.49437370477089, 27.475594753681918],
          {
            icon: customIcon,
          }
        ).addTo(map);

        marker.bindPopup(`
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">Garden Bogoridi</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Ресторант с градина</p>
            <p style="margin: 0; color: #374151; font-size: 14px;">ул. Антим I 32, Бургас</p>
          </div>
        `);

        marker.openPopup();
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    loadLeafletMap();

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (error) {
          console.error("Error removing map:", error);
        }
        mapInstanceRef.current = null;
        isMapLoadedRef.current = false;
      }
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
          {/* Left Side - Map */}
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
              <div
                ref={mapRef}
                className="w-full h-full"
                style={{ minHeight: "500px" }}
              />
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
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
                КЪДЕ ДА НИ НАМЕРИТЕ
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-black font-medium"
              >
                Посетете ни в нашия уютен ресторант с градина в сърцето на
                Бургас.
              </motion.p>

              {/* Location Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 text-lg text-black leading-relaxed"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#8B4545] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Адрес:</span> ул. Антим I
                    32, Бургас
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#8B4545] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Работно време:</span>{" "}
                    Понеделник - Неделя: 10:00 - 23:00
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#8B4545] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <div>
                    <span className="font-semibold">Телефон:</span>
                    <a
                      href="tel:+359876762053"
                      className="ml-1 hover:text-[#8B4545] transition-colors"
                    >
                      +359 87 676 2053
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 py-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Лесно
                  </div>
                  <div className="text-sm text-black/70">достъпни</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Градски
                  </div>
                  <div className="text-sm text-black/70">транспорт</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Паркинг
                  </div>
                  <div className="text-sm text-black/70">наоколо</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-elegant text-black mb-1">
                    Централно
                  </div>
                  <div className="text-sm text-black/70">местоположение</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="https://maps.app.goo.gl/NMRjCaCSYi4jjBvp7"
                  target="_blank"
                  rel="noopener noreferrer"
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Отвори в Google Maps
                  </SketchButton>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
