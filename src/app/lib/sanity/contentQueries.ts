import { groq } from 'next-sanity';

// Query para obtener todo el contenido de la página HOME
export const homeContentQuery = groq`
  *[_type == "homeContent" && !(_id in path("drafts.**")) && isActive == true] | order(order asc) {
    _id,
    sectionId,
    order,
    
    // Encabezado Principal (hero)
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    
    // Sobre Nosotros (about)
    aboutTitle,
    aboutSubtitle,
    aboutDescription,
    aboutImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    
    // Especialidades (specialties)
    specialtiesTitle,
    specialtiesSubtitle,
    specialtyItems[] {
      name,
      description,
      price,
      image {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        },
        alt
      }
    },
    
    // Ubicación (location)
    locationTitle,
    locationSubtitle,
    locationDescription,
    locationImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    }
  }
`;

// Query para obtener contenido específico de una sección del HOME
export const homeSectionQuery = groq`
  *[_type == "homeContent" && sectionId == $sectionId][0] {
    _id,
    sectionId,
    order,
    
    // Encabezado Principal
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    
    // Sobre Nosotros
    aboutTitle,
    aboutSubtitle,
    aboutDescription,
    aboutImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    
    // Especialidades
    specialtiesTitle,
    specialtiesSubtitle,
    specialtyItems[] {
      name,
      description,
      price,
      image {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        },
        alt
      }
    },
    
    // Ubicación
    locationTitle,
    locationSubtitle,
    locationDescription,
    locationImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    }
  }
`;

// Query para obtener solo el encabezado (hero) de HOME
export const homeHeroQuery = groq`
  *[_type == "homeContent" && sectionId == "hero"][0] {
    _id,
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    }
  }
`;

// Query para obtener solo la sección de especialidades
export const homeSpecialtiesQuery = groq`
  *[_type == "homeContent" && sectionId == "specialties"][0] {
    _id,
    specialtiesTitle,
    specialtiesSubtitle,
    specialtyItems[] {
      name,
      description,
      price,
      image {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        },
        alt
      }
    }
  }
`;

// Query para contenido del MENÚ
export const menuContentQuery = groq`
  *[_type == "menuContent" && !(_id in path("drafts.**")) && isActive == true] | order(order asc) {
    _id,
    sectionId,
    order,
    
    // Encabezado del Menú
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    
    // Introducción
    introTitle,
    introDescription,
    
    // Categorías
    categoryTitles,
    categoryDescriptions
  }
`;

// Query para contenido de CONTACTO
export const contactContentQuery = groq`
  *[_type == "contactContent" && !(_id in path("drafts.**")) && isActive == true] | order(order asc) {
    _id,
    sectionId,
    order,
    
    // Encabezado de Contacto
    headerTitle,
    headerSubtitle,
    headerDescription,
    
    // Información de Contacto
    contactInfoTitle,
    contactInfoDescription,
    
    // Horarios
    hoursTitle,
    hoursDescription,
    specialHours,
    
    // Ubicación
    locationTitle,
    locationDescription,
    directions
  }
`;

// Query para items del menú (platos individuales)
export const menuItemsQuery = groq`
  *[_type == "menuItem"] | order(category asc, order asc) {
    _id,
    name,
    description,
    price,
    category,
    recommended,
    order,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    allergens
  }
`;

// Query para items del menú por categoría
export const menuItemsByCategoryQuery = groq`
  *[_type == "menuItem" && category == $category] | order(order asc) {
    _id,
    name,
    description,
    price,
    category,
    recommended,
    order,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    allergens
  }
`;