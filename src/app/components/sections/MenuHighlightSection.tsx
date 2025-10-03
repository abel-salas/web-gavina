'use client';

import { motion } from 'framer-motion';
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
}

export function MenuHighlightSection({ title, subtitle, specialties, menuHref }: MenuHighlightProps) {
  // Mapear los datos de especialidades a un formato con iconos y colores
  const dishes = specialties.map((specialty, index) => {
    const icons = ["🥘", "�", "🐟", "🍛"];
    const colors = [
      "from-orange-400 to-red-500",
      "from-blue-400 to-cyan-500", 
      "from-green-400 to-teal-500",
      "from-gray-600 to-gray-800"
    ];
    
    return {
      name: specialty.name,
      description: specialty.description,
      price: specialty.price,
      image: icons[index % icons.length],
      color: colors[index % colors.length]
    };
  });

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection direction="down">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Descubre algunos de nuestros platos más populares, elaborados con pasión y los mejores ingredientes
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${dish.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                  {dish.image}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                  {dish.description}
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-yellow-400">
                    {dish.price}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection direction="scale" delay={0.6}>
          <div className="text-center">
            <motion.a
              href={menuHref}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-full shadow-xl hover:shadow-yellow-500/25 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Menú Completo
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🍴
              </motion.span>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}