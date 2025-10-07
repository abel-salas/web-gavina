'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';
import { CONTACT_INFO } from '../../lib/contact-info';

interface LocationSectionProps {
  title: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  useContactInfo?: boolean;
  subtitle?: string;
  description?: string;
}

export function LocationSection({ title, backgroundImage, backgroundAlt, useContactInfo = false, subtitle, description }: LocationSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-xl text-gray-700 mb-8">
                {description || "Ubicado en el corazón de la costa mediterránea, nuestro restaurante ofrece vistas espectaculares al mar mientras disfrutas de nuestra exquisita gastronomía."}
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4">
              {(useContactInfo ? [
                { icon: "📍", text: CONTACT_INFO.address },
                { icon: "🏖️", text: CONTACT_INFO.location },
                { icon: "🚗", text: CONTACT_INFO.parking },
                { icon: "📞", text: CONTACT_INFO.phone }
              ] : [
                { icon: "📍", text: CONTACT_INFO.address },
                { icon: "🏖️", text: CONTACT_INFO.location },
                { icon: "�", text: CONTACT_INFO.parking },
                { icon: "🌊", text: "Vista panorámica al Mediterráneo" }
              ]).map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                      <div className="text-8xl mb-4">🏛️</div>
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

export function ContactSection({ title, contactHref }: { title: string; contactHref: string }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            ¿Listo para vivir una experiencia gastronómica única? Reserva tu mesa y déjanos sorprenderte.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: "📞", title: "Llámanos", info: CONTACT_INFO.phone, action: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
            { icon: "✉️", title: "Email", info: CONTACT_INFO.email, action: `mailto:${CONTACT_INFO.email}` },
            { icon: "🕐", title: "Horario", info: CONTACT_INFO.hours.es, action: null }
          ].map((contact, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                whileHover={{ y: -5, backgroundColor: "#374151" }}
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                {contact.action ? (
                  <a href={contact.action} className="text-blue-400 hover:text-blue-300">
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-gray-300">{contact.info}</p>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection direction="scale" delay={0.6}>
          <motion.div
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-xl rounded-full shadow-2xl cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={contactHref as Route}
              className="contents"
            >
              Reservar Mesa
              <motion.span
                className="ml-3"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍽️
              </motion.span>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}