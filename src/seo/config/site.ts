// Configuración centralizada del SEO
export const SEO_CONFIG = {
    site: {
        name: 'Restaurante Gavina',
        url: process.env.NEXT_PUBLIC_BASE_URL || 'https://restaurante-gavina.com',
        defaultLocale: 'es',
        supportedLocales: ['es', 'en', 'ca', 'nl'],
    },

    social: {
        twitter: '@restaurante_gavina',
        instagram: '@restaurante_gavina',
        facebook: 'RestauranteGavina',
    },

    business: {
        type: 'Restaurant',
        cuisine: 'Mediterranean',
        priceRange: '€€',
        phone: '+34 123 456 789',
        email: 'info@restaurante-gavina.com',
        address: {
            street: 'Calle Example, 123',
            city: 'Barcelona',
            region: 'Catalunya',
            postalCode: '08000',
            country: 'ES',
        },
        coordinates: {
            latitude: '41.3851',
            longitude: '2.1734',
        },
        openingHours: [
            'Mo-Su 12:00-23:00',
        ],
        rating: {
            value: '4.8',
            count: '127',
        },
    },

    images: {
        logo: '/images/logo.png',
        ogDefault: '/images/og-default.jpg',
        twitterDefault: '/images/twitter-default.jpg',
        restaurant: '/images/restaurant-interior.jpg',
    },
} as const;

export type SEOConfig = typeof SEO_CONFIG;