import { defineField, defineType } from 'sanity'

export const menuContent = defineType({
  name: 'menuContent',
  title: 'Página de Menú',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'ID de la Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Encabezado del Menú', value: 'hero' },
          { title: 'Introducción', value: 'intro' },
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

    // Intro Section
    defineField({
      name: 'introTitle',
      title: 'Título Introducción',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'intro',
    }),

    defineField({
      name: 'introDescription',
      title: 'Descripción Introducción',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'intro',
    }),

    // Categories Section


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
        hero: 'Encabezado del Menú',
        intro: 'Introducción',
        categories: 'Categorías',
      }
      
      return {
        title: `${isActive ? '✅' : '❌'} ${sectionNames[title as keyof typeof sectionNames] || title}`,
        subtitle: `Orden: ${order} • ${isActive ? 'ACTIVO' : 'INACTIVO'}`,
      }
    },
  },
})