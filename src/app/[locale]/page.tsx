import type { Metadata } from 'next';
import { getLocalizedData } from "../lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { MenuHighlightSection } from '../components/sections/MenuHighlightSection';
import { LocationSection, GallerySection, ContactSection } from '../components/sections/OtherSections';
import { getPageContent, getSiteConfig } from '../../../sanity/queries';

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

    // Obtener datos desde Sanity
    const [homeContent, siteConfig] = await Promise.all([
        getPageContent('home', locale).catch(() => null),
        getSiteConfig('general', locale).catch(() => null)
    ]);

    // Usar datos de Sanity si están disponibles, sino valores por defecto
    const pageData = homeContent ? {
        title: homeContent.title,
        subtitle: homeContent.subtitle,
        description: homeContent.description,
        cta: "Ver Carta",
        cta_secondary: "Reservar Mesa"
    } : {
        title: "Restaurant Banys La Gavina",
        subtitle: "Desde 1958 en primera línea de mar 🌊",
        description: "Situados en la Platja Gran de Calella, especialistas en arroces, mariscos y pescado fresco.",
        cta: "Ver Carta",
        cta_secondary: "Reservar Mesa"
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
            />

            {/* Sección 2: Sobre Nosotros */}
            {dict.sections?.about && (
                <AboutSection
                    title={dict.sections.about.title}
                    description={dict.sections.about.description}
                />
            )}

            {/* Sección 3: Platos Destacados */}
            {dict.sections?.specialties && (
                <MenuHighlightSection
                    title={dict.sections.specialties.title}
                    subtitle={dict.sections.specialties.subtitle}
                    specialties={dict.sections.specialties.items}
                    menuHref={href('/menu')}
                />
            )}

            {/* Sección 4: Ubicación */}
            {dict.sections?.location && (
                <LocationSection
                    title={dict.sections.location.title}
                />
            )}

            {/* Sección 5: Galería */}
            <GallerySection
                title={dict.gallery?.title || "Galería de Fotos"}
            />

            {/* Sección 6: Contacto */}
            <ContactSection
                title="Reserva Tu Experiencia"
                contactHref={href('/contact')}
            />
        </>
    );
}