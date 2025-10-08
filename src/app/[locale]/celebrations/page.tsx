import type { Metadata } from 'next';
import { getDictionary } from '@/app/lib/getDictionary';
import { getValidLocale } from '@/seo';
import { client } from '../../../../sanity/client';
import { getLocalizedText } from '@/app/lib/sanity/contentTypes';
import { ContactSection } from '@/app/components/sections/ContactSection';
import CelebrationsSlider from '@/app/components/CelebrationsSlider';

// Query para obtener contenido de celebraciones desde Sanity
const celebrationsContentQuery = `
  *[_type == "celebrationsContent" && isActive == true] | order(sectionId asc) {
    _id,
    sectionId,
    isActive,
    heroSlider[] {
      caption,
      alt,
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    heroTitle,
    heroSubtitle,
    heroDescription,
    typesTitle,
    typesSubtitle,
    celebrationTypes[] {
      name,
      description,
      icon,
      capacity
    },
    capacityTitle,
    capacityDescription,
    spaces[] {
      name,
      capacity,
      features
    },
    servicesTitle,
    services[] {
      name,
      description,
      icon,
      included
    },
    updatedAt
  }
`;

interface CelebrationType {
  name: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  description: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  icon: string;
  capacity: string;
}

interface Space {
  name: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  capacity: string;
  features: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
}

interface Service {
  name: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  description: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  icon: string;
  included: boolean;
}

interface CelebrationsContent {
  _id: string;
  sectionId: string;
  isActive: boolean;
  heroSlider?: Array<{
    caption?: {
      es?: string;
      en?: string;
      ca?: string;
      nl?: string;
      de?: string;
    };
    alt: string;
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }>;
  heroTitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  heroSubtitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  heroDescription?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  typesTitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  typesSubtitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  celebrationTypes?: CelebrationType[];
  capacityTitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  capacityDescription?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  spaces?: Space[];
  servicesTitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
    de?: string;
  };
  services?: Service[];
  updatedAt: string;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);
  const dict = await getDictionary(validLocale);

  return {
    title: dict.celebrations?.metaTitle || `${dict.celebrations?.title} - ${dict.seo.siteName}`,
    description: dict.celebrations?.metaDescription || dict.celebrations?.description,
    keywords: dict.celebrations?.keywords,
    robots: 'index, follow',
    alternates: {
      canonical: `https://www.banyslagavina.cat/${validLocale}/celebrations`,
      languages: {
        'es': 'https://www.banyslagavina.cat/es/celebrations',
        'en': 'https://www.banyslagavina.cat/en/celebrations',
        'ca': 'https://www.banyslagavina.cat/ca/celebrations',
        'nl': 'https://www.banyslagavina.cat/nl/celebrations',
        'de': 'https://www.banyslagavina.cat/de/celebrations',
      }
    },
    openGraph: {
      title: dict.celebrations?.metaTitle || dict.celebrations?.title,
      description: dict.celebrations?.metaDescription || dict.celebrations?.description,
      type: 'website',
      locale: dict.seo.locale,
      url: `https://www.banyslagavina.cat/${validLocale}/celebrations`,
      siteName: dict.seo.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.celebrations?.metaTitle || dict.celebrations?.title,
      description: dict.celebrations?.metaDescription || dict.celebrations?.description,
    },
  };
}

export default async function CelebrationsPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);
  const dict = await getDictionary(validLocale);

  // Obtener contenido de celebraciones desde Sanity
  let celebrationsData: CelebrationsContent[] = [];
  
  try {
    celebrationsData = await client.fetch(celebrationsContentQuery);
  } catch (error) {
    console.warn('⚠️ No se pudo obtener contenido de celebraciones desde Sanity:', error);
  }

  // Organizar datos por sección
  const heroData = celebrationsData.find(item => item.sectionId === 'hero');
  const typesData = celebrationsData.find(item => item.sectionId === 'types');
  const capacityData = celebrationsData.find(item => item.sectionId === 'capacity');
  const servicesData = celebrationsData.find(item => item.sectionId === 'services');

  return (
    <div className="min-h-screen">
      {/* Hero Section con Slider 16:9 */}
      <section className="relative w-full aspect-video overflow-hidden">
        {heroData?.heroSlider && heroData.heroSlider.length > 0 ? (
          <CelebrationsSlider images={heroData.heroSlider} />
        ) : (
          // Fallback image si no hay slider en Sanity
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="material-icons-outlined text-8xl mb-4 opacity-50">celebration</span>
              <p className="text-xl opacity-75">Celebraciones frente al mar</p>
            </div>
          </div>
        )}



        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <span className="material-icons-outlined text-3xl opacity-75">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Sección de Título y Descripción */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-parisienne mb-12">
              {getLocalizedText(heroData?.heroTitle, validLocale, dict.celebrations?.title || 'Celebraciones')}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-light mb-8">
              {getLocalizedText(heroData?.heroSubtitle, validLocale, dict.celebrations?.subtitle || '')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              {getLocalizedText(heroData?.heroDescription, validLocale, dict.celebrations?.description || '')}
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Celebraciones */}
      {typesData && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-parisine text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getLocalizedText(typesData.typesTitle, validLocale, 'Tipos de Celebraciones')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {getLocalizedText(typesData.typesSubtitle, validLocale, '')}
              </p>
            </div>

            {typesData.celebrationTypes && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {typesData.celebrationTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-icons-outlined text-2xl text-blue-600">
                          {type.icon || 'celebration'}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {getLocalizedText(type.name, validLocale, '')}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {getLocalizedText(type.description, validLocale, '')}
                      </p>
                      {type.capacity && (
                        <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block">
                          {type.capacity}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Capacidad y Espacios */}
      {capacityData && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-parisine text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getLocalizedText(capacityData.capacityTitle, validLocale, 'Nuestros Espacios')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {getLocalizedText(capacityData.capacityDescription, validLocale, '')}
              </p>
            </div>

            {capacityData.spaces && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {capacityData.spaces.map((space, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {getLocalizedText(space.name, validLocale, '')}
                    </h3>
                    <div className="flex items-center mb-4">
                      <span className="material-icons-outlined text-blue-600 mr-2">groups</span>
                      <span className="font-semibold text-blue-600">{space.capacity}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {getLocalizedText(space.features, validLocale, '')}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Servicios Incluidos */}
      {servicesData && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-parisine text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {getLocalizedText(servicesData.servicesTitle, validLocale, 'Servicios Incluidos')}
              </h2>
            </div>

            {servicesData.services && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.services.map((service, index) => (
                  <div key={index} className={`p-6 rounded-xl ${
                    service.included 
                      ? 'bg-white shadow-md border-2 border-green-200' 
                      : 'bg-white shadow-sm border border-gray-200'
                  }`}>
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                        service.included ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <span className={`material-icons-outlined text-lg ${
                          service.included ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {service.icon || 'check_circle'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {getLocalizedText(service.name, validLocale, '')}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {getLocalizedText(service.description, validLocale, '')}
                        </p>
                        {service.included && (
                          <span className="inline-block mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Incluido
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Sección de Contacto */}
      <ContactSection 
        locale={validLocale} 
        contactHref={`/${validLocale}/contact`}
      />
    </div>
  );
}