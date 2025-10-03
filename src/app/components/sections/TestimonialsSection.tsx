'use client';

import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../animations/AnimatedSection';
import { useState } from 'react';

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  testimonials: Array<{
    name: string;
    comment: string;
  }>;
}

export function TestimonialsSection({ title, subtitle, testimonials }: TestimonialsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsWithAvatars = testimonials.map((testimonial, index) => ({
    name: testimonial.name,
    role: testimonial.name,
    text: testimonial.comment,
    avatar: ["👩‍🦰", "👨‍🍳", "👨‍💼"][index % 3],
    rating: 5
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedSection direction="down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Descubre lo que nuestros clientes dicen sobre su experiencia gastronómica
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonial principal */}
        <AnimatedSection direction="scale" delay={0.3}>
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              key={activeTestimonial}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-6">
                {testimonialsWithAvatars[activeTestimonial].avatar}
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonialsWithAvatars[activeTestimonial].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                &ldquo;{testimonialsWithAvatars[activeTestimonial].text}&rdquo;
              </blockquote>

              <div>
                              <h4 className="font-bold text-gray-900">
                {testimonialsWithAvatars[activeTestimonial].name}
              </h4>
              <p className="text-gray-600">
                {testimonialsWithAvatars[activeTestimonial].role}
              </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Navegación de testimonios */}
        <StaggerContainer className="flex justify-center space-x-4">
          {testimonialsWithAvatars.map((_, index) => (
            <StaggerItem key={index}>
              <motion.button
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats section */}
        <div className="mt-20">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clientes Felices", icon: "😊" },
              { number: "4.9", label: "Puntuación Media", icon: "⭐" },
              { number: "15", label: "Años de Experiencia", icon: "🏆" },
              { number: "50+", label: "Platos Únicos", icon: "🍽️" }
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center bg-white rounded-2xl p-6 shadow-lg"
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}