import { defineField, defineType } from 'sanity'

export const homeContent = defineType({
  name: 'homeContent',
  title: 'Contenido de la Página Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'ID de la Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Encabezado Principal', value: 'hero' },
          { title: 'Sobre Nosotros', value: 'about' },
          { title: 'Especialidades', value: 'specialties' },
          { title: 'Ubicación', value: 'location' },
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

    // Encabezado Section
    defineField({
      name: 'heroTitle',
      title: 'Título Principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
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
      ],
      hidden: ({ document }) => document?.sectionId !== 'hero',
    }),

    defineField({
      name: 'heroBackgroundImage',
      title: 'Imagen de Fondo Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hero',
    }),

    // About Section
    defineField({
      name: 'aboutTitle',
      title: 'Título Sobre Nosotros',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'about',
    }),

    defineField({
      name: 'aboutSubtitle',
      title: 'Subtítulo Sobre Nosotros',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'about',
    }),

    defineField({
      name: 'aboutDescription',
      title: 'Descripción Sobre Nosotros',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'about',
    }),

    defineField({
      name: 'aboutImage',
      title: 'Imagen Sobre Nosotros',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'about',
    }),

    // Specialties Section
    defineField({
      name: 'specialtiesTitle',
      title: 'Título Especialidades',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'specialties',
    }),

    defineField({
      name: 'specialtiesSubtitle',
      title: 'Subtítulo Especialidades',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'specialties',
    }),

    defineField({
      name: 'specialtyItems',
      title: 'Items de Especialidades',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nombre',
              type: 'object',
              fields: [
                { name: 'es', title: 'Español', type: 'string' },
                { name: 'en', title: 'English', type: 'string' },
                { name: 'ca', title: 'Català', type: 'string' },
                { name: 'nl', title: 'Nederlands', type: 'string' },
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
              ],
            },
            {
              name: 'price',
              title: 'Precio',
              type: 'string',
            },
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
                },
              ],
            },
          ],
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'specialties',
    }),

    // Location Section
    defineField({
      name: 'locationTitle',
      title: 'Título Ubicación',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'location',
    }),

    defineField({
      name: 'locationSubtitle',
      title: 'Subtítulo Ubicación',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'location',
    }),

    defineField({
      name: 'locationDescription',
      title: 'Descripción Ubicación',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'location',
    }),

    defineField({
      name: 'locationImage',
      title: 'Imagen Ubicación',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
        },
      ],
      hidden: ({ document }) => document?.sectionId !== 'location',
    }),

    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: 'sectionId',
      order: 'order',
      isActive: 'isActive',
    },
    prepare({ title, order, isActive }) {
      const sectionNames = {
        hero: 'Encabezado Principal',
        about: 'Sobre Nosotros',
        specialties: 'Especialidades',
        location: 'Ubicación',
      }
      
      return {
        title: `${isActive ? '✅' : '❌'} ${sectionNames[title as keyof typeof sectionNames] || title}`,
        subtitle: `Orden: ${order} • ${isActive ? 'ACTIVO' : 'INACTIVO'}`,
      }
    },
  },
})