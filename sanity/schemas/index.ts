// Schemas de Sanity para Restaurant Banys La Gavina
import { menuItem } from './menuItem'
import { siteConfig } from './siteConfig'
import { homeContent } from './homeContent'
import { menuContent } from './menuContent'
import { contactContent } from './contactContent'

export const schemaTypes = [
  // Schemas organizados por página
  homeContent,
  menuContent,
  contactContent,

  // Contenido del menú (actualizado con imágenes)
  menuItem,

  // Configuración del sitio (se mantiene centralizada)
  siteConfig,
]