import { client } from '../../../../sanity/client';
import { homeContentNewQuery } from '../../../../sanity/queries';
// import { imageSliderQuery } from '../../lib/sanity/contentQueries';
import { HomeMainSection } from '../../components/sections/HomeMainSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { MenuHighlightSection } from '../../components/sections/MenuHighlightSection';
import { LocationSection } from '../../components/sections/LocationSection';
import { ContactSection } from '../../components/sections/ContactSection';
// import ImageSliderSection from '../../components/sections/ImageSliderSection';

interface HomeContentProps {
  locale: string;
}

interface HomeContentData {
  _id: string;
  locale: string;
  hero: {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaSecondaryText?: string;
    backgroundImage?: {
      asset?: {
        url?: string;
        _id?: string;
      };
      alt?: string;
    };
  };
  aboutSection: {
    titleSeo?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: {
      asset?: {
        url?: string;
        _id?: string;
      };
      alt?: string;
    };
    features?: Array<{
      icon?: string;
      title?: string;
      description?: string;
    }>;
  };
  specialtiesSection: {
    title?: string;
    subtitle?: string;
    specialtyItems?: Array<{
      name?: string;
      description?: string;
      price?: string;
      category?: string;
      image?: {
        asset?: {
          url?: string;
          _id?: string;
        };
        alt?: string;
      };
    }>;
    viewMenuText?: string;
  };
  locationSection: {
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: {
      asset?: {
        url?: string;
        _id?: string;
      };
      alt?: string;
    };
  };
  contactSection: {
    title?: string;
    subtitle?: string;
    ctaText?: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// interface ImageSlider {
//   _id: string;
//   _type: 'imageSlider';
//   name: string;
//   images: Array<{
//     _key: string;
//     _type: 'image';
//     asset: {
//       _ref: string;
//       _type: 'reference';
//     };
//     alt?: string;
//     caption?: string;
//   }>;
export default async function HomeContent({ locale }: HomeContentProps) {
  // Obtener contenido de HOME desde Sanity
  let homeData: HomeContentData | null = null;
  // let imageSliders: ImageSlider[] = [];

  try {
    homeData = await client.fetch(homeContentNewQuery, { locale });
  } catch (error) {
    console.error('❌ Error al obtener contenido de HOME desde Sanity:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Error al cargar el contenido
          </h1>
          <p className="text-gray-600">
            No se pudo obtener el contenido de la página HOME desde Sanity.
          </p>
        </div>
      </div>
    );
  }

  // Verificar que tengamos los datos necesarios
  if (!homeData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Contenido no disponible
          </h1>
          <p className="text-gray-600">
            No hay contenido disponible para el idioma {locale.toUpperCase()}.
          </p>
        </div>
      </div>
    );
  }

  // Generar URLs de navegación
  const getHref = (path: string) => {
    return locale === 'es' ? path : `/${locale}${path}`;
  };

  // Procesar imágenes de especialidades por categoría
  const specialtyImages = homeData.specialtiesSection.specialtyItems?.reduce((acc, item) => {
    if (item.category && item.image?.asset?.url) {
      acc[item.category] = item.image.asset.url;
    }
    return acc;
  }, {} as Record<string, string>) || {};

  return (
    <>
      {/* Sección 1: Hero Principal */}
      {homeData.hero && (
        <HomeMainSection
          subtitle={homeData.hero.subtitle || ''}
          description={homeData.hero.description || ''}
          ctaText={homeData.hero.ctaText || 'Ver Carta'}
          ctaHref={getHref('/menu')}
          backgroundImage={homeData.hero.backgroundImage?.asset?.url || '/images/home/mesa.jpg'}
          backgroundAlt={homeData.hero.backgroundImage?.alt || 'Restaurant Banys La Gavina'}
        />
      )}

      {/* Sección 2: Sobre Nosotros */}
      {homeData.aboutSection && (
        <AboutSection
          titleSeo={homeData.aboutSection.titleSeo || ''}
          title={homeData.aboutSection.title || ''}
          subtitle={homeData.aboutSection.subtitle || ''}
          description={homeData.aboutSection.description || ''}
          backgroundImage={homeData.aboutSection.backgroundImage?.asset?.url || '/images/gavina/taules.jpg'}
          backgroundAlt={homeData.aboutSection.backgroundImage?.alt || 'Historia del restaurante'}
          features={homeData.aboutSection.features?.map(f => ({
            icon: f.icon || '',
            title: f.title || '',
            description: f.description || ''
          })) || []}
        />
      )}

      {/* Sección 3: Especialidades */}
      {homeData.specialtiesSection && (
        <MenuHighlightSection
          title={homeData.specialtiesSection.title || ''}
          subtitle={homeData.specialtiesSection.subtitle || ''}
          specialties={homeData.specialtiesSection.specialtyItems?.map(item => ({
            name: item.name || '',
            description: item.description || '',
            price: item.price || '',
            image: item.image?.asset?.url || ''
          })) || []}
          menuHref={getHref('/menu')}
          specialtiesHref={getHref('/menu')}
          viewMenuText={homeData.specialtiesSection.viewMenuText || 'Ver Menú Completo'}
          specialtyImages={specialtyImages}
        />
      )}

      {/* Sección 4: Ubicación */}
      {homeData.locationSection && (
        <LocationSection
          title={homeData.locationSection.title || ''}
          subtitle={homeData.locationSection.subtitle || ''}
          description={homeData.locationSection.description || ''}
          backgroundImage={homeData.locationSection.backgroundImage?.asset?.url || '/images/home/gavina_frontal.jpg'}
          backgroundAlt={homeData.locationSection.backgroundImage?.alt || 'Ubicación privilegiada'}
        />
      )}

      {/* Sección 5: Slider de Imágenes */}
      {/* Temporalmente deshabilitado para build */}
      {/* {imageSliders && imageSliders.length > 0 && (
        <ImageSliderSection sliders={imageSliders} locale={locale} />
      )} */}

      {/* Sección 6: Contacto */}
      <ContactSection
        locale={locale}
        contactHref={getHref('/contact')}
      />
    </>
  );
}