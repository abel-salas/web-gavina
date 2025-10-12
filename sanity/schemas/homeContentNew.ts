export const homeContentNew = {
  name: 'homeContentNew',
  title: 'Página HOME (Nueva)',
  type: 'document',
  icon: () => '🏠',
  fields: [
    // Idioma del documento
    {
      name: 'locale',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Español', value: 'es' },
          { title: 'Català', value: 'ca' },
          { title: 'English', value: 'en' },
          { title: 'Deutsch', value: 'de' },
          { title: 'Nederlands', value: 'nl' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    
    // SECCIÓN HERO/PRINCIPAL
    {
      name: 'hero',
      title: 'Sección Hero Principal',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          description: 'Ej: "Restaurant Banys La Gavina"'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Ej: "Desde 1958 en primera línea de mar"'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 3,
          description: 'Descripción principal del restaurante'
        },
        {
          name: 'ctaText',
          title: 'Texto del Botón Principal',
          type: 'string',
          description: 'Ej: "Ver Carta"'
        },
        {
          name: 'ctaSecondaryText',
          title: 'Texto del Botón Secundario',
          type: 'string',
          description: 'Ej: "Reservar Mesa"'
        },
        {
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            }
          ]
        }
      ]
    },
    
    // SECCIÓN SOBRE NOSOTROS
    {
      name: 'aboutSection',
      title: 'Sección Sobre Nosotros',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: "Nuestra Historia"'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Subtítulo descriptivo'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 4,
          description: 'Historia y descripción del restaurante'
        },
        {
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            }
          ]
        },
        {
          name: 'features',
          title: 'Características Destacadas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'icon',
                title: 'Icono',
                type: 'string',
                description: 'Nombre del icono de Material Icons'
              },
              {
                name: 'title',
                title: 'Título',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Descripción',
                type: 'text',
                rows: 2
              }
            ]
          }]
        }
      ]
    },
    
    // SECCIÓN ESPECIALIDADES/MENÚ DESTACADO
    {
      name: 'specialtiesSection',
      title: 'Sección Especialidades',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: "Nuestras Especialidades"'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Descripción de las especialidades'
        },
        {
          name: 'specialtyItems',
          title: 'Platos Destacados',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Nombre del Plato',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Descripción',
                type: 'text',
                rows: 2
              },
              {
                name: 'price',
                title: 'Precio',
                type: 'string',
                description: 'Ej: "Desde 18€"'
              },
              {
                name: 'image',
                title: 'Imagen del Plato',
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string'
                  }
                ]
              },
              {
                name: 'category',
                title: 'Categoría',
                type: 'string',
                options: {
                  list: [
                    { title: 'Arroces', value: 'arroces' },
                    { title: 'Mariscos', value: 'mariscos' },
                    { title: 'Pescados', value: 'pescados' },
                    { title: 'Carnes', value: 'carnes' }
                  ]
                }
              }
            ]
          }]
        },
        {
          name: 'viewMenuText',
          title: 'Texto "Ver Menú Completo"',
          type: 'string',
          description: 'Ej: "Ver Menú Completo"'
        }
      ]
    },
    
    // SECCIÓN UBICACIÓN
    {
      name: 'locationSection',
      title: 'Sección Ubicación',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: "Ubicación Privilegiada"'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Descripción de la ubicación'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 3,
          description: 'Descripción de la ubicación y entorno'
        },
        {
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string'
            }
          ]
        }
      ]
    },
    
    // SECCIÓN CONTACTO
    {
      name: 'contactSection',
      title: 'Sección Contacto',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          description: 'Ej: "Contacta con Nosotros"'
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Descripción de contacto'
        },
        {
          name: 'ctaText',
          title: 'Texto del Botón',
          type: 'string',
          description: 'Ej: "Contactar"'
        }
      ]
    },
    
    // METADATA Y SEO
    {
      name: 'seo',
      title: 'SEO y Metadata',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Título Meta',
          type: 'string',
          description: 'Título para SEO (max 60 caracteres)'
        },
        {
          name: 'metaDescription',
          title: 'Descripción Meta',
          type: 'text',
          rows: 3,
          description: 'Descripción para SEO (max 160 caracteres)'
        },
        {
          name: 'keywords',
          title: 'Palabras Clave',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Palabras clave para SEO'
        }
      ]
    },
    
    // Estado activo
    {
      name: 'isActive',
      title: 'Activo',
      type: 'boolean',
      description: 'Solo el contenido activo se mostrará en la web',
      initialValue: true
    },
    
    // Última actualización
    {
      name: 'lastUpdated',
      title: 'Última Actualización',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }
  ],
  
  preview: {
    select: {
      title: 'hero.title',
      locale: 'locale',
      isActive: 'isActive',
      lastUpdated: 'lastUpdated'
    },
    prepare(selection: { title: string, locale: string, isActive: boolean, lastUpdated: string }) {
      const { title, locale, isActive, lastUpdated } = selection
      const localeFlag = {
        es: '🇪🇸',
        ca: '🏴',
        en: '🇺🇸', 
        de: '🇩🇪',
        nl: '🇳🇱'
      }[locale] || '🌐'
      
      const status = isActive ? '✅' : '❌'
      const date = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : ''
      
      return {
        title: `${localeFlag} ${title || 'Página HOME'}`,
        subtitle: `${status} ${date ? `- ${date}` : ''}`
      }
    }
  }
}