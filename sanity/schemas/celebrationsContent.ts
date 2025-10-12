import { defineField, defineType } from 'sanity'

export const celebrationsContent = defineType({
  name: 'celebrationsContent',
  title: 'Página de Celebraciones',
  type: 'document',
  icon: () => '🎉',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      description: 'Solo para identificación interna en Sanity Studio',
      validation: (Rule) => Rule.required()
    }),

    defineField({
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
      validation: (Rule) => Rule.required()
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Sección Hero',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge',
          type: 'string',
          description: 'Pequeño texto que aparece arriba del título'
        },
        {
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        },
        {
          name: 'heroSlider',
          title: '🖼️ Slider de Imágenes del Hero',
          type: 'reference',
          to: [{ type: 'imageSlider' }],
          description: '⚠️ IMPORTANTE: Primero crea un slider en "Slider de Imágenes", luego selecciónalo aquí. Las imágenes son globales (independientes del idioma).',
        }

      ]
    }),

    // Celebration Types Section
    defineField({
      name: 'celebrationTypesSection',
      title: 'Sección Tipos de Celebraciones',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        },
        {
          name: 'celebrationTypes',
          title: 'Tipos de Celebraciones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icono Material',
                  type: 'string',
                  description: 'Nombre del icono de Material Icons'
                },
                {
                  name: 'iconColor',
                  title: 'Color del Icono',
                  type: 'string',
                  description: 'Color en formato hex (#FF0000)'
                },
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'description',
                  title: 'Descripción',
                  type: 'text'
                },
                {
                  name: 'capacity',
                  title: 'Capacidad Recomendada',
                  type: 'string'
                },
                {
                  name: 'features',
                  title: 'Características',
                  type: 'array',
                  of: [{ type: 'string' }],
                  description: 'Lista de características principales'
                }
              ]
            }
          ]
        }
      ]
    }),

    // Capacity Section
    defineField({
      name: 'capacitySection',
      title: 'Sección Capacidad y Espacios',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        },
        {
          name: 'spaces',
          title: 'Espacios Disponibles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre del Espacio',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'capacity',
                  title: 'Capacidad',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Descripción',
                  type: 'text'
                },
                {
                  name: 'features',
                  title: 'Características',
                  type: 'array',
                  of: [{ type: 'string' }]
                },
                {
                  name: 'icon',
                  title: 'Icono Material',
                  type: 'string',
                  description: 'Icono para el espacio'
                }
              ]
            }
          ]
        }
      ]
    }),

    // Services Section
    defineField({
      name: 'servicesSection',
      title: 'Sección Servicios',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        }
      ]
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseSection',
      title: 'Sección Por Qué Elegirnos',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        },
        {
          name: 'features',
          title: 'Características Destacadas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icono Material',
                  type: 'string'
                },
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'description',
                  title: 'Descripción',
                  type: 'text'
                }
              ]
            }
          ]
        },
        {
          name: 'highlightedCelebrations',
          title: 'Celebraciones Destacadas',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'celebrations',
              title: 'Tipos de Celebraciones',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'icon',
                      title: 'Icono Material',
                      type: 'string'
                    },
                    {
                      name: 'title',
                      title: 'Título',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Descripción Breve',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),

    // Contact CTA Section
    defineField({
      name: 'contactCta',
      title: 'Llamada a la Acción de Contacto',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'text'
        },
        {
          name: 'buttons',
          title: 'Botones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Texto del Botón',
                  type: 'string',
                  validation: (Rule) => Rule.required()
                },
                {
                  name: 'href',
                  title: 'Enlace',
                  type: 'string'
                },
                {
                  name: 'variant',
                  title: 'Estilo del Botón',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Primario', value: 'primary' },
                      { title: 'Secundario', value: 'secondary' },
                      { title: 'Outline', value: 'outline' }
                    ]
                  }
                },
                {
                  name: 'icon',
                  title: 'Icono Material',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      heroTitle: 'hero.title'
    },
    prepare({ title, locale, heroTitle }) {
      return {
        title: title || heroTitle || 'Sin título',
        subtitle: `🌍 ${locale?.toUpperCase()} - Celebraciones`
      }
    }
  },

  orderings: [
    {
      title: 'Por Idioma',
      name: 'localeAsc',
      by: [{ field: 'locale', direction: 'asc' }]
    }
  ]
})