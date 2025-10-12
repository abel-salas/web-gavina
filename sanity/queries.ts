// Queries de Sanity para el Restaurant Banys La Gavina
import { client } from './client'
import { MenuCategory, Dictionary } from '../src/app/lib/dictionary.models'

// Query para obtener horarios del restaurant por locale
export const hoursContentQuery = `*[_type == "hoursContent" && locale == $locale && isActive == true][0] {
  _id,
  locale,
  title,
  subtitle,
  operatingDays,
  operatingHours,
  specialHours[] {
    title,
    description,
    dates,
    lunch,
    dinner,
    isActive
  },
  reservationNote,
  isActive,
  lastUpdated
}`

// Query para obtener contenido de contacto
export const contactContentQuery = `*[_type == "contactContent" && locale == $locale][0] {
  _id,
  locale,
  hero {
    badge,
    title,
    subtitle
  },
  reservationCta {
    title,
    description,
    buttonText
  },
  celebrationsSection {
    title,
    subtitle,
    description,
    celebrationTypes[] {
      icon,
      iconColor,
      title,
      features[]
    },
    ctaText
  },
  contactInfo {
    title,
    subtitle,
    description,
    contactMethods[] {
      type,
      icon,
      label,
      value,
      link
    }
  },
  scheduleSection {
    title,
    subtitle,
    description,
    scheduleNote,
    schedules[] {
      period,
      days,
      hours,
      note
    }
  },
  locationSection {
    title,
    subtitle,
    address,
    mapDescription,
    transportInfo[] {
      type,
      icon,
      title,
      description
    }
  },
  contactForm {
    title,
    description,
    successMessage,
    errorMessage
  },
  finalCta {
    title,
    description,
    buttons[] {
      text,
      href,
      variant,
      icon
    }
  }
}`

// Query para obtener contenido de celebraciones
// Query para configuración global de celebraciones
export const celebrationsGlobalConfigQuery = `*[_type == "celebrationsGlobalConfig" && isActive == true][0] {
  _id,
  heroSlider-> {
    _id,
    name,
    title,
    isActive,
    autoplaySpeed,
    showOnMobile,
    images[] {
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        },
        alt
      },
      caption
    }
  }
}`;

export const celebrationsContentQuery = `*[_type == "celebrationsContent" && locale == $locale][0] {
  _id,
  locale,
  hero {
    badge,
    title,
    subtitle,
    description,
    heroSlider-> {
      _id,
      name,
      title,
      isActive,
      autoplaySpeed,
      showOnMobile,
      images[] {
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions,
              lqip
            }
          },
          alt
        },
        caption
      }
    }
  },
  celebrationTypesSection {
    title,
    subtitle,
    description,
    celebrationTypes[] {
      icon,
      iconColor,
      title,
      description,
      capacity,
      features[]
    }
  },
  capacitySection {
    title,
    subtitle,
    description,
    spaces[] {
      name,
      capacity,
      description,
      features[],
      icon
    }
  },
  servicesSection {
    title,
    subtitle,
    description,
    services[] {
      icon,
      title,
      description,
      included
    }
  },
  whyChooseSection {
    title,
    subtitle,
    description,
    features[] {
      icon,
      title,
      description
    },
    highlightedCelebrations {
      title,
      celebrations[] {
        icon,
        title,
        description
      }
    }
  },
  contactCta {
    title,
    description,
    buttons[] {
      text,
      href,
      variant,
      icon
    }
  }
}`

// Query para obtener contenido de reservas
export const reservasContentQuery = `*[_type == "reservasContent" && locale == $locale][0] {
  _id,
  locale,
  hero {
    title,
    subtitle,
    description
  },
  reservationMethods {
    title,
    subtitle,
    telefono {
      title,
      description
    },
    whatsapp {
      title,
      description
    },
    formulario {
      title,
      description
    }
  },
  advantages {
    title,
    items[]
  },
  schedule {
    title,
    description,
    horariosSection {
      title,
      verano {
        label,
        horario
      },
      invierno {
        label,
        horario
      },
      reservaNote
    },
    musicSection {
      title,
      verano {
        title,
        description,
        subtitle
      },
      finesdeSemana {
        title,
        description,
        subtitle
      },
      restaurantNote
    },
    especialTitle,
    especial
  },
  finalCta {
    title,
    description,
    buttons {
      callButton,
      menuButton
    }
  },
  seo {
    title,
    description,
    keywords
  }
}`

