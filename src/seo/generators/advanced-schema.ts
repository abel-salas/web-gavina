import { SEO_CONFIG } from '../config/site';
import type { SupportedLocale } from '../data/content';

interface MenuItemSchema {
    name: string;
    description?: string;
    price?: string;
    image?: string;
    category: string;
}

interface FAQSchema {
    question: string;
    answer: string;
}

// Schema para el menú
export function generateMenuSchema(locale: SupportedLocale, menuItems?: MenuItemSchema[]) {
    const business = SEO_CONFIG.business;

    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": `Carta Restaurant Banys La Gavina`,
        "description": "Carta de cocina mediterránea auténtica: paellas, mariscos frescos, pescados y carnes a la brasa",
        "provider": {
            "@type": "Restaurant",
            "name": SEO_CONFIG.site.name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": business.address.street,
                "addressLocality": business.address.city,
                "addressRegion": business.address.region,
                "postalCode": business.address.postalCode,
                "addressCountry": business.address.country
            }
        },
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": "Paellas",
                "description": "Paellas tradicionales valencianas y de mariscos",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": "Paella Valenciana",
                        "description": "Paella tradicional con pollo, verduras y azafrán"
                    },
                    {
                        "@type": "MenuItem",
                        "name": "Paella de Mariscos",
                        "description": "Paella con mariscos frescos del Mediterráneo"
                    }
                ]
            },
            {
                "@type": "MenuSection",
                "name": "Mariscos y Pescados",
                "description": "Mariscos y pescados frescos del día",
                "hasMenuItem": [
                    {
                        "@type": "MenuItem",
                        "name": "Pulpo a la Gallega",
                        "description": "Pulpo cocido con pimentón dulce y aceite de oliva"
                    },
                    {
                        "@type": "MenuItem",
                        "name": "Pescado del Día",
                        "description": "Pescado fresco a la plancha o al horno"
                    }
                ]
            }
        ]
    };

    return JSON.stringify(baseSchema, null, 2);
}

