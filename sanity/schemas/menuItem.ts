import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Plato del Menú',
  type: 'document',
  icon: () => '🍽️',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Plato',
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
      name: 'description',
      title: 'Descripción',
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
      name: 'price',
      title: 'Precio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Entrantes', value: 'starters' },
          { title: 'Ensaladas', value: 'salads' },
          { title: 'Arroces', value: 'rice' },
          { title: 'Carnes', value: 'meat' },
          { title: 'Pescados', value: 'fish' },
          { title: 'Bebidas', value: 'drinks' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'recommended',
      title: 'Recomendado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar los platos dentro de cada categoría',
    }),
  ],
  preview: {
    select: {
      title: 'name.es',
      subtitle: 'category',
      price: 'price',
      recommended: 'recommended',
    },
    prepare({ title, subtitle, price, recommended }) {
      return {
        title: title || 'Sin título',
        subtitle: `${subtitle || 'Sin categoría'} - ${price || 'Sin precio'}${recommended ? ' ⭐' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Por categoría y orden',
      name: 'categoryAndOrder',
      by: [{ field: 'category', direction: 'asc' }, { field: 'order', direction: 'asc' }],
    },
  ],
})