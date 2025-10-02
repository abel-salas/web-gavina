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
    };
    menu: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
    };
    contact: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
    };
    gallery: {
        title: string;
        subtitle: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
    };
}