'use client';

import { AnimatedSection } from '@/app/components/animations/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import type { Route } from 'next';
import { useParams } from 'next/navigation';

import { Dictionary } from '@/app/lib/dictionary.models';

interface ArrocesContentProps {
  dict: Dictionary;
}

export default function ArrocesContent({ dict }: ArrocesContentProps) {
  const params = useParams();
  const locale = params.locale as string;
  
  const href = (path: string): string => {
    return `/${locale}${path}`;
  };
  const arrocesData = (dict as Record<string, any>)?.pages?.arroces || {};

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/home/paellas.jpg')",
            backgroundPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {arrocesData.hero?.title || 'Arroces Mediterráneos en Calella'}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {arrocesData.hero?.subtitle || 'Tradición catalana frente al mar'}
          </p>
        </div>
      </AnimatedSection>

      {/* Especialidades de Arroces */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {arrocesData.especialidades?.title || 'Nuestros Arroces Mediterráneos'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {arrocesData.especialidades?.description || 'Cada arroz es una obra de arte culinaria preparada con ingredientes frescos del Mediterráneo y la tradición gastronómica catalana'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Paella de Mariscos */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Paella de Mariscos
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Langostinos, mejillones, almejas y calamares frescos del Mediterráneo con arroz bomba y azafrán auténtico
              </p>
            </div>

            {/* Arroz del Senyoret */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Arroz del Senyoret
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Mariscos pelados para comer cómodamente, con gambas rojas, langostinos y sepia en sofrito mediterráneo
              </p>
            </div>

            {/* Fideuá de Mariscos */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fideuá de Mariscos
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Fideos con mariscos frescos y alioli artesanal, una especialidad de la Costa Brava
              </p>
            </div>

            {/* Paella Mixta */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥘</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Paella Mixta
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                La combinación perfecta de pollo de corral, conejo, mariscos frescos y verduras de temporada
              </p>
            </div>

            {/* Arroz Negro */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Arroz Negro
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Con tinta de calamar fresco, sepia y alioli de ajo, un clásico de la gastronomía mediterránea
              </p>
            </div>

            {/* Arroz con Bogavante */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Arroz con Bogavante
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                Bogavante fresco del Mediterráneo con arroz bomba, tomate natural y hierbas aromáticas
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tradición Mediterránea */}
      <AnimatedSection className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {arrocesData.tradicion?.title || 'Tradición Mediterránea'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Arroz Bomba Auténtico</h3>
                    <p className="text-gray-600">Utilizamos exclusivamente arroz bomba, el único que absorbe los sabores sin perder la textura perfecta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Mariscos de Lonja</h3>
                    <p className="text-gray-600">Ingredientes frescos directos de la lonja de Blanes y mercados locales cada mañana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Sofrito Mediterráneo</h3>
                    <p className="text-gray-600">Base de tomate natural, ajo, cebolla y pimiento, cocinado lentamente para intensificar los sabores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/arroz_negro.jpg" 
                alt="Paella arroz negro"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vista al Mar */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image 
                src="/images/gavina/terraza.jpg" 
                alt="Terraza con vistas al mar Mediterráneo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {arrocesData.experiencia?.title || 'Paellas Frente al Mar'}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {arrocesData.experiencia?.description || 'Disfruta de nuestros arroces mediterráneos en nuestra terraza con vistas panorámicas al mar. Una experiencia gastronómica única en primera línea de playa.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">45min</div>
                  <p className="text-sm text-gray-600">Tiempo de preparación</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2-6</div>
                  <p className="text-sm text-gray-600">Personas por paella</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Ingredientes frescos</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">1964</div>
                  <p className="text-sm text-gray-600">Tradición familiar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Final */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {arrocesData.cta?.title || 'Reserva tu Mesa para Arroces'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {arrocesData.cta?.description || 'Los mejores arroces mediterráneos de la Costa del Maresme te esperan en nuestra terraza frente al mar'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/34972769012?text=' + encodeURIComponent('Hola! Me gustaría reservar mesa para arroces en Banys La Gavina'), '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {(dict as Record<string, any>).common?.cta?.reserve_now || 'Reservar Ahora'}
            </button>
            <Link 
              href={href('/contacto') as Route}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              {(dict as Record<string, any>).common?.cta?.more_info || 'Más Información'}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}