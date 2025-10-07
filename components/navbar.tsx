"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SketchButton } from "@/components/ui/sketch-button";
import { ReservationModal } from "@/components/reservation-modal";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Debug: Log when modal state changes
  useEffect(() => {
    console.log("Modal state changed:", isReservationModalOpen);
  }, [isReservationModalOpen]);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Make navbar transparent when scrolled less than 100px (over hero section)
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Меню", href: "/menu" },
    { name: "За нас", href: "#about" },
    { name: "Кетъринг", href: "#catering" },
    // { name: "Резервации", href: "#reservations" },
    { name: "Галерия", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent backdrop-blur-none border-b border-transparent"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
            >
              {/* Show logo only when NOT on main page */}
              {!isHomePage && (
                <div className="w-30 h-30 flex items-center justify-center">
                  <Image
                    src={isScrolled ? "/bogoridi-bg.png" : "/logo-white-bg.png"}
                    alt="Garden Bogoridi Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              <div className="hidden sm:block ml-36">
                <h1
                  className={`text-2xl tracking-wide font-elegant transition-colors duration-300 ${
                    isScrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  GARDEN
                </h1>
                <p
                  className={`text-sm -mt-1 font-light tracking-wider font-elegant transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  BOGORIDI
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="hidden md:flex items-center space-x-4 mr-16"
              style={{ pointerEvents: "auto" }}
            >
              <a href="#delivery">
                <SketchButton>Поръчай</SketchButton>
              </a>
              <button
                onClick={() => {
                  console.log("Reservation button clicked!");
                  setIsReservationModalOpen(true);
                }}
                onMouseDown={() => {
                  console.log("Reservation button mouse down!");
                }}
                onMouseUp={() => {
                  console.log("Reservation button mouse up!");
                }}
                className="rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer"
                style={{
                  pointerEvents: "auto",
                  zIndex: 60,
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                }}
              >
                Направи резервация
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white hover:text-gray-200"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden py-6 px-4 transition-all duration-300 ease-in-out bg-white rounded-b-2xl shadow-lg ${
                isScrolled
                  ? "border-t border-gray-200"
                  : "border-t border-gray-200"
              }`}
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col items-center space-y-3 pt-4">
                  <a href="#delivery" className="w-full max-w-xs">
                    <SketchButton className="w-full">Поръчка</SketchButton>
                  </a>
                  <button
                    onClick={() => {
                      console.log("Mobile reservation button clicked!");
                      setIsReservationModalOpen(true);
                    }}
                    onMouseDown={() => {
                      console.log("Mobile reservation button mouse down!");
                    }}
                    onMouseUp={() => {
                      console.log("Mobile reservation button mouse up!");
                    }}
                    className="w-full max-w-xs rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 cursor-pointer"
                    style={{
                      pointerEvents: "auto",
                      zIndex: 60,
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Направи резервация
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Reservation Modal - Outside nav to avoid z-index stacking context issues */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};
