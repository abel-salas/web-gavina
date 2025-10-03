import { SEO_CONFIG } from '../config/site';
import { SEO_DATA, type SupportedLocale } from '../data/content';

export function generateRestaurantJsonLd(locale: SupportedLocale): string {
    const seoData = SEO_DATA[locale] || SEO_DATA.es;
    const { business, site } = SEO_CONFIG;

    const restaurantData = {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: seoData.site.name,
        description: seoData.site.description,
        url: `${site.url}/${locale}`,
        image: `${site.url}${SEO_CONFIG.images.restaurant}`,
        logo: `${site.url}${SEO_CONFIG.images.logo}`,

        // Información comercial
        priceRange: business.priceRange,
        servesCuisine: business.cuisine,
        telephone: business.phone,
        email: business.email,

        // Dirección
        address: {
            '@type': 'PostalAddress',
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            addressRegion: business.address.region,
            postalCode: business.address.postalCode,
            addressCountry: business.address.country,
        },

        // Coordenadas geográficas
        geo: {
            '@type': 'GeoCoordinates',
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
        },

        // Horarios de apertura
        openingHours: business.openingHours,

        // Calificaciones
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: business.rating.value,
            reviewCount: business.rating.count,
        },

        // Redes sociales
        sameAs: [
            `https://twitter.com/${SEO_CONFIG.social.twitter.replace('@', '')}`,
            `https://instagram.com/${SEO_CONFIG.social.instagram.replace('@', '')}`,
            `https://facebook.com/${SEO_CONFIG.social.facebook}`,
        ],
    };

    return JSON.stringify(restaurantData, null, 2);
}

export function generateBreadcrumbJsonLd(
    locale: SupportedLocale,
    breadcrumbs: Array<{ name: string; url: string }>
): string {
    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };

    return JSON.stringify(breadcrumbData, null, 2);
}

export function generateWebsiteJsonLd(locale: SupportedLocale): string {
    const seoData = SEO_DATA[locale] || SEO_DATA.es;
    const { site } = SEO_CONFIG;

    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seoData.site.name,
        description: seoData.site.description,
        url: `${site.url}/${locale}`,
        inLanguage: locale,

        // Búsqueda interna (si tienes)
        potentialAction: {
            '@type': 'SearchAction',
            target: `${site.url}/${locale}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    return JSON.stringify(websiteData, null, 2);
}