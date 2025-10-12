'use client';

import { AnimatedSection } from '@/app/components/animations/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import type { Route } from 'next';
import { useParams } from 'next/navigation';


interface ArrocesTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  especialidades: {
    title: string;
    description: string;
  };
  platos: {
    paellaMariscos: {
      title: string;
      description: string;
    };
    arrozSenyoret: {
      title: string;
      description: string;
    };
    fideuaMariscos: {
      title: string;
      description: string;
    };
    paellaMixta: {
      title: string;
      description: string;
    };
    arrozNegro: {
      title: string;
      description: string;
    };
    arrozBogavante: {
      title: string;
      description: string;
    };
  };
  tradicion: {
    title: string;
    bomba: {
      title: string;
      description: string;
    };
    mariscos: {
      title: string;
      description: string;
    };
    sofrito: {
      title: string;
      description: string;
    };
  };
  experiencia: {
    title: string;
    description: string;
    stats: {
      tiempo: {
        value: string;
        label: string;
      };
      personas: {
        value: string;
        label: string;
      };
      ingredientes: {
        value: string;
        label: string;
      };
      tradicion: {
        value: string;
        label: string;
      };
    };
  };
  cta: {
    title: string;
    description: string;
    buttons: {
      reservar: string;
      masInfo: string;
    };
  };
  whatsapp: {
    message: string;
  };
}

interface ArrocesContentProps {
  arrocesData: ArrocesTranslations;
}

export default function ArrocesContent({ arrocesData }: ArrocesContentProps) {
  const params = useParams();
  const locale = params.locale as string;
  
  const href = (path: string): string => {
    return `/${locale}${path}`;
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/home/paellas.jpg"
          alt="Paellas mediterráneas frente al mar"
          fill
          className="absolute inset-0 object-cover object-center z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {arrocesData.hero.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {arrocesData.hero.subtitle}
          </p>
        </div>
      </AnimatedSection>

      {/* Especialidades de Arroces */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {arrocesData.especialidades.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {arrocesData.especialidades.description}
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
                  {arrocesData.platos.paellaMariscos.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.paellaMariscos.description}
              </p>
            </div>

            {/* Arroz del Senyoret */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {arrocesData.platos.arrozSenyoret.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.arrozSenyoret.description}
              </p>
            </div>

            {/* Fideuá de Mariscos */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {arrocesData.platos.fideuaMariscos.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.fideuaMariscos.description}
              </p>
            </div>

            {/* Paella Mixta */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥘</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {arrocesData.platos.paellaMixta.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.paellaMixta.description}
              </p>
            </div>

            {/* Arroz Negro */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦑</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {arrocesData.platos.arrozNegro.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.arrozNegro.description}
              </p>
            </div>

            {/* Arroz con Bogavante */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {arrocesData.platos.arrozBogavante.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                {arrocesData.platos.arrozBogavante.description}
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
                {arrocesData.tradicion.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{arrocesData.tradicion.bomba.title}</h3>
                    <p className="text-gray-600">{arrocesData.tradicion.bomba.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{arrocesData.tradicion.mariscos.title}</h3>
                    <p className="text-gray-600">{arrocesData.tradicion.mariscos.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{arrocesData.tradicion.sofrito.title}</h3>
                    <p className="text-gray-600">{arrocesData.tradicion.sofrito.description}</p>
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
                {arrocesData.experiencia.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {arrocesData.experiencia.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{arrocesData.experiencia.stats.tiempo.value}</div>
                  <p className="text-sm text-gray-600">{arrocesData.experiencia.stats.tiempo.label}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{arrocesData.experiencia.stats.personas.value}</div>
                  <p className="text-sm text-gray-600">{arrocesData.experiencia.stats.personas.label}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{arrocesData.experiencia.stats.ingredientes.value}</div>
                  <p className="text-sm text-gray-600">{arrocesData.experiencia.stats.ingredientes.label}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{arrocesData.experiencia.stats.tradicion.value}</div>
                  <p className="text-sm text-gray-600">{arrocesData.experiencia.stats.tradicion.label}</p>
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
            {arrocesData.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {arrocesData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/34972769012?text=' + encodeURIComponent(arrocesData.whatsapp.message), '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {arrocesData.cta.buttons.reservar}
            </button>
            <Link 
              href={href('/contacto') as Route}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30"
            >
              {arrocesData.cta.buttons.masInfo}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}