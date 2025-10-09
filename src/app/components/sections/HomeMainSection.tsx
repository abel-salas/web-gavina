'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '../animations/AnimatedSection';
import { LogoText } from '../LogoText';
import Image from 'next/image';
import Link from 'next/link';
import type { Route } from 'next';

interface HomeMainSectionProps {
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function HomeMainSection({ subtitle, description, ctaText, ctaHref, backgroundImage, backgroundAlt }: HomeMainSectionProps) {
  return (
    <section className="home-main-section relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <div className="absolute inset-0 -top-16">
          <Image
            src={backgroundImage}
            alt={backgroundAlt || 'Hero background'}
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high"
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black">
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, #2563eb 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      )}

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-8 h-8 bg-green-400 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <AnimatedSection direction="down" delay={0.2}>
          {/* Usando el texto SVG extraído del logo original */}
          <motion.div
            className="w-full max-w-xl mx-auto mb-6"
            style={{
              filter: "drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))",
            }}
          >
            <LogoText className="w-logo-home-section" />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <p className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-8 font-light">
            {subtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={0.6}>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        {ctaText && ctaHref && (
          <AnimatedSection direction="scale" delay={0.8}>
            <Link href={ctaHref as Route}>
              <motion.div
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-900 text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </AnimatedSection>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}