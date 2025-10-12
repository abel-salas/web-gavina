import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Esquemas
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

  // Deshabilitar auto-updates para evitar errores de red
  studio: {
    components: {
      // Personalización opcional del Studio
    }
  }
})