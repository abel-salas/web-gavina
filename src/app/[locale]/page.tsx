import type { Metadata } from 'next';
import { getLocalizedData } from "../lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { MenuHighlightSection } from '../components/sections/MenuHighlightSection';
import { LocationSection, GallerySection, ContactSection } from '../components/sections/OtherSections';
import { client } from '../../../sanity/client';
import { siteImagesQuery } from '../lib/sanity/siteQueries';

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

    // Obtener la configuración de imágenes desde Sanity con manejo de errores
    let siteImages = null;
    try {
        siteImages = await client.fetch(siteImagesQuery);
    } catch (error) {
        console.warn('⚠️ No se pudo obtener configuración de imágenes desde Sanity:', error);
    }

    // Determinar la imagen de fondo del hero con fallback local
    const heroBackgroundImage = siteImages?.heroBackgroundImage?.asset?.url ||
        siteImages?.heroImageUrl ||
        '/images/home/mesa.jpg';

    const heroBackgroundAlt = siteImages?.heroBackgroundImage?.alt || 'Restaurant Banys La Gavina vista al mar';

    // Determinar la imagen de ubicación con fallback local
    const locationBackgroundImage = siteImages?.locationBackgroundImage?.asset?.url ||
        siteImages?.locationImageUrl ||
        '/images/home/gavina_frontal.jpg';

    const locationBackgroundAlt = siteImages?.locationBackgroundImage?.alt || 'Ubicación privilegiada en Calella';

    // Determinar la imagen de historia (sección sobre nosotros) con fallback local
    const historyBackgroundImage = siteImages?.historyBackgroundImage?.asset?.url ||
        siteImages?.historyImageUrl ||
        '/images/gavina/taules.jpg';

    const historyBackgroundAlt = siteImages?.historyBackgroundImage?.alt || 'Historia del restaurante Banys La Gavina';

    // Determinar las imágenes de especialidades con fallback local
    const specialtyImages = {
        arroces: siteImages?.arrocesImage?.asset?.url || siteImages?.arrocesImageUrl || '/images/home/paellas.jpg',
        mariscos: siteImages?.mariscosImage?.asset?.url || siteImages?.mariscosImageUrl || '/images/home/mariscos.jpg',
        pescados: siteImages?.pescadosImage?.asset?.url || siteImages?.pescadosImageUrl || '/images/home/pescado.jpg',
        carnes: siteImages?.carnesImage?.asset?.url || siteImages?.carnesImageUrl || '/images/home/carne_brasa.jpg'
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
            <HeroSection
                title={pageData.title}
                subtitle={pageData.subtitle}
                description={pageData.description}
                ctaText={pageData.cta || "Ver Carta"}
                ctaHref={href('/menu')}
                backgroundImage={heroBackgroundImage}
                backgroundAlt={heroBackgroundAlt}
            />

            {/* Sección 2: Sobre Nosotros */}
            {dict.sections?.about && (
                <AboutSection
                    title={dict.sections.about.title}
                    description={dict.sections.about.description}
                    backgroundImage={historyBackgroundImage}
                    backgroundAlt={historyBackgroundAlt}
                />
            )}

            {/* Sección 3: Platos Destacados */}
            {dict.sections?.specialties && (
                <MenuHighlightSection
                    title={dict.sections.specialties.title}
                    subtitle={dict.sections.specialties.subtitle}
                    specialties={dict.sections.specialties.items}
                    menuHref={href('/menu')}
                    specialtyImages={specialtyImages}
                />
            )}

            {/* Sección 4: Ubicación */}
            {dict.sections?.location && (
                <LocationSection
                    title={dict.sections.location.title}
                    subtitle={dict.sections.location.subtitle}
                    description={dict.sections.location.description}
                    backgroundImage={locationBackgroundImage}
                    backgroundAlt={locationBackgroundAlt}
                    useContactInfo={true}
                />
            )}

            {/* Sección 5: Galería
            <GallerySection
                title={dict.gallery?.title || "Galería de Fotos"}
            /> */}

            {/* Sección 6: Contacto */}
            <ContactSection
                title="Reserva Tu Experiencia"
                contactHref={href('/contact')}
            />
        </>
    );
}