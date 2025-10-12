import { defineField, defineType } from 'sanity'

export const celebrationsGlobalConfig = defineType({
  name: 'celebrationsGlobalConfig',
  title: '🎉 Configuración Global - Celebraciones',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    defineField({
      name: 'title',
      title: 'Identificador',
      type: 'string',
      initialValue: 'Configuración Global de Celebraciones',
      readOnly: true,
      description: 'Este documento configura elementos globales para todas las páginas de celebraciones'
    }),

    defineField({
      name: 'heroSlider',
      title: '🖼️ Slider del Hero de Celebraciones',
      type: 'reference',
      to: [{ type: 'imageSlider' }],
      description: 'Slider principal que aparecerá en la cabecera de la página de celebraciones (todas las versiones de idioma)',
      validation: (Rule) => Rule.required().error('Selecciona un slider para el hero de celebraciones')
    }),

    defineField({
      name: 'isActive',
      title: 'Configuración Activa',
      type: 'boolean',
      initialValue: true,
      description: 'Desactiva para usar la configuración por defecto'
    })
  ],

  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      heroSlider: 'heroSlider'
    },
    prepare({ title, isActive, heroSlider }) {
      return {
        title: `${isActive ? '✅' : '❌'} ${title}`,
        subtitle: `Slider: ${heroSlider ? 'Configurado' : 'Sin configurar'} • ${isActive ? 'ACTIVO' : 'INACTIVO'}`,
        media: () => '⚙️'
      }
    }
  }
})