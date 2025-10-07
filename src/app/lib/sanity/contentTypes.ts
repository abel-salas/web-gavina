// Interfaces para el contenido de Sanity

// Tipo base para textos multiidioma
export interface MultiLanguageText {
  es?: string;
  en?: string;
  ca?: string;
  nl?: string;
}

// Tipo base para imágenes de Sanity
export interface SanityImage {
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
      lqip?: string;
    };
  };
  alt?: string;
}

// Contenido de la página HOME
export interface HomeContent {
  _id: string;
  sectionId: 'hero' | 'about' | 'specialties' | 'location';
  order: number;
  isActive: boolean;
  
  // Encabezado Principal (hero)
  heroTitle?: MultiLanguageText;
  heroSubtitle?: MultiLanguageText;
  heroDescription?: MultiLanguageText;
  heroBackgroundImage?: SanityImage;
  
  // Sobre Nosotros (about)
  aboutTitle?: MultiLanguageText;
  aboutSubtitle?: MultiLanguageText;
  aboutDescription?: MultiLanguageText;
  aboutImage?: SanityImage;
  
  // Especialidades (specialties)
  specialtiesTitle?: MultiLanguageText;
  specialtiesSubtitle?: MultiLanguageText;
  specialtyItems?: SpecialtyItem[];
  
  // Ubicación (location)
  locationTitle?: MultiLanguageText;
  locationSubtitle?: MultiLanguageText;
  locationDescription?: MultiLanguageText;
  locationImage?: SanityImage;
}

// Item de especialidad
export interface SpecialtyItem {
  name: MultiLanguageText;
  description: MultiLanguageText;
  price: string;
  image: SanityImage;
}

// Contenido de la página MENÚ
export interface MenuContent {
  _id: string;
  sectionId: 'hero' | 'intro' | 'categories';
  order: number;
  isActive: boolean;
  
  // Encabezado del Menú
  heroTitle?: MultiLanguageText;
  heroSubtitle?: MultiLanguageText;
  heroDescription?: MultiLanguageText;
  heroBackgroundImage?: SanityImage;
  
  // Introducción
  introTitle?: MultiLanguageText;
  introDescription?: MultiLanguageText;
  
  // Categorías
  categoryTitles?: {
    starters?: MultiLanguageText;
    salads?: MultiLanguageText;
    rice?: MultiLanguageText;
    meat?: MultiLanguageText;
    fish?: MultiLanguageText;
    drinks?: MultiLanguageText;
  };
  categoryDescriptions?: {
    starters?: MultiLanguageText;
    salads?: MultiLanguageText;
    rice?: MultiLanguageText;
    meat?: MultiLanguageText;
    fish?: MultiLanguageText;
    drinks?: MultiLanguageText;
  };
}

// Contenido de la página CONTACTO
export interface ContactContent {
  _id: string;
  sectionId: 'header' | 'info' | 'hours' | 'location';
  order: number;
  isActive: boolean;
  
  // Encabezado de Contacto
  headerTitle?: MultiLanguageText;
  headerSubtitle?: MultiLanguageText;
  headerDescription?: MultiLanguageText;
  
  // Información de Contacto
  contactInfoTitle?: MultiLanguageText;
  contactInfoDescription?: MultiLanguageText;
  
  // Horarios
  hoursTitle?: MultiLanguageText;
  hoursDescription?: MultiLanguageText;
  specialHours?: MultiLanguageText;
  
  // Ubicación
  locationTitle?: MultiLanguageText;
  locationDescription?: MultiLanguageText;
  directions?: MultiLanguageText;
}

// Item del menú (plato individual)
export interface MenuItem {
  _id: string;
  name: MultiLanguageText;
  description: MultiLanguageText;
  price: string;
  category: 'starters' | 'salads' | 'rice' | 'meat' | 'fish' | 'drinks';
  recommended: boolean;
  order: number;
  image?: SanityImage;
  allergens?: string[];
}

// Tipos de respuesta de las queries
export interface HomeContentResponse {
  hero?: HomeContent;
  about?: HomeContent;
  specialties?: HomeContent;
  location?: HomeContent;
}

export interface MenuContentResponse {
  hero?: MenuContent;
  intro?: MenuContent;
  categories?: MenuContent;
}

export interface ContactContentResponse {
  header?: ContactContent;
  info?: ContactContent;
  hours?: ContactContent;
  location?: ContactContent;
}

// Función helper para obtener texto localizado
export function getLocalizedText(
  text: MultiLanguageText | undefined,
  locale: string,
  fallback: string = ''
): string {
  if (!text) return fallback;
  
  const validLocale = locale as keyof MultiLanguageText;
  return text[validLocale] || text.es || text.en || fallback;
}

// Función helper para procesar respuesta de homeContent
export function processHomeContentResponse(data: HomeContent[]): HomeContentResponse {
  const response: HomeContentResponse = {};
  
  data.forEach(item => {
    switch (item.sectionId) {
      case 'hero':
        response.hero = item;
        break;
      case 'about':
        response.about = item;
        break;
      case 'specialties':
        response.specialties = item;
        break;
      case 'location':
        response.location = item;
        break;
    }
  });
  
  return response;
}

// Función helper para procesar respuesta de menuContent
export function processMenuContentResponse(data: MenuContent[]): MenuContentResponse {
  const response: MenuContentResponse = {};
  
  data.forEach(item => {
    switch (item.sectionId) {
      case 'hero':
        response.hero = item;
        break;
      case 'intro':
        response.intro = item;
        break;
      case 'categories':
        response.categories = item;
        break;
    }
  });
  
  return response;
}

// Función helper para procesar respuesta de contactContent
export function processContactContentResponse(data: ContactContent[]): ContactContentResponse {
  const response: ContactContentResponse = {};
  
  data.forEach(item => {
    switch (item.sectionId) {
      case 'header':
        response.header = item;
        break;
      case 'info':
        response.info = item;
        break;
      case 'hours':
        response.hours = item;
        break;
      case 'location':
        response.location = item;
        break;
    }
  });
  
  return response;
}