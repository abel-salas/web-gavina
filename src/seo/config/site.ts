// Configuración centralizada del SEO
export const SEO_CONFIG = {
    site: {
        name: 'Restaurant Banys La Gavina',
        url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.banyslagavina.cat',
        defaultLocale: 'es',
        supportedLocales: ['es', 'en', 'ca', 'nl', 'de'],
        fullName: 'Restaurant Banys La Gavina - Calella',
        tagline: 'Desde 1958 frente al mar',
    },

    social: {
        twitter: '@banyslagavina',
        instagram: 'banyslagavina',
        facebook: 'GavinaCalella',
        instagramUrl: 'https://www.instagram.com/banyslagavina?igsh=MXBzdHpoZjI2ZTlxNA==',
        facebookUrl: 'https://www.facebook.com/GavinaCalella',
    },

    business: {
        type: 'Restaurant',
        cuisine: 'Mediterranean',
        priceRange: '€€',
        phone: '+34 937 69 25 39',
        mobile: '+34 692 473 865',
        email: 'info@banyslagavina.cat',
        address: {
            street: 'Paseo Manuel Puigvert s/n',
            city: 'Calella',
            region: 'Catalunya',
            postalCode: '08370',
            country: 'ES',
        },
        coordinates: {
            latitude: '41.6141',
            longitude: '2.6586',
        },
        openingHours: [
            'Mo-Su 09:00-23:30',
        ],
        rating: {
            value: '4.6',
            count: '230',
        },
        established: '1958',
        specialty: 'Paellas y mariscos frente al mar',
    },

    images: {
        logo: '/images/logo.png',
        ogDefault: '/images/og-default.jpg',
        twitterDefault: '/images/twitter-default.jpg',
        restaurant: '/images/restaurant-interior.jpg',
    },
} as const;

export type SEOConfig = typeof SEO_CONFIG;