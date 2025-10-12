// Schemas de Sanity para Restaurant Banys La Gavina
import { menuItem } from './menuItem'
import { homeContent } from './homeContent'
// import { homeContentNew } from './homeContentNew' // No usado activamente
import { menuContent } from './menuContent'
import { contactContent } from './contactContent'
import { celebrationsContent } from './celebrationsContent'
import { celebrationsGlobalConfig } from './celebrationsGlobalConfig'
import { reservasContent } from './reservasContent'
import { hoursContent } from './hoursContent'
import { imageSlider } from './imageSlider'

export const schemaTypes = [
  // Schemas organizados por página
  homeContent,
  // homeContentNew,
  menuContent,
  contactContent,
  celebrationsContent,
  reservasContent,

  // Componentes globales
  celebrationsGlobalConfig,
  hoursContent,
  imageSlider,

  // Contenido del menú (actualizado con imágenes)
  menuItem,
]