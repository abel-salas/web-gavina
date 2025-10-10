import Image from 'next/image';
import Link from 'next/link';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Ventaja {
  icon: string;
  title: string;
  description: string;
}

interface TerrazaContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_menu: string;
    cta_reserva: string;
  };
  vista: {
    title: string;
    description: string;
    benefits: Benefit[];
  };
  ambiente: {
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  ubicacion: {
    title: string;
    description: string;
    ventajas: Ventaja[];
  };
  cta: {
    title: string;
    description: string;
    cta_menu: string;
    cta_reserva: string;
  };
}

interface TerrazaVistaMarContentProps {
  locale: string;
  content: TerrazaContent;
}

export default function TerrazaVistaMarContent({ locale, content }: TerrazaVistaMarContentProps) {

  return (
    <main className="min-h-screen">
      {/* Hero Section con imagen de fondo de la terraza */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/gavina/terraza.jpg"
            alt="Terraza Restaurant Banys La Gavina frente al mar"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-parisienne mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            {content.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/menu`}
              className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              {content.hero.cta_menu}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {content.hero.cta_reserva}
            </Link>
          </div>
        </div>
      </section>

      {/* Sección: Vista Panorámica */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.vista.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {content.vista.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/gavina/terraza-2.jpg"
                alt="Vista panorámica terraza frente al mar Mediterráneo"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full"
                quality={90}
              />
            </div>
            <div className="space-y-6">
              {content.vista.benefits.map((benefit: Benefit, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <span className="material-icons-outlined text-lg">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Ambiente y Experiencia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {content.ambiente.title}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {content.ambiente.description}
              </p>
              
              <div className="space-y-4">
                {content.ambiente.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <span className="material-icons-outlined text-blue-600 mr-3">check_circle</span>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {content.ambiente.cta}
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/gavina/ceremonia.jpg"
                alt="Ceremonia en terraza frente al mar"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
                quality={75}
              />
              <Image
                src="/images/gavina/taules.jpg"
                alt="Mesas preparadas en terraza con vista al mar"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
                quality={75}
              />
              <Image
                src="/images/gavina/banquetes.jpg"
                alt="Banquetes en terraza Restaurant Banys La Gavina"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
                quality={75}
              />
              <Image
                src="/images/home/taules.jpg"
                alt="Ambiente acogedor terraza restaurant"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Ubicación Privilegiada */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.ubicacion.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {content.ubicacion.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.ubicacion.ventajas.map((ventaja: Ventaja, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">{ventaja.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {ventaja.title}
                </h3>
                <p className="text-gray-700">
                  {ventaja.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {content.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/menu`}
              className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              {content.cta.cta_menu}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {content.cta.cta_reserva}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}