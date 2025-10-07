import { defineField, defineType } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Contenido de Página',
  type: 'document',
  icon: () => '📄',
  fields: [
    defineField({
      name: 'pageId',
      title: 'ID de Página',
      type: 'string',
      options: {
        list: [
          { title: 'Inicio', value: 'home' },
          { title: 'Menú', value: 'menu' },
          { title: 'Historia', value: 'history' },
          { title: 'Contacto', value: 'contact' },
          // { title: 'Galería', value: 'gallery' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Título (SEO)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
      ],
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción (SEO)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'pageId',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Sin título',
        subtitle: `Página: ${subtitle || 'Sin definir'}`,
      }
    },
  },
})