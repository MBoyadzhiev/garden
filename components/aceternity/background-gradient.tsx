"use client";
import { motion } from "framer-motion";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const gradientVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <motion.div
      className={`relative ${containerClassName}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-size-200 ${className}`}
        variants={animate ? gradientVariants : undefined}
        animate={animate ? "animate" : "initial"}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
