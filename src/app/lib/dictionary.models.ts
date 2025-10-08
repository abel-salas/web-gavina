export interface Dictionary {
    seo: {
        siteName: string;
        siteDescription: string;
        keywords: string;
        locale: string;
    };
    contact_section?: {
        title: string;
        subtitle: string;
        cta: string;
    };
    contact_info?: {
        phone: string;
        mobile: string;
        address: string;
        hours: string;
        location: string;
        parking: string;
        facebook: string;
        instagram: string;
    };
    nav: {
        home: string;
        menu: string;
        history: string;
        reservas: string;
        contacto: string;
        gallery: string;
    };
    home?: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        cta?: string;
        cta_secondary?: string;
    };
    menu?: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        categoryNames?: {
            starters?: string;
            salads?: string;
            rice?: string;
            meat?: string;
            fish?: string;
            desserts?: string;
            drinks?: string;
        };
        allergens?: {
            label: string;
            legend: string;
            types: {
                gluten: string;
                shellfish: string;
                fish: string;
                dairy: string;
                eggs: string;
                nuts: string;
                soy: string;
                celery: string;
                mustard: string;
                sesame: string;
                sulfites: string;
            };
        };
        categories?: {
            starters?: MenuCategory;
            salads?: MenuCategory;
            rice?: MenuCategory;
            meat?: MenuCategory;
            fish?: MenuCategory;
            drinks?: MenuCategory;
        };
    };
    contact?: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        address: string;
        phone: string;
        mobile: string;
        hours: string;
        facebook: string;
        location: string;
        parking: string;
        info_section?: string;
        form_section?: string;
        fields?: {
            address: string;
            phone: string;
            mobile: string;
            schedule: string;
            parking: string;
            parking_description: string;
            follow_us: string;
            name: string;
            email: string;
            message: string;
            send_button: string;
        };
        whatsapp?: {
            title: string;
            description: string;
            button: string;
        };
    };
    about?: {
        features: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
    gallery?: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
    };
    sections?: {
        about?: {
            title: string;
            subtitle: string;
            description: string;
        };
        specialties?: {
            title: string;
            subtitle: string;
            items: Array<{
                name: string;
                description: string;
                price: string;
            }>;
        };
        location: {
            title: string;
            subtitle: string;
            description: string;
        };
        services?: {
            title: string;
            subtitle: string;
            items: Array<{
                title: string;
                description: string;
            }>;
        };
    };
    history?: {
        title: string;
        subtitle: string;
        sections: {
            origin: {
                title: string;
                content: string;
            };
            calella_context: {
                title: string;
                content: string;
            };
            golden_era: {
                title: string;
                content: string;
            };
            tradition: {
                title: string;
                content: string;
            };
            calella_cinema: {
                title: string;
                content: string;
            };
            present: {
                title: string;
                content: string;
            };
        };
        timeline: Array<{
            year: string;
            event: string;
        }>;
        heritage: {
            title: string;
            items: Array<{
                title: string;
                description: string;
            }>;
        };
        cta: {
            title: string;
            subtitle: string;
            menu_button: string;
            contact_button: string;
        };
    };
    footer?: {
        description: string;
        contact: {
            title: string;
            address?: string;
            phone?: string;
            mobile?: string;
        };
        hours: {
            title: string;
            text?: string;
        };
        social: {
            title: string;
            facebook: string;
        };
        language_selector?: string;
        privacy_policy?: string;
        copyright: string;
    };
    privacy?: {
        title: string;
        metaTitle: string;
        metaDescription: string;
        sections: {
            general: {
                title: string;
                content: string;
            };
            responsible: {
                title: string;
                denomination: string;
                address: string;
                phone: string;
                email: string;
            };
            data_collected: {
                title: string;
                intro: string;
                items: string[];
            };
            purpose: {
                title: string;
                intro: string;
                items: string[];
            };
            legal_basis: {
                title: string;
                intro: string;
                contractual: string;
                consent: string;
                legitimate: string;
                legal: string;
            };
            retention: {
                title: string;
                content: string;
            };
            recipients: {
                title: string;
                intro: string;
                items: string[];
            };
            rights: {
                title: string;
                intro: string;
                access: string;
                rectification: string;
                erasure: string;
                restriction: string;
                portability: string;
                objection: string;
                exercise: string;
            };
            authority: {
                title: string;
                content: string;
            };
            cookies: {
                title: string;
                important: string;
                no_cookies: string;
                basic_data: string;
            };
            security: {
                title: string;
                content: string;
            };
            modifications: {
                title: string;
                content: string;
            };
        };
        last_updated: string;
        date: string;
    };
}

export interface MenuCategory {
    title: string;
    subtitle?: string;
    items: Array<{
        allergens: string[];
        name: string;
        description: string;
        price: string;
        recommended?: boolean;
        image?: string | null;
        imageAlt?: string;
    }>;
}