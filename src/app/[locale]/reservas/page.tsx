import type { Metadata } from 'next';
import { generatePageMetadata, getValidLocale } from '@/seo';
import ReservasContent from './ReservasContent';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    // Cargar el SEO desde el JSON de traducciones
    let seoData;
    try {
        const data = await import(`../../translations/reservas/${validLocale}.json`);
        seoData = data.default.seo;
    } catch {
        // Fallback a español si no existe el idioma
        const fallbackData = await import(`../../translations/reservas/es.json`);
        seoData = fallbackData.default.seo;
    }

    return generatePageMetadata({
        locale: validLocale,
        page: 'reservas',
        path: '/reservas',
        customTitle: seoData.title,
        customDescription: seoData.description
    });
}

export default async function ReservasPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    // Cargar contenido específico de reservas
    let reservasContent;
    try {
        const data = await import(`../../translations/reservas/${validLocale}.json`);
        reservasContent = data.default;
    } catch {
        // Fallback a español si no existe el idioma
        const fallbackData = await import(`../../translations/reservas/es.json`);
        reservasContent = fallbackData.default;
    }

    return (
        <ReservasContent locale={validLocale} content={reservasContent} />
    );
}