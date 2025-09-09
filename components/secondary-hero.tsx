"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface SecondaryHeroProps {
  imageSrc: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export const SecondaryHero = ({
  imageSrc,
  height = "h-64",
  overlay = true,
  children,
}: SecondaryHeroProps) => {
  return (
    <div className={`${height} relative overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional Overlay */}
        {overlay && <div className="absolute inset-0 bg-black/50" />}
      </div>

      {/* Content */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};
