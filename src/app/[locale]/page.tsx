import type { Metadata } from 'next';
import { getLocalizedData } from "../lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { AboutSection } from '../components/sections/AboutSection';
import { MenuHighlightSection } from '../components/sections/MenuHighlightSection';
import { client } from '../../../sanity/client';
import { homeContentQuery, imageSliderQuery } from '../lib/sanity/contentQueries';
import { processHomeContentResponse, getLocalizedText } from '../lib/sanity/contentTypes';
import type { HomeContent, ImageSlider } from '../lib/sanity/contentTypes';
import ImageSliderSection from '../components/sections/ImageSliderSection';
import { ContactSection } from '../components/sections/ContactSection';
import { HomeMainSection } from '../components/sections/HomeMainSection';
import { LocationSection } from '../components/sections/LocationSection';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    return generatePageMetadata({
        locale: validLocale,
        page: 'home',
        path: ''
    });
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { dict, href } = getLocalizedData(locale);

    // Obtener el contenido de HOME y sliders desde Sanity con manejo de errores
    let homeContentData: HomeContent[] = [];
    let imageSliders: ImageSlider[] = [];

    try {
        [homeContentData, imageSliders] = await Promise.all([
            client.fetch(homeContentQuery),
            client.fetch(imageSliderQuery)
        ]);
    } catch (error) {
        console.warn('⚠️ No se pudo obtener contenido desde Sanity:', error);
    }

    // Procesar los datos obtenidos
    const homeContent = processHomeContentResponse(homeContentData);

    // Obtener datos de cada sección con fallbacks
    const heroData = homeContent.hero;
    const aboutData = homeContent.about;
    const specialtiesData = homeContent.specialties;
    const locationData = homeContent.location;

    // Determinar la imagen de fondo del hero con fallback local
    const heroBackgroundImage = heroData?.heroBackgroundImage?.asset?.url || '/images/home/mesa.jpg';
    const heroBackgroundAlt = heroData?.heroBackgroundImage?.alt || 'Restaurant Banys La Gavina vista al mar';

    // Determinar la imagen de ubicación con fallback local
    const locationBackgroundImage = locationData?.locationImage?.asset?.url || '/images/home/gavina_frontal.jpg';
    const locationBackgroundAlt = locationData?.locationImage?.alt || 'Ubicación privilegiada en Calella';

    // Determinar la imagen de historia (sección sobre nosotros) con fallback local
    const historyBackgroundImage = aboutData?.aboutImage?.asset?.url || '/images/gavina/taules.jpg';
    const historyBackgroundAlt = aboutData?.aboutImage?.alt || 'Historia del restaurante Banys La Gavina';

    // Determinar las imágenes de especialidades con fallback local
    const specialtyImages = specialtiesData?.specialtyItems?.reduce((acc, item, index) => {
        const keys = ['arroces', 'mariscos', 'pescados', 'carnes'];
        const fallbacks = ['/images/home/paellas.jpg', '/images/home/mariscos.jpg', '/images/home/pescado.jpg', '/images/home/carne_brasa.jpg'];

        if (keys[index]) {
            acc[keys[index]] = item.image?.asset?.url || fallbacks[index];
        }
        return acc;
    }, {} as Record<string, string>) || {
        arroces: '/images/home/paellas.jpg',
        mariscos: '/images/home/mariscos.jpg',
        pescados: '/images/home/pescado.jpg',
        carnes: '/images/home/carne_brasa.jpg'
    };

    // Usar datos exclusivamente del JSON para la home
    const pageData = {
        title: dict.home?.title || "Restaurant Banys La Gavina",
        subtitle: dict.home?.subtitle || "Desde 1958 en primera línea de mar",
        description: dict.home?.description || "Situados en la Playa de Calella, somos especialistas en arroces, mariscos, pescado fresco y carnes selectas.",
        cta: dict.home?.cta || "Ver Carta",
        cta_secondary: dict.home?.cta_secondary || "Reservar Mesa"
    };

    return (
        <>
            {/* Sección 1: Hero */}
            <HomeMainSection
                subtitle={heroData ? getLocalizedText(heroData.heroSubtitle, locale, pageData.subtitle) : pageData.subtitle}
                description={heroData ? getLocalizedText(heroData.heroDescription, locale, pageData.description) : pageData.description}
                ctaText={pageData.cta || "Ver Carta"}
                ctaHref={href('/menu')}
                backgroundImage={heroBackgroundImage}
                backgroundAlt={heroBackgroundAlt}
            />

            {/* Sección 2: Sobre Nosotros */}
            <AboutSection
                title={aboutData ? getLocalizedText(aboutData.aboutTitle, locale, dict.sections?.about?.title || '') : dict.sections?.about?.title || ''}
                subtitle={aboutData ? getLocalizedText(aboutData.aboutSubtitle, locale, '') : ''}
                description={aboutData ? getLocalizedText(aboutData.aboutDescription, locale, dict.sections?.about?.description || '') : dict.sections?.about?.description || ''}
                backgroundImage={historyBackgroundImage}
                backgroundAlt={historyBackgroundAlt}
                features={aboutData?.aboutFeatures?.map(feature => ({
                    icon: feature.icon,
                    title: getLocalizedText(feature.title, locale, ''),
                    description: getLocalizedText(feature.description, locale, '')
                }))}
                defaultFeatures={dict.about?.features}
            />

            {/* Sección 3: Platos Destacados */}
            <MenuHighlightSection
                title={specialtiesData ? getLocalizedText(specialtiesData.specialtiesTitle, locale, dict.sections?.specialties?.title || '') : dict.sections?.specialties?.title || ''}
                subtitle={specialtiesData ? getLocalizedText(specialtiesData.specialtiesSubtitle, locale, dict.sections?.specialties?.subtitle || '') : dict.sections?.specialties?.subtitle || ''}
                specialties={specialtiesData?.specialtyItems?.map(item => ({
                    name: getLocalizedText(item.name, locale, ''),
                    description: getLocalizedText(item.description, locale, ''),
                    price: item.price,
                    image: item.image?.asset?.url || ''
                })) || dict.sections?.specialties?.items || []}
                menuHref={href('/menu')}
                viewMenuText={dict.menu?.view_full_menu}
                specialtyImages={specialtyImages}
            />

            {/* Sección 4: Ubicación */}
            <LocationSection
                title={locationData ? getLocalizedText(locationData.locationTitle, locale, dict.sections?.location?.title || '') : dict.sections?.location?.title || ''}
                subtitle={locationData ? getLocalizedText(locationData.locationSubtitle, locale, dict.sections?.location?.subtitle || '') : dict.sections?.location?.subtitle || ''}
                description={locationData ? getLocalizedText(locationData.locationDescription, locale, dict.sections?.location?.description || '') : dict.sections?.location?.description || ''}
                backgroundImage={locationBackgroundImage}
                backgroundAlt={locationBackgroundAlt}
                useContactInfo={true}
            />

            {/* Sección 5: Galería
            <GallerySection
                title={dict.gallery?.title || "Galería de Fotos"}
            /> */}

            {/* Sección 6: Contacto */}
            <ContactSection
                locale={locale}
                contactHref={href('/contact')}
            />

            {/* Sección 3.5: Slider de Imágenes */}
            <ImageSliderSection sliders={imageSliders} locale={locale} />

        </>
    );
}