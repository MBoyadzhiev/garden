"use client";
import { useEffect, useRef } from "react";
import { SketchButton } from "@/components/ui/sketch-button";

// Type definitions for Leaflet
interface LeafletMap {
  setView: (latlng: [number, number], zoom: number) => LeafletMap;
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
  // DivIcon is a marker for custom HTML icons in Leaflet
  // The actual implementation is handled by Leaflet internally
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

  useEffect(() => {
    // Load Leaflet (OpenStreetMap) - No API key required!
    const loadLeafletMap = () => {
      if (mapRef.current) {
        // Load Leaflet CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);

        // Load Leaflet JavaScript
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = () => {
          // Initialize map
          const map = window.L.map(mapRef.current!).setView(
            [42.49437370477089, 27.475594753681918],
            16
          );

          // Add OpenStreetMap tiles
          window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map);

          // Create custom marker icon
          const customIcon = window.L.divIcon({
            html: `
              <div style="
                width: 40px;
                height: 40px;
                background: #a8a29e;
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

          // Add marker
          const marker = window.L.marker(
            [42.49437370477089, 27.475594753681918],
            {
              icon: customIcon,
            }
          ).addTo(map);

          // Add popup
          marker.bindPopup(`
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">Garden Bogoridi</h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Ресторант с градина</p>
              <p style="margin: 0; color: #374151; font-size: 14px;">ул. Антим I 32, Бургас</p>
            </div>
          `);

          // Open popup by default
          marker.openPopup();
        };
        document.head.appendChild(script);
      }
    };

    // Load the map
    loadLeafletMap();
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-900 leading-tight mb-6">
              Къде да ни намерите
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Посетете ни в нашия уютен ресторант с градина в сърцето на Бургас.
              Лесно достъпни с кола или градски транспорт.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div
                  ref={mapRef}
                  className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
                  style={{ minHeight: "400px" }}
                />
                <div className="absolute inset-0 border-2 border-white rounded-lg pointer-events-none"></div>
              </div>
            </div>

            {/* Location Info */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stone-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Адрес
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      ул. Антим I 32, Бургас
                      <br />
                      Лесно достъпни с кола или градски транспорт
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stone-600"
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Работно време
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Понеделник - Неделя: 10:00 - 23:00</p>
                      <p className="text-sm text-gray-600">
                        *Работното време може да се променя по време на празници
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stone-600"
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Контакт
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <p>
                        <a
                          href="tel:+359876762053"
                          className="hover:text-stone-600 transition-colors"
                        >
                          +359 87 676 2053
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">
                        За резервации и въпроси
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/NMRjCaCSYi4jjBvp7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SketchButton className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold">
                    <svg
                      className="w-5 h-5"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
