import type { Metadata } from 'next';
import { getLocalizedData } from "../lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { MenuHighlightSection } from '../components/sections/MenuHighlightSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { LocationSection, GallerySection, ContactSection } from '../components/sections/OtherSections';

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

    return (
        <>
            {/* Sección 1: Hero */}
            <HeroSection 
                title={dict.home.title}
                subtitle={dict.home.subtitle}
                description={dict.home.description}
                ctaText={dict.home.cta || "Ver Carta"}
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

            {/* Sección 4: Testimonios */}
            {dict.sections?.testimonials && (
                <TestimonialsSection 
                    title={dict.sections.testimonials.title}
                    subtitle={dict.sections.testimonials.subtitle}
                    testimonials={dict.sections.testimonials.items}
                />
            )}

            {/* Sección 5: Ubicación */}
            {dict.sections?.location && (
                <LocationSection 
                    title={dict.sections.location.title}
                />
            )}

            {/* Sección 6: Galería */}
            <GallerySection 
                title={dict.gallery.title}
            />

            {/* Sección 7: Contacto */}
            <ContactSection 
                title="Reserva Tu Experiencia"
                contactHref={href('/contact')}
            />
        </>
    );
}