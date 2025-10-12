export const hoursContent = {
  name: 'hoursContent',
  title: 'Horarios del Restaurante',
  type: 'document',
  fields: [
    // Idioma del documento
    {
      name: 'locale',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Español', value: 'es' },
          { title: 'Català', value: 'ca' },
          { title: 'English', value: 'en' },
          { title: 'Deutsch', value: 'de' },
          { title: 'Nederlands', value: 'nl' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    
    // Título principal
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Ej: "Nuestro Horario", "Our Schedule"'
    },
    
    // Subtítulo
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 2,
      description: 'Descripción breve sobre los horarios'
    },
    
    // Días de funcionamiento
    {
      name: 'operatingDays',
      title: 'Días de Funcionamiento',
      type: 'string',
      description: 'Ej: "Abrimos de Viernes a Lunes", "Open from Friday to Monday"'
    },
    
    // Horario principal
    {
      name: 'operatingHours',
      title: 'Horario Principal',
      type: 'string',
      description: 'Ej: "11:00 / 00:00"',
      validation: (Rule: any) => Rule.required()
    },
    
    // Nota sobre reservas
    {
      name: 'reservationNote',
      title: 'Nota sobre Reservas',
      type: 'text',
      rows: 2,
      description: 'Información adicional sobre reservas y horarios'
    },
    
    // Estado activo
    {
      name: 'isActive',
      title: 'Activo',
      type: 'boolean',
      description: 'Solo el horario activo se mostrará en la web',
      initialValue: true
    },
    
    // Última actualización
    {
      name: 'lastUpdated',
      title: 'Última Actualización',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      operatingHours: 'operatingHours',
      isActive: 'isActive'
    },
    prepare(selection: { title: string, locale: string, operatingHours: any, isActive: boolean }) {
      const { title, locale, operatingHours, isActive } = selection
      const localeFlags: Record<string, string> = {
        es: '🇪🇸',
        ca: '🏴',
        en: '🇺🇸', 
        de: '🇩🇪',
        nl: '🇳🇱'
      }
      const localeFlag = localeFlags[locale] || '🌐'
      
      const status = isActive ? '✅' : '❌'
      
      return {
        title: `${localeFlag} ${title || 'Horarios'}`,
        subtitle: `${operatingHours || 'Sin horario'} ${status}`
      }
    }
  }
}