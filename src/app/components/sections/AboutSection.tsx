'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';

interface AboutSectionProps {
  title: string;
  description: string;
}

export function AboutSection({ title, description }: AboutSectionProps) {
  const features = [
    {
      icon: "🌿",
      title: "Ingredientes Frescos",
      description: "Seleccionamos los mejores productos locales cada día"
    },
    {
      icon: "👨‍🍳",
      title: "Chef Experto",
      description: "Más de 20 años de experiencia en cocina mediterránea"
    },
    {
      icon: "🏛️",
      title: "Tradición Familiar",
      description: "Recetas transmitidas de generación en generación"
    },
    {
      icon: "🌊",
      title: "Ambiente Único",
      description: "Vistas al mar en un entorno acogedor y elegante"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <AnimatedSection direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {description}
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-3xl flex-shrink-0">
                      {feature.icon}
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
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-6xl">
                    🍽️
                  </div>
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