import { defineField, defineType } from 'sanity'

export const contactContent = defineType({
  name: 'contactContent',
  title: 'Página Contacto',
  type: 'document',
  icon: () => '📞',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Identificativo',
      type: 'string',
      description: 'Solo para identificar el documento en Sanity',
      initialValue: 'Contenido de Contacto',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'locale',
      title: 'Idioma',
      type: 'string',
      description: 'Código del idioma (es, ca, en, de, nl)',
      validation: (rule) => rule.required(),
    }),

    // Sección Hero
    defineField({
      name: 'hero',
      title: 'Sección Principal (Hero)',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // CTA Reservas
    defineField({
      name: 'reservationCta',
      title: 'CTA de Reservas',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Texto del Botón',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Sección de Celebraciones
    defineField({
      name: 'celebrationsSection',
      title: 'Sección de Celebraciones',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'celebrationTypes',
          title: 'Tipos de Celebraciones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icono Material',
                  type: 'string',
                  description: 'Nombre del icono Material (ej: celebration, business, family_restroom)',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'iconColor',
                  title: 'Color del Icono',
                  type: 'string',
                  description: 'Color en formato hex (ej: #FFD700)',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'features',
                  title: 'Características',
                  type: 'array',
                  of: [
                    {
                      type: 'string',
                    }
                  ],
                  validation: (rule) => rule.min(1),
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  icon: 'icon'
                },
                prepare({ title, icon }) {
                  return {
                    title: title || 'Tipo de Celebración',
                    subtitle: `Icono: ${icon}`
                  }
                }
              }
            }
          ],
          validation: (rule) => rule.min(1),
        }),
        defineField({
          name: 'ctaText',
          title: 'Texto del CTA',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Sección de Información de Contacto
    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'contactMethods',
          title: 'Métodos de Contacto',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Tipo',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Teléfono', value: 'phone' },
                      { title: 'WhatsApp', value: 'whatsapp' },
                      { title: 'Email', value: 'email' },
                      { title: 'Dirección', value: 'address' },
                    ],
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icono (Material Icon)',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'label',
                  title: 'Etiqueta',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'value',
                  title: 'Valor',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'link',
                  title: 'Enlace (opcional)',
                  type: 'url',
                }),
              ],
            },
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),

    // Sección de Horarios
    defineField({
      name: 'scheduleSection',
      title: 'Sección de Horarios',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'scheduleNote',
          title: 'Nota sobre Horarios',
          type: 'text',
        }),
        defineField({
          name: 'schedules',
          title: 'Horarios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'period',
                  title: 'Período',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'days',
                  title: 'Días',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'hours',
                  title: 'Horarios',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'note',
                  title: 'Nota adicional',
                  type: 'string',
                }),
              ],
            },
          ],
          validation: (rule) => rule.min(1),
        }),
      ],
    }),

    // Sección de Ubicación
    defineField({
      name: 'locationSection',
      title: 'Sección de Ubicación',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Dirección Completa',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'mapDescription',
          title: 'Descripción del Mapa',
          type: 'text',
        }),
        defineField({
          name: 'transportInfo',
          title: 'Información de Transporte',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Tipo de Transporte',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Coche', value: 'car' },
                      { title: 'Transporte Público', value: 'public' },
                      { title: 'Andando', value: 'walking' },
                    ],
                  },
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icono (Material Icon)',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Descripción',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // Formulario de Contacto
    defineField({
      name: 'contactForm',
      title: 'Formulario de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'successMessage',
          title: 'Mensaje de Éxito',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'errorMessage',
          title: 'Mensaje de Error',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // CTA Final
    defineField({
      name: 'finalCta',
      title: 'CTA Final',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'buttons',
          title: 'Botones',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Texto',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'href',
                  title: 'Enlace',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'variant',
                  title: 'Variante',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Primario', value: 'primary' },
                      { title: 'Secundario', value: 'secondary' },
                      { title: 'Outline', value: 'outline' },
                    ],
                  },
                  initialValue: 'primary',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'icon',
                  title: 'Icono (opcional)',
                  type: 'string',
                }),
              ],
            },
          ],
          validation: (rule) => rule.min(1).max(2),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      heroTitle: 'hero.title',
    },
    prepare({ title, locale, heroTitle }: { title: string, locale: string, heroTitle: string }) {
      const flags: Record<string, string> = {
        es: '🇪🇸',
        ca: '🏴󠁥󠁳󠁣󠁴󠁿',
        en: '🇬🇧',
        de: '🇩🇪',
        nl: '🇳🇱',
      }
      const flag = flags[locale] || '🌐'
      
      return {
        title: `${flag} ${heroTitle || title}`,
        subtitle: `Contacto - ${locale?.toUpperCase()}`,
      }
    },
  },
})