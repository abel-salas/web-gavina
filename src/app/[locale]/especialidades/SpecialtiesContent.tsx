'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../../components/animations/AnimatedSection';
import { useState, useEffect } from 'react';
import { Dictionary } from '@/app/lib/dictionary.models';

// Interfaces para el contenido JSON
interface SpecialtyItem {
  id: string;
  name: string;
  description: string;
  isRecommended?: boolean;
  image: string;
}

interface SpecialtyCategory {
  id: string;
  name: string;
  description: string;
  order: number;
  items: SpecialtyItem[];
}

interface SpecialtiesData {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: SpecialtyCategory[];
}

interface SpecialtiesContentProps {
  locale: string;
  dict: Dictionary;
}

export default function SpecialtiesContent({ locale }: SpecialtiesContentProps) {
  const [specialtiesData, setSpecialtiesData] = useState<SpecialtiesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpecialtiesData = async () => {
      try {
        const data = await import(`../../translations/especialidades/${locale}.json`);
        setSpecialtiesData(data.default);
      } catch (error) {
        console.warn(`⚠️ No se pudo cargar especialidades para ${locale}, usando español:`, error);
        try {
          const fallbackData = await import(`../../translations/especialidades/es.json`);
          setSpecialtiesData(fallbackData.default);
        } catch (fallbackError) {
          console.error('⚠️ Error cargando datos de especialidades:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    loadSpecialtiesData();
  }, [locale]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando especialidades...</p>
        </div>
      </div>
    );
  }

  if (!specialtiesData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Error cargando especialidades</p>
        </div>
      </div>
    );
  }

  return (
    <main className="specialties-page">
      {/* Hero Section */}
      <section className="hero-section relative h-96 md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/home/paellas.jpg"
            alt="Especialidades del Restaurante Banys La Gavina"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {specialtiesData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {specialtiesData.hero.subtitle}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              {specialtiesData.hero.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Especialidades Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="space-y-16">
            {specialtiesData.categories.map((category) => (
              <StaggerItem key={category.id}>
                <div className="category-section">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {category.name}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Category Items */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="specialty-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        whileHover={{ y: -5 }}
                      >
                        {/* Image */}
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            quality={90}
                          />
                          {item.isRecommended && (
                            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              ⭐ Recomendado
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.name}
                          </h3>
                          
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>
    </main>
  );
}