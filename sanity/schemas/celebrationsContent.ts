import { defineField, defineType } from 'sanity'

export const celebrationsContent = defineType({
  name: 'celebrationsContent',
  title: 'Página de Celebraciones',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'ID de la Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Encabezado Principal', value: 'hero' },
          { title: 'Tipos de Celebraciones', value: 'types' },
          { title: 'Capacidad y Espacios', value: 'capacity' },
          { title: 'Servicios Incluidos', value: 'services' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isActive',
      title: 'Contenido Activo',
      type: 'boolean',
      initialValue: true,
      description: 'Desactiva este contenido para usar el fallback del JSON',
    }),

    // Hero Section con Slider
    defineField({
      name: 'heroSlider',
      title: 'Imágenes del Slider',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Texto alternativo',
                  description: 'Descripción de la imagen para accesibilidad',
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Título de la Imagen (Opcional)',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ca', title: 'Català', type: 'string' },
                { name: 'nl', title: 'Nederlands', type: 'string' },
                { name: 'de', title: 'Deutsch', type: 'string' },
              ],
              description: 'Título que aparecerá sobre la imagen (opcional)',
            },
          ],
          preview: {
            select: {
              title: 'caption.es',
              media: 'image',
            },
            prepare({ title, media }) {
              return {
                title: title || 'Sin título',
                media: media,
              }
            },
          },
        },
      ],
      description: 'Imágenes para el slider principal de celebrations',
      hidden: ({ document }) => document?.sectionId !== 'hero',
      validation: (Rule) => Rule.max(8).warning('Se recomienda máximo 8 imágenes para mejor rendimiento'),
    }),

    defineField({
      name: 'heroTitle',
      title: 'Título Principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hero',
    }),

    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hero',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Descripción Principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
        { name: 'de', title: 'Deutsch', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hero',
    }),

    // Tipos de Celebraciones Section
    defineField({
      name: 'typesTitle',
      title: 'Título de Tipos de Celebraciones',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'types',
    }),

    defineField({
      name: 'typesSubtitle',
      title: 'Subtítulo de Tipos',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'types',
    }),

    defineField({
      name: 'celebrationTypes',
      title: 'Tipos de Celebraciones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nombre del Tipo',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ca', title: 'Català', type: 'string' },
                { name: 'nl', title: 'Nederlands', type: 'string' },
                { name: 'de', title: 'Deutsch', type: 'string' },
              ],
            },
            {
              name: 'description',
              title: 'Descripción',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'text' },
                { name: 'en', title: 'English', type: 'text' },
                { name: 'ca', title: 'Català', type: 'text' },
                { name: 'nl', title: 'Nederlands', type: 'text' },
                { name: 'de', title: 'Deutsch', type: 'text' },
              ],
            },
            {
              name: 'icon',
              title: 'Icono Material',
              type: 'string',
              description: 'Nombre del icono de Material Icons (ej: celebration, restaurant, cake)',
            },
            {
              name: 'capacity',
              title: 'Capacidad Recomendada',
              type: 'string',
              description: 'Ej: "10-50 personas", "Hasta 100 personas"',
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'types',
    }),

    // Capacidad y Espacios Section
    defineField({
      name: 'capacityTitle',
      title: 'Título de Capacidad',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'capacity',
    }),

    defineField({
      name: 'capacityDescription',
      title: 'Descripción de Capacidad',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
        { name: 'de', title: 'Deutsch', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'capacity',
    }),

    defineField({
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
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ca', title: 'Català', type: 'string' },
                { name: 'nl', title: 'Nederlands', type: 'string' },
                { name: 'de', title: 'Deutsch', type: 'string' },
              ],
            },
            {
              name: 'capacity',
              title: 'Capacidad',
              type: 'string',
            },
            {
              name: 'features',
              title: 'Características',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'text' },
                { name: 'en', title: 'English', type: 'text' },
                { name: 'ca', title: 'Català', type: 'text' },
                { name: 'nl', title: 'Nederlands', type: 'text' },
                { name: 'de', title: 'Deutsch', type: 'text' },
              ],
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'capacity',
    }),

    // Servicios Incluidos Section
    defineField({
      name: 'servicesTitle',
      title: 'Título de Servicios',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'services',
    }),

    defineField({
      name: 'services',
      title: 'Servicios Incluidos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nombre del Servicio',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ca', title: 'Català', type: 'string' },
                { name: 'nl', title: 'Nederlands', type: 'string' },
                { name: 'de', title: 'Deutsch', type: 'string' },
              ],
            },
            {
              name: 'description',
              title: 'Descripción del Servicio',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'text' },
                { name: 'en', title: 'English', type: 'text' },
                { name: 'ca', title: 'Català', type: 'text' },
                { name: 'nl', title: 'Nederlands', type: 'text' },
                { name: 'de', title: 'Deutsch', type: 'text' },
              ],
            },
            {
              name: 'icon',
              title: 'Icono Material',
              type: 'string',
              description: 'Nombre del icono de Material Icons',
            },
            {
              name: 'included',
              title: 'Incluido por defecto',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'services',
    }),

    // Metadata y configuración
    defineField({
      name: 'updatedAt',
      title: 'Última Actualización',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: 'sectionId',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, isActive } = selection;
      const sectionNames: Record<string, string> = {
        hero: 'Encabezado Principal',
        types: 'Tipos de Celebraciones',
        capacity: 'Capacidad y Espacios',
        services: 'Servicios Incluidos',
      };
      
      return {
        title: sectionNames[title] || title,
        subtitle: isActive ? '✅ Activo' : '❌ Inactivo',
      };
    },
  },

  orderings: [
    {
      title: 'Sección',
      name: 'sectionAsc',
      by: [{ field: 'sectionId', direction: 'asc' }],
    },
  ],
});