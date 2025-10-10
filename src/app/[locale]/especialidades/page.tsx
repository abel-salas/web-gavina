import type { Metadata } from 'next';
import { getDictionary } from "@/app/lib/getDictionary";
import { generatePageMetadata, getValidLocale } from '@/seo';
import SpecialtiesContent from './SpecialtiesContent';

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
        const data = await import(`../../translations/especialidades/${validLocale}.json`);
        seoData = data.default.seo;
    } catch {
        // Fallback a español si no existe el idioma
        const fallbackData = await import(`../../translations/especialidades/es.json`);
        seoData = fallbackData.default.seo;
    }

    return generatePageMetadata({
        locale: validLocale,
        page: 'specialties',
        path: '/especialidades',
        customTitle: seoData.title,
        customDescription: seoData.description
    });
}

export default async function SpecialtiesPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const validLocale = getValidLocale(locale);

    return (
        <SpecialtiesContent locale={validLocale} dict={dict} />
    );
}