// Schema para FAQ
export function generateFAQSchema(locale: SupportedLocale) {
    const faqs: Record<SupportedLocale, FAQSchema[]> = {
        es: [
            {
                question: "¿Necesito reservar mesa en Restaurant Banys La Gavina?",
                answer: "Se recomienda reservar, especialmente en temporada alta y fines de semana. Puedes llamar al 937 69 25 39 o venir directamente al restaurante."
            },
            {
                question: "¿Cuáles son los horarios del restaurante?",
                answer: "Estamos abiertos todos los días de 9:00 a 23:30h. Servimos desayunos, comidas y cenas durante todo el horario."
            },
            {
                question: "¿Tienen aparcamiento disponible?",
                answer: "Sí, disponemos de dos parkings públicos gratuitos de Calella muy cercanos al restaurante."
            },
            {
                question: "¿Cuál es la especialidad del restaurante?",
                answer: "Nos especializamos en cocina mediterránea auténtica: paellas tradicionales, mariscos frescos y pescados del día, todo con vista al mar."
            },
            {
                question: "¿Desde cuándo está abierto el restaurante?",
                answer: "Restaurant Banys La Gavina está sirviendo desde 1958, con más de 65 años de tradición gastronómica en Calella."
            },
            {
                question: "¿Organizan celebraciones y eventos?",
                answer: "Sí, organizamos bodas, comuniones, bautizos, cenas de empresa y todo tipo de celebraciones con menús personalizados y vista al mar."
            }
        ],
        en: [
            {
                question: "Do I need to book a table at Restaurant Banys La Gavina?",
                answer: "Booking is recommended, especially during high season and weekends. You can call 937 69 25 39 or come directly to the restaurant."
            },
            {
                question: "What are the restaurant opening hours?",
                answer: "We are open every day from 9:00 to 23:30h. We serve breakfast, lunch and dinner throughout our opening hours."
            },
            {
                question: "Do you have parking available?",
                answer: "Yes, we have two free public parking areas in Calella very close to the restaurant."
            },
            {
                question: "What is the restaurant's specialty?",
                answer: "We specialize in authentic Mediterranean cuisine: traditional paellas, fresh seafood and fish of the day, all with sea views."
            },
            {
                question: "How long has the restaurant been open?",
                answer: "Restaurant Banys La Gavina has been serving since 1958, with over 65 years of gastronomic tradition in Calella."
            },
            {
                question: "Do you organize celebrations and events?",
                answer: "Yes, we organize weddings, communions, baptisms, corporate dinners and all kinds of celebrations with personalized menus and sea views."
            }
        ],
        ca: [
            {
                question: "Cal reservar taula al Restaurant Banys La Gavina?",
                answer: "Es recomana reservar, especialment en temporada alta i caps de setmana. Pots trucar al 937 69 25 39 o venir directament al restaurant."
            },
            {
                question: "Quins són els horaris del restaurant?",
                answer: "Estem oberts tots els dies de 9:00 a 23:30h. Servim esmorzars, dinars i sopars durant tot l'horari."
            },
            {
                question: "Tenen aparcament disponible?",
                answer: "Sí, disposem de dos aparcaments públics gratuïts de Calella molt propers al restaurant."
            },
            {
                question: "Quina és l'especialitat del restaurant?",
                answer: "Ens especialitzem en cuina mediterrània autèntica: paelles tradicionals, mariscs frescos i peixos del dia, tot amb vista al mar."
            },
            {
                question: "Des de quan està obert el restaurant?",
                answer: "Restaurant Banys La Gavina està servint des de 1958, amb més de 65 anys de tradició gastronòmica a Calella."
            },
            {
                question: "Organitzen celebracions i esdeveniments?",
                answer: "Sí, organitzem noces, comunions, batejos, sopars d'empresa i tot tipus de celebracions amb menús personalitzats i vista al mar."
            }
        ],
        nl: [
            {
                question: "Moet ik een tafel reserveren bij Restaurant Banys La Gavina?",
                answer: "Reserveren wordt aanbevolen, vooral tijdens het hoogseizoen en weekends. U kunt bellen naar 937 69 25 39 of direct naar het restaurant komen."
            },
            {
                question: "Wat zijn de openingstijden van het restaurant?",
                answer: "We zijn elke dag open van 9:00 tot 23:30u. We serveren ontbijt, lunch en diner gedurende onze openingstijden."
            },
            {
                question: "Hebben jullie parkeergelegenheid?",
                answer: "Ja, we hebben twee gratis openbare parkeerplaatsen in Calella zeer dicht bij het restaurant."
            },
            {
                question: "Wat is de specialiteit van het restaurant?",
                answer: "We zijn gespecialiseerd in authentieke mediterrane keuken: traditionele paella's, verse zeevruchten en vis van de dag, allemaal met zeezicht."
            },
            {
                question: "Hoe lang is het restaurant al open?",
                answer: "Restaurant Banys La Gavina serveert sinds 1958, met meer dan 65 jaar gastronomische traditie in Calella."
            },
            {
                question: "Organiseren jullie feesten en evenementen?",
                answer: "Ja, we organiseren bruiloften, communies, dopen, bedrijfsdiners en allerlei feesten met gepersonaliseerde menu's en zeezicht."
            }
        ],
        de: [
            {
                question: "Muss ich einen Tisch im Restaurant Banys La Gavina reservieren?",
                answer: "Eine Reservierung wird empfohlen, besonders in der Hochsaison und an Wochenenden. Sie können unter 937 69 25 39 anrufen oder direkt ins Restaurant kommen."
            },
            {
                question: "Was sind die Öffnungszeiten des Restaurants?",
                answer: "Wir haben täglich von 9:00 bis 23:30 Uhr geöffnet. Wir servieren Frühstück, Mittag- und Abendessen während unserer gesamten Öffnungszeiten."
            },
            {
                question: "Haben Sie Parkmöglichkeiten?",
                answer: "Ja, wir haben zwei kostenlose öffentliche Parkplätze in Calella ganz in der Nähe des Restaurants."
            },
            {
                question: "Was ist die Spezialität des Restaurants?",
                answer: "Wir sind spezialisiert auf authentische mediterrane Küche: traditionelle Paellas, frische Meeresfrüchte und Fisch des Tages, alles mit Meerblick."
            },
            {
                question: "Wie lange ist das Restaurant schon geöffnet?",
                answer: "Das Restaurant Banys La Gavina serviert seit 1958, mit über 65 Jahren gastronomischer Tradition in Calella."
            },
            {
                question: "Organisieren Sie Feiern und Veranstaltungen?",
                answer: "Ja, wir organisieren Hochzeiten, Kommunionen, Taufen, Firmenessen und alle Arten von Feiern mit personalisierten Menüs und Meerblick."
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs[locale].map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return JSON.stringify(faqSchema, null, 2);
}

// Schema para eventos y celebraciones
export function generateEventSchema(locale: SupportedLocale) {
    const business = SEO_CONFIG.business;

    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "name": "Restaurant Banys La Gavina - Celebraciones",
        "description": "Venue para celebraciones y eventos con vista al mar en Calella",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": business.address.street,
            "addressLocality": business.address.city,
            "addressRegion": business.address.region,
            "postalCode": business.address.postalCode,
            "addressCountry": business.address.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": business.coordinates.latitude,
            "longitude": business.coordinates.longitude
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Vista al mar",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Terraza exterior",
                "value": true
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Menús personalizados",
                "value": true
            }
        ],
        "maximumAttendeeCapacity": 150,
        "telephone": business.phone,
        "url": SEO_CONFIG.site.url
    };

    return JSON.stringify(eventSchema, null, 2);
}