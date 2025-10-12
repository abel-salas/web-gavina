import { createClient } from '@sanity/client'

// Importar configuración SSL para desarrollo
import '../src/app/lib/ssl-config'

// Configuración del cliente Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production', // `false` para desarrollo
  apiVersion: '2024-01-01', // Fecha de la API
  perspective: 'published', // Solo contenido publicado
  requestTagPrefix: 'webapp',
})

// Cliente para operaciones que requieren token (writes)
export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Token para escritura
  perspective: 'published',
  requestTagPrefix: 'write-ops',
})