'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';

export function GallerySection({ title }: { title: string }) {
  const images = [
    { emoji: "🥘", title: "Paella Perfecta" },
    { emoji: "🍤", title: "Mariscos Frescos" },
    { emoji: "🥩", title: "Carnes Premium" },
    { emoji: "🍮", title: "Postres Caseros" },
    { emoji: "🍷", title: "Vinos Selectos" },
    { emoji: "🌅", title: "Vistas al Mar" }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedSection direction="down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-6xl mb-4">{image.emoji}</div>
                <h3 className="text-lg font-semibold text-center px-4">
                  {image.title}
                </h3>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
