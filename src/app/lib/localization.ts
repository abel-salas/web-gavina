// Helper simple para generar enlaces con locale
export function localizedHref(locale: string, path: string): string {
    return `/${locale}${path}`;
}

// Helper para obtener traducciones (server-side)
import { getDictionary } from './getDictionary';

export function getLocalizedData(locale: string) {
    return {
        dict: getDictionary(locale),
        href: (path: string) => localizedHref(locale, path),
        locale
    };
}