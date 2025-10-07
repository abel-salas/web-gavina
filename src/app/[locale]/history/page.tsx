import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { client } from '../../../../sanity/client';
import { siteImagesQuery } from '@/app/lib/sanity/siteQueries';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  return generatePageMetadata({
    locale: validLocale,
    page: 'history',
    path: '/history'
  });
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  // Obtener la configuración de imágenes desde Sanity con manejo de errores
  let siteImages = null;
  try {
    siteImages = await client.fetch(siteImagesQuery);
  } catch (error) {
    console.warn('⚠️ No se pudo obtener configuración de imágenes desde Sanity:', error);
  }

  // Determinar la imagen de fondo de historia con fallback local
  const historyBackgroundImage = siteImages?.historyBackgroundImage?.asset?.url ||
    siteImages?.historyImageUrl ||
    '/images/gavina/1964.jpg';

  const historyBackgroundAlt = siteImages?.historyBackgroundImage?.alt || 'Restaurante Banys La Gavina historia';

  if (!dict.history) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-parisienne mb-4">{dict.nav.history || 'History'}</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={historyBackgroundImage}
            alt={historyBackgroundAlt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-parisienne mb-6 text-white">
            {dict.history.title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {dict.history.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Cronología
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-300"></div>

              {dict.history.timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Sections */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(dict.history.sections).map(([key, section]) => {
              // Definir imágenes específicas para ciertas secciones
              const sectionImages = {
                calella_context: '/images/gavina/barques.jpg',
                present: '/images/gavina/calella.jpg'
              };
              
              const hasImage = sectionImages[key as keyof typeof sectionImages];
              
              return (
                <div key={key} className="space-y-4">
                  <article className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </article>
                  
                  {hasImage && (
                    <div className="w-full">
                      <Image
                        src={hasImage}
                        alt={section.title}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-md"
                        quality={90}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Heritage Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {dict.history.heritage.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.history.heritage.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">
                  {['🏛️', '👨‍🍳', '📚', '👨‍👩‍👧‍👦'][index]}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            {dict.history.cta.title}
          </h2>
          <p className="text-xl mb-6">
            {dict.history.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/menu`}
              className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors"
            >
              {dict.history.cta.menu_button}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            >
              {dict.history.cta.contact_button}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}