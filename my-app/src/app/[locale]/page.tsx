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
                ctaText="Descubrir Menú"
                ctaHref={href('/menu')}
            />

            {/* Sección 2: Sobre Nosotros */}
            <AboutSection 
                title="Nuestra Historia"
                description="Desde 2008, Restaurante Gavina ha sido un referente de la auténtica cocina mediterránea. Combinamos tradición familiar con técnicas modernas para crear experiencias gastronómicas únicas que celebran los sabores del Mediterráneo."
            />

            {/* Sección 3: Platos Destacados */}
            <MenuHighlightSection 
                title="Nuestros Platos Estrella"
                menuHref={href('/menu')}
            />

            {/* Sección 4: Testimonios */}
            <TestimonialsSection 
                title="Lo Que Dicen Nuestros Clientes"
            />

            {/* Sección 5: Ubicación */}
            <LocationSection 
                title="Visítanos"
            />

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