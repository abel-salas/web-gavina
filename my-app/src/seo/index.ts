// Exportaciones principales del módulo SEO
export { SEO_CONFIG } from './config/site';
export { SEO_DATA } from './data/content';
export { generatePageMetadata } from './generators/metadata';
export {
    generateRestaurantJsonLd,
    generateBreadcrumbJsonLd,
    generateWebsiteJsonLd
} from './generators/json-ld';

// Tipos
export type { SupportedLocale, PageType } from './data/content';

// Importar para helpers
import { SEO_DATA, type SupportedLocale } from './data/content';

// Helpers útiles
export function isValidLocale(locale: string): locale is SupportedLocale {
    return locale in SEO_DATA;
}

export function getValidLocale(locale: string): SupportedLocale {
    return isValidLocale(locale) ? locale : 'es';
}