// Query para obtener elementos del menú por categoría
export async function getMenuItemsByCategory(category: string, locale: string = 'es') {
  const query = `*[_type == "menuItem" && category == $category && isActive == true] | order(order asc) {
    _id,
    name,
    description,
    price,
    category,
    recommended,
    allergens,
    image,
    order
  }`
  
  const items = await client.fetch(query, { category })
  console.log('Menu items for category:', items);
  // Formatear para coincidir con MenuCategory interface
  return {
    title: getCategoryTitle(category, locale),
    subtitle: getCategorySubtitle(category, locale),
    items: items.map((item: any) => ({
      name: item.name?.[locale] || item.name?.es || 'Sin nombre',
      description: item.description?.[locale] || item.description?.es || 'Sin descripción',
      price: item.price || '0€',
      recommended: item.recommended || false,
      allergens: item.allergens || [],
      image: item.image || null,
      imageAlt: item.name?.[locale] || item.name?.es || 'Sin nombre',
    }))
  } as MenuCategory
}

// Query para obtener todas las categorías del menú
export async function getAllMenuCategories(locale: string = 'es') {
  const categories = ['starters', 'salads', 'rice', 'meat', 'fish', 'drinks']
  const menuData: any = {}
  
  for (const category of categories) {
    menuData[category] = await getMenuItemsByCategory(category, locale)
  }
  
  return menuData
}

// Query para obtener contenido de página
export async function getPageContent(pageId: string, locale: string = 'es') {
  const query = `*[_type == "pageContent" && pageId == $pageId][0] {
    _id,
    pageId,
    title,
    subtitle,
    description,
    metaTitle,
    metaDescription
  }`
  
  const pageData = await client.fetch(query, { pageId })
  
  if (!pageData) return null
  
  return {
    title: pageData.title?.[locale] || pageData.title?.es || 'Sin título',
    subtitle: pageData.subtitle?.[locale] || pageData.subtitle?.es || '',
    description: pageData.description?.[locale] || pageData.description?.es || '',
    metaTitle: pageData.metaTitle?.[locale] || pageData.metaTitle?.es || pageData.title?.[locale] || 'Sin título',
    metaDescription: pageData.metaDescription?.[locale] || pageData.metaDescription?.es || pageData.description?.[locale] || '',
  }
}

// Query para obtener secciones de historia
export async function getHistoryContent(locale: string = 'es') {
  const sectionsQuery = `*[_type == "historyContent"] | order(order asc) {
    _id,
    sectionId,
    title,
    content,
    order
  }`
  
  const timelineQuery = `*[_type == "timelineEvent"] | order(year asc) {
    _id,
    year,
    event,
    importance
  }`
  
  const [sections, timeline] = await Promise.all([
    client.fetch(sectionsQuery),
    client.fetch(timelineQuery)
  ])
  
  // Formatear secciones
  const formattedSections: any = {}
  sections.forEach((section: any) => {
    formattedSections[section.sectionId] = {
      title: section.title?.[locale] || section.title?.es || 'Sin título',
      content: section.content?.[locale] || section.content?.es || 'Sin contenido',
    }
  })
  
  // Formatear timeline
  const formattedTimeline = timeline.map((item: any) => ({
    year: item.year,
    event: item.event?.[locale] || item.event?.es || 'Sin evento',
  }))
  
  return {
    sections: formattedSections,
    timeline: formattedTimeline,
  }
}

