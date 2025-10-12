import type { Metadata } from 'next';
import { generatePageMetadata, getValidLocale } from '@/seo';
import { client } from '../../../../sanity/client';
import { reservasContentQuery } from '../../../../sanity/queries';
import ReservasContent from './ReservasContent';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    // Obtener SEO desde Sanity con manejo de errores
    let reservasData = null;
    let seoData = null;

    try {
        reservasData = await client.fetch(reservasContentQuery, { locale: validLocale });
        seoData = reservasData?.seo;
    } catch (error) {
        console.warn('⚠️ No se pudo obtener SEO de reservas desde Sanity:', error);
    }

    return generatePageMetadata({
        locale: validLocale,
        page: 'reservas',
        path: '/reservas',
        customTitle: seoData?.title,
        customDescription: seoData?.description
    });
}

export default async function ReservasPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const validLocale = getValidLocale(locale);

    // Obtener contenido desde Sanity con manejo de errores
    let reservasContent = null;

    try {
        reservasContent = await client.fetch(reservasContentQuery, { locale: validLocale });
    } catch (error) {
        console.warn('⚠️ No se pudo obtener contenido de reservas desde Sanity:', error);
    }

    return <ReservasContent locale={validLocale} content={reservasContent} />;
}