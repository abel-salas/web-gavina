'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection } from '../animations/AnimatedSection';

interface LocationSectionProps {
  title: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  subtitle?: string;
  description?: string;
  descript_seo_1?: string;
  descript_seo?: string;
}

export function LocationSection({
  title,
  backgroundImage,
  backgroundAlt,
  subtitle,
  description,
  descript_seo_1,
  descript_seo
}: LocationSectionProps) {
  return (
    <section className="location-section py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <AnimatedSection direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl text-gray-600 mb-4 font-medium">
                  {subtitle}
                </p>
              )}
              {descript_seo && (
                <p className="text-xl text-gray-600 mb-4 font-medium">
                  {descript_seo}
                </p>
              )}
              {descript_seo_1 && (
                <p className="text-xl text-gray-600 mb-4 font-medium">
                  {descript_seo_1}
                </p>
              )}
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-xl text-gray-700">
                {description || "Ubicado en el corazón de la costa mediterránea, nuestro restaurante ofrece vistas espectaculares al mar mientras disfrutas de nuestra exquisita gastronomía."}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" delay={0.3}>
            <motion.div
              className="aspect-[4/3] rounded-2xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {backgroundImage ? (
                <Image
                  src={backgroundImage}
                  alt={backgroundAlt || 'Vista del restaurante'}
                  fill
                  className="object-cover"
                  quality={90}
                />
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">
                        <span className="material-icons-outlined" style={{ fontSize: '5rem' }}>place</span>
                      </div>
                      <p className="text-xl font-semibold">Vista del Restaurante</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
