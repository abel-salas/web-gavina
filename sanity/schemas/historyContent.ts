import { defineField, defineType } from 'sanity'

export const historyContent = defineType({
  name: 'historyContent',
  title: 'Contenido de Historia',
  type: 'document',
  icon: () => '📚',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'ID de Sección',
      type: 'string',
      options: {
        list: [
          { title: 'Origen', value: 'origin' },
          { title: 'Contexto de Calella', value: 'calella_context' },
          { title: 'Época Dorada', value: 'golden_era' },
          { title: 'Tradición', value: 'tradition' },
          { title: 'Cinema de Calella', value: 'calella_cinema' },
          { title: 'Presente', value: 'present' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título de la Sección',
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
      name: 'content',
      title: 'Contenido',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ca', title: 'Català', type: 'text' },
        { name: 'nl', title: 'Nederlands', type: 'text' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar las secciones de historia',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'sectionId',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: title || 'Sin título',
        subtitle: `${order || '0'}. ${subtitle || 'Sin ID'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Por orden',
      name: 'byOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})