import type { Metadata } from 'next';
import { generatePageMetadata, getValidLocale } from '@/seo';
import TerrazaVistaMarContent from './TerrazaVistaMarContent';

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
        const data = await import(`../../translations/terraza-vista-mar/${validLocale}.json`);
        seoData = data.default.seo;
    } catch {
        // Fallback a español si no existe el idioma
        const fallbackData = await import(`../../translations/terraza-vista-mar/es.json`);
        seoData = fallbackData.default.seo;
    }

    return generatePageMetadata({
        locale: validLocale,
        page: 'terraza',
        path: '/terraza-vista-mar',
        customTitle: seoData.title,
        customDescription: seoData.description
    });
}

export default async function TerrazaVistaMarPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    // Cargar contenido específico de la terraza
    let terrazaContent;
    try {
        const data = await import(`../../translations/terraza-vista-mar/${validLocale}.json`);
        terrazaContent = data.default;
    } catch {
        // Fallback a español si no existe el idioma
        const fallbackData = await import(`../../translations/terraza-vista-mar/es.json`);
        terrazaContent = fallbackData.default;
    }

    return (
        <TerrazaVistaMarContent locale={validLocale} content={terrazaContent} />
    );
}