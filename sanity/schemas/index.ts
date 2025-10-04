// Schemas de Sanity para Restaurant Banys La Gavina
import { menuItem } from './menuItem'
import { pageContent } from './pageContent'
import { historyContent } from './historyContent'
import { timelineEvent } from './timelineEvent'
import { siteConfig } from './siteConfig'

export const schemaTypes = [
  // Contenido del menú
  menuItem,
  
  // Contenido de páginas
  pageContent,
  
  // Contenido de historia
  historyContent,
  timelineEvent,
  
  // Configuración del sitio
  siteConfig,
]