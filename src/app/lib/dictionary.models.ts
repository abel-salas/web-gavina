export interface Dictionary {
    seo: {
        siteName: string;
        siteDescription: string;
        keywords: string;
        locale: string;
    };
    nav: {
        home: string;
        menu: string;
        historia: string;
        reservas: string;
        contacto: string;
        gallery: string;
    };
    home: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        cta?: string;
        cta_secondary?: string;
    };
    menu: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        categories: {
            starters: MenuCategory;
            salads: MenuCategory;
            rice: MenuCategory;
            meat: MenuCategory;
            fish: MenuCategory;
            drinks: MenuCategory;
        };
    };
    contact: {
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
    };
    gallery: {
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
        services: {
            title: string;
            subtitle: string;
            items: Array<{
                title: string;
                description: string;
            }>;
        };
        testimonials: {
            title: string;
            subtitle: string;
            items: Array<{
                name: string;
                comment: string;
            }>;
        };
    };
    history: {
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
    footer: {
        description: string;
        contact: {
            title: string;
            address: string;
            phone: string;
            mobile: string;
        };
        hours: {
            title: string;
            text: string;
        };
        social: {
            title: string;
            facebook: string;
        };
        copyright: string;
    };
}

export interface MenuCategory {
    title: string;
    subtitle?: string;
    items: Array<{
        name: string;
        description: string;
        price: string;
        recommended?: boolean;
    }>;
}