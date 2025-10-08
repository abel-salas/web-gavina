'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Route } from 'next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';

interface MenuHighlightProps {
  title: string;
  subtitle?: string;
  specialties: Array<{
    name: string;
    description: string;
    price: string;
  }>;
  menuHref: string;
  viewMenuText?: string;
  specialtyImages?: {
    arroces?: string;
    mariscos?: string;
    pescados?: string;
    carnes?: string;
  };
}

export function MenuHighlightSection({ title, subtitle, specialties, menuHref, viewMenuText, specialtyImages }: MenuHighlightProps) {
  // Mapear los datos de especialidades a un formato con imágenes
  const dishes = specialties.map((specialty, index) => {
    const fallbackImages = [
      "/images/home/paellas.jpg",
      "/images/home/mariscos.jpg",
      "/images/home/pescado.jpg",
      "/images/home/carne_brasa.jpg"
    ];

    const imageKeys = ['arroces', 'mariscos', 'pescados', 'carnes'] as const;
    const backgroundImage = specialtyImages?.[imageKeys[index]] || fallbackImages[index];

    return {
      name: specialty.name,
      description: specialty.description,
      price: specialty.price,
      backgroundImage,
      fallbackImage: fallbackImages[index]
    };
  });

  return (
    <section className="menu-highlight-section py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection direction="down">
            <h2 className="text-5xl md:text-6xl font-parisienne mb-6">
              {title}
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle || "Descubre algunos de nuestros platos más populares, elaborados con pasión y los mejores ingredientes"}
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <Image
                    src={dish.backgroundImage}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {dish.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-400">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection direction="scale" delay={0.6}>
          <div className="text-center">
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-full shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={menuHref as Route}
                className="contents"
              >
                {viewMenuText || 'Ver Menú Completo'}
                <motion.span
                  className="ml-2 flex items-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="material-icons-outlined">arrow_forward</span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}