"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  sparkleColor?: string;
  sparkleSize?: number;
  sparkleCount?: number;
}

export const Sparkles: React.FC<SparklesProps> = ({
  children,
  className = "",
  sparkleColor = "#FFD700",
  sparkleSize = 4,
  sparkleCount = 20,
}) => {
  const [sparkles, setSparkles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, [sparkleCount]);

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: `${sparkleSize}px`,
              height: `${sparkleSize}px`,
              backgroundColor: sparkleColor,
              boxShadow: `0 0 ${sparkleSize * 2}px ${sparkleColor}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
