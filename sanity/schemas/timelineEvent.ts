import { defineField, defineType } from 'sanity'

export const timelineEvent = defineType({
  name: 'timelineEvent',
  title: 'Evento de Timeline',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'year',
      title: 'Año',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'event',
      title: 'Evento',
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
      name: 'importance',
      title: 'Importancia',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Importante', value: 'important' },
          { title: 'Muy Importante', value: 'very-important' },
        ],
      },
      initialValue: 'normal',
    }),
  ],
  preview: {
    select: {
      title: 'event.es',
      subtitle: 'year',
      importance: 'importance',
    },
    prepare({ title, subtitle, importance }) {
      let importanceIcon = '⭐'
      if (importance === 'very-important') importanceIcon = '⭐⭐⭐'
      else if (importance === 'important') importanceIcon = '⭐⭐'
      
      return {
        title: `${subtitle}: ${title || 'Sin descripción'}`,
        subtitle: `${importanceIcon} ${importance || 'normal'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Por año',
      name: 'byYear',
      by: [{ field: 'year', direction: 'asc' }],
    },
  ],
})