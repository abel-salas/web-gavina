'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Route } from 'next';
import { AnimatedSection } from '../animations/AnimatedSection';
import { getLocalizedData } from '@/app/lib/localization';

export function ContactSection({ locale, contactHref }: { locale: string; contactHref: string }) {
  const { dict } = getLocalizedData(locale);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection direction="down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {dict.contact_section?.title}
            {dict.contact_section?.title2 && (
              <span>{dict.contact_section?.title2}</span>
            )}
          </h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {dict.contact_section?.subtitle}
          </p>
        </AnimatedSection>

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
              {dict.contact_section?.cta}
              <motion.span
                className="ml-3"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="material-icons-outlined restaurant">restaurant</span>
              </motion.span>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}