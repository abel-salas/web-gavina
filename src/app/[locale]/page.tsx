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
    
    // Determinar la imagen de fondo del hero con fallback
    const heroBackgroundImage = siteImages?.heroBackgroundImage?.asset?.url || 
                               siteImages?.heroImageUrl || 
                               'http://www.banyslagavina.cat/wp-content/uploads/2010/10/Vistesweb.jpg';
    
    const heroBackgroundAlt = siteImages?.heroBackgroundImage?.alt || 'Restaurant Banys La Gavina vista al mar';

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

            {/* Sección PRUEBA: Logo Mobile */}
            <section className="py-12 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl text-white mb-8">PRUEBA LOGO MOBILE</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="bg-red-500/20 border border-red-500 p-4">
                            <p className="text-white mb-2">Tamaño h-8 (32px):</p>
                            <svg className="h-8 w-auto border border-white" viewBox="200 30 450 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="logoTest1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#ffffff" />
                                    </linearGradient>
                                </defs>
                                <g fill="url(#logoTest1)">
                                    <path d="M362.52,86.88c1.4-1.03,3.06-1.78,4.52-2.77,7.43-5.04,14.98-14.9,8.55-23.73-5.22-7.16-16.94-8.38-25.07-7.37-13.05,1.63-32.7,11.53-31.17,27.09.91,9.25,10.35,9.03,15.43,3.35-2.51-1.6-3.1-4.53-2.55-7.3.49-2.49,3.36-6.87,5.1-8.77.55-.6,5.52-5.22,6.06-4.74-1.83,2.25-3.35,4.46-4.54,7.13-4.62,10.39-3.67,21.91-5.14,32.96-.25,1.89-.72,4.08-1.29,5.9-.49,1.53-1.49,4.68-3.49,4.56-.86-.05-1.23-1.71-1.42-2.45-1.65-6.28,1.24-12.99,5.17-17.8-6.06-6.25-19.64-1.78-21.19,6.7-1.74,9.52,7.11,18.03,15.11,21.49,4.34,1.88,11.27,3.38,16.01,3.65,12.4.72,29.9-8.26,33.01-21.06,2.28-9.39-4.15-15.83-13.08-16.86ZM334.86,118.31l-2.01-1.06c1.1-.09,2.35.12,3.42,0,7.64-.86,10.32-6.32,12.38-12.9,1.75-5.57,2.09-11.14,2.37-16.95,3.71,1.75,7.11,4.81,8.08,8.95,3.1,13.22-11.49,26.23-24.24,21.95ZM356.6,82.99c-1.45,1.02-3.79,2.1-4.98,3.29-.1.1-.15.29-.17.43l-.35-.09c-.14-1.18.12-2.39.17-3.51.25-5.47.14-14.77,4.83-18.52.6-.48,1.64-.59,1.76-1.56.04-.32-1.02-1.58-1.31-1.87-.51-.51-1.67-1.11-2-1.48-.18-.19-.13-.3-.12-.54,4.73.18,10.29,2.98,10.87,8.18.73,6.6-3.63,12.1-8.71,15.66Z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-500 p-4">
                            <p className="text-white mb-2">Tamaño h-12 (48px):</p>
                            <svg className="h-12 w-auto border border-white" viewBox="200 30 450 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="logoTest2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#ffffff" />
                                    </linearGradient>
                                </defs>
                                <g fill="url(#logoTest2)">
                                    <path d="M362.52,86.88c1.4-1.03,3.06-1.78,4.52-2.77,7.43-5.04,14.98-14.9,8.55-23.73-5.22-7.16-16.94-8.38-25.07-7.37-13.05,1.63-32.7,11.53-31.17,27.09.91,9.25,10.35,9.03,15.43,3.35-2.51-1.6-3.1-4.53-2.55-7.3.49-2.49,3.36-6.87,5.1-8.77.55-.6,5.52-5.22,6.06-4.74-1.83,2.25-3.35,4.46-4.54,7.13-4.62,10.39-3.67,21.91-5.14,32.96-.25,1.89-.72,4.08-1.29,5.9-.49,1.53-1.49,4.68-3.49,4.56-.86-.05-1.23-1.71-1.42-2.45-1.65-6.28,1.24-12.99,5.17-17.8-6.06-6.25-19.64-1.78-21.19,6.7-1.74,9.52,7.11,18.03,15.11,21.49,4.34,1.88,11.27,3.38,16.01,3.65,12.4.72,29.9-8.26,33.01-21.06,2.28-9.39-4.15-15.83-13.08-16.86ZM334.86,118.31l-2.01-1.06c1.1-.09,2.35.12,3.42,0,7.64-.86,10.32-6.32,12.38-12.9,1.75-5.57,2.09-11.14,2.37-16.95,3.71,1.75,7.11,4.81,8.08,8.95,3.1,13.22-11.49,26.23-24.24,21.95ZM356.6,82.99c-1.45,1.02-3.79,2.1-4.98,3.29-.1.1-.15.29-.17.43l-.35-.09c-.14-1.18.12-2.39.17-3.51.25-5.47.14-14.77,4.83-18.52.6-.48,1.64-.59,1.76-1.56.04-.32-1.02-1.58-1.31-1.87-.51-.51-1.67-1.11-2-1.48-.18-.19-.13-.3-.12-.54,4.73.18,10.29,2.98,10.87,8.18.73,6.6-3.63,12.1-8.71,15.66Z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección 6: Contacto */}
            <ContactSection
                title="Reserva Tu Experiencia"
                contactHref={href('/contact')}
            />
        </>
    );
}