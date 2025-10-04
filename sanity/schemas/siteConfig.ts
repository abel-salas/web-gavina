import { defineField, defineType } from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuración del Sitio',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'configType',
      title: 'Tipo de Configuración',
      type: 'string',
      options: {
        list: [
          { title: 'SEO', value: 'seo' },
          { title: 'Navegación', value: 'nav' },
          { title: 'Contacto', value: 'contact' },
          { title: 'Footer', value: 'footer' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteName',
      title: 'Nombre del Sitio',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.configType !== 'seo',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descripción del Sitio',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      hidden: ({ document }) => document?.configType !== 'seo',
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras Clave (SEO)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.configType !== 'seo',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
      hidden: ({ document }) => document?.configType !== 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      hidden: ({ document }) => document?.configType !== 'contact',
    }),
    defineField({
      name: 'mobile',
      title: 'Móvil',
      type: 'string',
      hidden: ({ document }) => document?.configType !== 'contact',
    }),
    defineField({
      name: 'hours',
      title: 'Horarios',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      hidden: ({ document }) => document?.configType !== 'contact',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      hidden: ({ document }) => document?.configType !== 'contact',
    }),
  ],
  preview: {
    select: {
      title: 'configType',
      siteName: 'siteName.es',
    },
    prepare({ title, siteName }) {
      return {
        title: `Configuración: ${title || 'Sin tipo'}`,
        subtitle: siteName || 'Configuración del sitio',
      }
    },
  },
})