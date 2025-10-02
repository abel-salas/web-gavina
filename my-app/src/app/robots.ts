import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/seo';

export default function robots(): MetadataRoute.Robots {
    const { site } = SEO_CONFIG;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/private/',
                '/admin/',
                '/api/',
                '/_next/',
                '/static/',
            ],
        },
        sitemap: `${site.url}/sitemap.xml`,
        host: site.url,
    };
}