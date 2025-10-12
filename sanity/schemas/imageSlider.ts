import { defineField, defineType } from 'sanity'

export const imageSlider = defineType({
  name: 'imageSlider',
  title: '🖼️ Slider de Imágenes',
  type: 'document',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Slider (para identificarlo)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Necesitas un nombre para identificar este slider'),
      description: 'Ej: "Slider Celebraciones", "Slider Home", etc. Solo para identificación en Sanity.'
    }),

    defineField({
      name: 'title',
      title: 'Título del Slider (mostrado en web)',
      type: 'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ca', title: 'Català', type: 'string' },
        { name: 'nl', title: 'Nederlands', type: 'string' },
        { name: 'de', title: 'Deutsch', type: 'string' },
      ],
      description: 'Título que aparecerá encima del slider en la web (opcional)',
    }),

    defineField({
      name: 'isActive',
      title: 'Slider Activo',
      type: 'boolean',
      initialValue: true,
      description: 'Desactiva el slider para ocultarlo de la página',
    }),

    defineField({
      name: 'images',
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
      validation: (Rule) => Rule.min(1).max(10).required(),
      description: 'Añade entre 1 y 10 imágenes. Si solo hay una imagen, se mostrará sin slider.',
    }),

    defineField({
      name: 'autoplaySpeed',
      title: 'Velocidad de Autoplay (segundos)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(2).max(15),
      description: 'Tiempo en segundos entre cambios automáticos de imagen',
    }),

    defineField({
      name: 'showOnMobile',
      title: 'Mostrar en Móvil',
      type: 'boolean',
      initialValue: true,
      description: 'Desactiva para ocultar el slider en dispositivos móviles',
    }),

    defineField({
      name: 'order',
      title: 'Orden de Aparición',
      type: 'number',
      initialValue: 0,
      description: 'Controla el orden si hay múltiples sliders',
    }),
  ],

  preview: {
    select: {
      name: 'name',
      title: 'title.es',
      isActive: 'isActive',
      imageCount: 'images',
      order: 'order',
    },
    prepare({ name, title, isActive, imageCount, order }) {
      const count = Array.isArray(imageCount) ? imageCount.length : 0;
      const displayName = name || 'Slider sin nombre';
      const webTitle = title ? ` (${title})` : '';

      return {
        title: `${isActive ? '✅' : '❌'} ${displayName}${webTitle}`,
        subtitle: `${count} imagen${count !== 1 ? 'es' : ''} • Orden: ${order} • ${isActive ? 'ACTIVO' : 'INACTIVO'}`,
        media: count > 0 ? imageCount[0]?.image : undefined,
      }
    },
  },

  orderings: [
    {
      title: 'Por orden de aparición',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})