// Query para obtener configuración del sitio
export async function getSiteConfig(configType: string, locale: string = 'es') {
  const query = `*[_type == "siteConfig" && configType == $configType][0] {
    _id,
    configType,
    siteName,
    siteDescription,
    keywords,
    address,
    phone,
    mobile,
    hours,
    facebook
  }`
  
  const config = await client.fetch(query, { configType })
  
  if (!config) return null
  
  return {
    siteName: config.siteName?.[locale] || config.siteName?.es || '',
    siteDescription: config.siteDescription?.[locale] || config.siteDescription?.es || '',
    keywords: config.keywords?.[locale] || config.keywords?.es || '',
    address: config.address || '',
    phone: config.phone || '',
    mobile: config.mobile || '',
    hours: config.hours?.[locale] || config.hours?.es || '',
    facebook: config.facebook || '',
  }
}

// Helper functions para títulos de categorías
function getCategoryTitle(category: string, locale: string): string {
  const titles: Record<string, Record<string, string>> = {
    starters: {
      es: 'Entrantes',
      en: 'Starters',
      ca: 'Entrants',
      nl: 'Voorgerechten'
    },
    salads: {
      es: 'Ensaladas',
      en: 'Salads',
      ca: 'Amanides',
      nl: 'Salades'
    },
    rice: {
      es: 'Arroces',
      en: 'Rice Dishes',
      ca: 'Arrossos',
      nl: 'Rijstgerechten'
    },
    meat: {
      es: 'Carnes',
      en: 'Meat',
      ca: 'Carns',
      nl: 'Vlees'
    },
    fish: {
      es: 'Pescados',
      en: 'Fish',
      ca: 'Peixos',
      nl: 'Vis'
    },
    drinks: {
      es: 'Bebidas',
      en: 'Drinks',
      ca: 'Begudes',
      nl: 'Drankjes'
    }
  }
  
  return titles[category]?.[locale] || titles[category]?.es || category
}

function getCategorySubtitle(category: string, locale: string): string {
  const subtitles: Record<string, Record<string, string>> = {
    starters: {
      es: 'Para compartir y disfrutar',
      en: 'To share and enjoy',
      ca: 'Per compartir i gaudir',
      nl: 'Om te delen en van te genieten'
    },
    salads: {
      es: 'Frescas y mediterráneas',
      en: 'Fresh and Mediterranean',
      ca: 'Fresques i mediterrànies',
      nl: 'Vers en mediterraan'
    },
    rice: {
      es: 'Especialidad de la casa',
      en: 'House specialty',
      ca: 'Especialitat de la casa',
      nl: 'Specialiteit van het huis'
    },
    meat: {
      es: 'Carnes selectas a la brasa',
      en: 'Select grilled meats',
      ca: 'Carns selectes a la brasa',
      nl: 'Geselecteerd gegrild vlees'
    },
    fish: {
      es: 'Del mar a tu mesa',
      en: 'From sea to table',
      ca: 'Del mar a la teva taula',
      nl: 'Van zee naar tafel'
    },
    drinks: {
      es: 'Refrescantes y variadas',
      en: 'Refreshing and varied',
      ca: 'Refrescants i variades',
      nl: 'Verfrissend en gevarieerd'
    }
  }
  
  return subtitles[category]?.[locale] || subtitles[category]?.es || ''
}

// Query para obtener contenido de HOME por locale (nuevo patrón)
export const homeContentNewQuery = `*[_type == "homeContentNew" && locale == $locale && isActive == true][0] {
  _id,
  locale,
  hero {
    title,
    subtitle,
    description,
    ctaText,
    ctaSecondaryText,
    backgroundImage {
      asset-> {
        url,
        _id
      },
      alt
    }
  },
  aboutSection {
    title,
    subtitle,
    description,
    backgroundImage {
      asset-> {
        url,
        _id
      },
      alt
    },
    features[] {
      icon,
      title,
      description
    }
  },
  specialtiesSection {
    title,
    subtitle,
    specialtyItems[] {
      name,
      description,
      price,
      category,
      image {
        asset-> {
          url,
          _id
        },
        alt
      }
    },
    viewMenuText
  },
  locationSection {
    title,
    subtitle,
    description,
    backgroundImage {
      asset-> {
        url,
        _id
      },
      alt
    }
  },
  contactSection {
    title,
    subtitle,
    ctaText
  },
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  isActive,
  lastUpdated
}`