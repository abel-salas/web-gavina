import type { Metadata } from 'next';
import Link from 'next/link';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';

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
    path: '/historia'
  });
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {dict.history.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {dict.history.subtitle}
        </p>
      </section>

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
          {Object.entries(dict.history.sections).map(([key, section]) => (
            <article key={key} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </article>
          ))}
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
          Ven a Formar Parte de Nuestra Historia
        </h2>
        <p className="text-xl mb-6">
          Más de 65 años de tradición gastronómica te esperan en primera línea de mar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/menu`}
            className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Ver Nuestra Carta
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
          >
            Reservar Mesa
          </Link>
        </div>
      </section>
    </main>
  );
}