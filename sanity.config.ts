import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Esquemas que crearemos después
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'restaurant-gavina',
  title: 'Restaurant Banys La Gavina',

  // Credenciales del proyecto
  projectId: 'tkwezd48',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  // Configuración del Studio
  studio: {
    components: {
      // Personalización opcional del Studio
    }
  }
})