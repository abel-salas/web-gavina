// Configuración centralizada de idiomas soportados
export interface Language {
  code: string;
  name: string;
  displayName: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'es', name: 'ES', displayName: 'Español' },
  { code: 'en', name: 'EN', displayName: 'English' },
  { code: 'ca', name: 'CA', displayName: 'Català' },
  { code: 'nl', name: 'NL', displayName: 'Nederlands' }
];

// Idioma por defecto
export const DEFAULT_LOCALE = 'es';

// Helper para obtener solo los códigos de idioma
export const LOCALE_CODES = SUPPORTED_LANGUAGES.map(lang => lang.code);

// Helper para obtener información de un idioma específico
export function getLanguageByCode(code: string): Language | undefined {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
}

// Helper para validar si un código de idioma es válido
export function isValidLocale(locale: string): boolean {
  return LOCALE_CODES.includes(locale);
}