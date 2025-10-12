import { defineField, defineType } from 'sanity'

export const reservasContent = defineType({
  name: 'reservasContent',
  title: 'Página Reservas',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Identificativo',
      type: 'string',
      description: 'Solo para identificar el documento en Sanity',
      initialValue: 'Contenido de Reservas',
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
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),

    // Sección Formas de Reservar
    defineField({
      name: 'reservationMethods',
      title: 'Métodos de Reserva',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'telefono',
          title: 'Método Teléfono',
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
          ],
        }),
        defineField({
          name: 'whatsapp',
          title: 'Método WhatsApp',
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
          ],
        }),
        defineField({
          name: 'formulario',
          title: 'Método Formulario',
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
          ],
        }),
      ],
    }),

    // Ventajas/Beneficios
    defineField({
      name: 'advantages',
      title: 'Ventajas y Beneficios',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Lista de Ventajas',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (rule) => rule.required().min(3),
        }),
      ],
    }),

    // Sección de Horarios y Eventos
    defineField({
      name: 'schedule',
      title: 'Sección de Horarios y Eventos',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
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
          name: 'horariosSection',
          title: 'Sección Horarios',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Horarios de Atención',
            }),
            defineField({
              name: 'verano',
              title: 'Horario Verano',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Etiqueta', type: 'string', initialValue: 'Verano:' }),
                defineField({ name: 'horario', title: 'Horario', type: 'string', initialValue: 'Todos los días' }),
              ],
            }),
            defineField({
              name: 'invierno',
              title: 'Horario Invierno',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Etiqueta', type: 'string', initialValue: 'Invierno:' }),
                defineField({ name: 'horario', title: 'Horario', type: 'string', initialValue: 'Fines de semana' }),
              ],
            }),
            defineField({
              name: 'reservaNote',
              title: 'Nota de Reserva',
              type: 'string',
              initialValue: 'Reserva recomendada',
            }),
          ],
        }),
        defineField({
          name: 'musicSection',
          title: 'Sección Música',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              initialValue: 'Música en Directo Calella',
            }),
            defineField({
              name: 'verano',
              title: 'Eventos Verano',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Título', type: 'string', initialValue: 'Temporada de Verano' }),
                defineField({ name: 'description', title: 'Descripción', type: 'string', initialValue: 'Eventos musicales durante la semana' }),
                defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string', initialValue: 'Música en directo • Ambiente chill' }),
              ],
            }),
            defineField({
              name: 'finesdeSemana',
              title: 'Eventos Fines de Semana',
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Título', type: 'string', initialValue: 'Fines de Semana' }),
                defineField({ name: 'description', title: 'Descripción', type: 'string', initialValue: 'Sesiones musicales especiales' }),
                defineField({ name: 'subtitle', title: 'Subtítulo', type: 'string', initialValue: 'Música chill • Ambiente único' }),
              ],
            }),
            defineField({
              name: 'restaurantNote',
              title: 'Nota Restaurant',
              type: 'string',
              initialValue: 'Restaurant con música frente al mar',
            }),
          ],
        }),
        defineField({
          name: 'especialTitle',
          title: 'Título Información Especial',
          type: 'string',
          initialValue: 'Información Especial',
        }),
        defineField({
          name: 'especial',
          title: 'Nota Especial',
          type: 'text',
          description: 'Información adicional sobre eventos musicales, etc.',
        }),
      ],
    }),

    // Call to Action Final
    defineField({
      name: 'finalCta',
      title: 'Call to Action Final',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título del CTA',
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
          type: 'object',
          fields: [
            defineField({
              name: 'callButton',
              title: 'Botón Llamar',
              type: 'string',
              initialValue: 'Llamar Ahora',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'menuButton',
              title: 'Botón Ver Carta',
              type: 'string',
              initialValue: 'Ver Nuestra Carta',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título SEO',
          type: 'string',
          validation: (rule) => rule.required().max(60),
        }),
        defineField({
          name: 'description',
          title: 'Descripción SEO',
          type: 'text',
          validation: (rule) => rule.required().max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Palabras Clave',
          type: 'string',
          description: 'Separadas por comas',
        }),
      ],
    }),
  ],

  // Preview en Sanity Studio
  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      heroTitle: 'hero.title',
    },
    prepare({ title, locale, heroTitle }) {
      return {
        title: `${title} (${locale?.toUpperCase()})`,
        subtitle: heroTitle,
      }
    },
  },
})