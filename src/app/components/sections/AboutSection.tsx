'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';

interface AboutFeature {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  features?: AboutFeature[];
  defaultFeatures?: AboutFeature[];
}

export function AboutSection({ title, subtitle, description, backgroundImage, backgroundAlt, features, defaultFeatures }: AboutSectionProps) {
  // Usar features proporcionadas, o defaultFeatures, o array vacío como último recurso
  const displayFeatures = features && features.length > 0
    ? features
    : defaultFeatures && defaultFeatures.length > 0
      ? defaultFeatures
      : [];

  return (
    <section className="about-section py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Título y subtítulo y descripción entrados al 100% */}
        <div className="text-center mb-16">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-blue-600 mb-4 font-medium">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
          </AnimatedSection>
        </div>

        {/* Grid de 2 columnas para contenido e imagen */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido  y features */}
          <div>


            <StaggerContainer className="space-y-6">
              {displayFeatures.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-3xl flex-shrink-0 text-blue-600">
                      <span className="material-icons-outlined text-4xl">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Imagen con animación */}
          <div className="relative">
            <AnimatedSection direction="left" delay={0.3}>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                  {backgroundImage ? (
                    <Image
                      src={backgroundImage}
                      alt={backgroundAlt || 'Historia del restaurante'}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-6xl">
                      🍽️
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Elementos decorativos */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 z-0"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-15 z-0"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}