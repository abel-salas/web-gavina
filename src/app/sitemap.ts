import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const { site } = SEO_CONFIG;

    // Páginas principales
    const pages = ['', '/menu', '/celebrations', '/contact', '/history']; // '/gallery' removed

    // Generar URLs para cada idioma y página
    const sitemapEntries: MetadataRoute.Sitemap = [];

    site.supportedLocales.forEach(locale => {
        pages.forEach(page => {
            sitemapEntries.push({
                url: `${site.url}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'weekly' : 'monthly',
                priority: page === '' ? 1 : 0.8,
                alternates: {
                    languages: site.supportedLocales.reduce((acc, lang) => {
                        acc[lang] = `${site.url}/${lang}${page}`;
                        return acc;
                    }, {} as Record<string, string>),
                },
            });
        });
    });

    return sitemapEntries;
}