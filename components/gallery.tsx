"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  title?: string;
  description?: string;
}

export const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Split images into 4 columns for masonry layout
  const columns = 4;
  const imagesPerColumn = Math.ceil(images.length / columns);

  const imageColumns = Array.from({ length: columns }, (_, columnIndex) => {
    const startIndex = columnIndex * imagesPerColumn;
    const endIndex = Math.min(startIndex + imagesPerColumn, images.length);
    return images.slice(startIndex, endIndex);
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        ></motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageColumns.map((columnImages, columnIndex) => (
            <div key={columnIndex} className="grid gap-4">
              {columnImages.map((imageSrc, imageIndex) => (
                <motion.div
                  key={`${columnIndex}-${imageIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: columnIndex * 0.1 + imageIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(imageSrc)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={imageSrc}
                      alt={`Gallery image ${columnIndex}-${imageIndex}`}
                      width={400}
                      height={600}
                      className="h-auto max-w-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 backdrop-blur-md bg-white/20 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-gray-800 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Full-screen image */}
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
                src={selectedImage}
                alt="Full screen gallery image"
                width={1200}
                height={800}
                className="w-full h-full max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                priority
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
