import type { Metadata } from 'next';
import { SEO_CONFIG } from '../config/site';
import { SEO_DATA, type SupportedLocale, type PageType } from '../data/content';

interface MetadataOptions {
    locale: SupportedLocale;
    page?: PageType;
    path?: string;
    customTitle?: string;
    customDescription?: string;
}

export function generatePageMetadata(options: MetadataOptions): Metadata {
    const { page = 'home', path = '', customTitle, customDescription } = options;
    let { locale } = options;

    // Validar locale
    if (!SEO_DATA[locale]) {
        console.warn(`Locale ${locale} not supported, falling back to 'es'`);
        locale = 'es' as SupportedLocale;
    }

    const seoData = SEO_DATA[locale];
    const pageData = seoData.pages[page];
    const siteData = seoData.site;

    // Construir URLs
    const baseUrl = SEO_CONFIG.site.url;
    const canonicalUrl = `${baseUrl}/${locale}${path}`;

    // Generar alternativas de idioma
    const alternateLanguages: Record<string, string> = {};
    SEO_CONFIG.site.supportedLocales.forEach(lang => {
        alternateLanguages[lang] = `${baseUrl}/${lang}${path}`;
    });

    // Título y descripción
    const title = customTitle || pageData.title;
    const description = customDescription || pageData.description;

    return {
        title,
        description,
        keywords: pageData.keywords,
        authors: [{ name: siteData.name }],
        creator: siteData.name,
        publisher: siteData.name,

        // Open Graph
        openGraph: {
            type: 'website',
            locale: siteData.locale,
            url: canonicalUrl,
            title,
            description,
            siteName: siteData.name,
            images: [
                {
                    url: `${baseUrl}${SEO_CONFIG.images.ogDefault}`,
                    width: 1200,
                    height: 630,
                    alt: siteData.name,
                },
            ],
        },

        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${baseUrl}${SEO_CONFIG.images.twitterDefault}`],
            creator: SEO_CONFIG.social.twitter,
        },

        // URLs alternativas
        alternates: {
            canonical: canonicalUrl,
            languages: alternateLanguages,
        },

        // Robots
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Metadatos adicionales
        other: {
            'og:locale:alternate': SEO_CONFIG.site.supportedLocales
                .filter(lang => lang !== locale)
                .join(','),
        },
    };
}