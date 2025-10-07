import { defineField, defineType } from 'sanity'

export const contactContent = defineType({
  name: 'contactContent',
  title: 'Contenido de la Página de Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'ID de la Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Encabezado de Contacto', value: 'header' },
          { title: 'Información de Contacto', value: 'info' },
          { title: 'Horarios', value: 'hours' },
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

    // Header Section
    defineField({
      name: 'headerTitle',
      title: 'Título Principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'header',
    }),

    defineField({
      name: 'headerSubtitle',
      title: 'Subtítulo',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'header',
    }),

    defineField({
      name: 'headerDescription',
      title: 'Descripción Principal',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'header',
    }),

    // Contact Info Section
    defineField({
      name: 'contactInfoTitle',
      title: 'Título Información de Contacto',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'info',
    }),

    defineField({
      name: 'contactInfoDescription',
      title: 'Descripción Información de Contacto',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'info',
    }),

    // Hours Section
    defineField({
      name: 'hoursTitle',
      title: 'Título Horarios',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hours',
    }),

    defineField({
      name: 'hoursDescription',
      title: 'Descripción Horarios',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.sectionId !== 'hours',
    }),

    defineField({
      name: 'specialHours',
      title: 'Horarios Especiales',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      description: 'Horarios especiales, temporadas, días festivos, etc.',
      hidden: ({ document }) => document?.sectionId !== 'hours',
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
      name: 'directions',
      title: 'Indicaciones',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      description: 'Instrucciones para llegar al restaurante',
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
        header: 'Encabezado de Contacto',
        info: 'Información de Contacto',
        hours: 'Horarios',
        location: 'Ubicación',
      }
      
      return {
        title: `${isActive ? '✅' : '❌'} ${sectionNames[title as keyof typeof sectionNames] || title}`,
        subtitle: `Orden: ${order} • ${isActive ? 'ACTIVO' : 'INACTIVO'}`,
      }
    },
  },
})