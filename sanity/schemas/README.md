# Schemas de Sanity - Restaurant Banys La Gavina

## Nueva Estructura Organizativa

Los schemas han sido reestructurados para organizar el contenido por páginas principales, facilitando la gestión de contenido para los editores.

## Schemas Principales por Página

### 1. HOME Content (`homeContent.ts`)
**Propósito**: Gestiona todo el contenido de la página principal

**Secciones disponibles**:
- **Encabezado Principal**: Título, subtítulo, descripción e imagen de fondo
- **Sobre Nosotros**: Información del restaurante con imagen
- **Especialidades**: Items de especialidades con imágenes individuales
- **Ubicación**: Información de ubicación con imagen

**Campos multiidioma**: Todos los textos soportan ES/EN/CA/NL

**Características especiales**:
- Campo `sectionId` para organizar contenido por secciones
- Campos condicionales que se muestran según la sección seleccionada
- Array de especialidades con imágenes optimizadas (hotspot)
- Campo `order` para controlar el orden de aparición

### 2. MENU Content (`menuContent.ts`) 
**Propósito**: Gestiona el contenido de la página de menú (no los platos individuales)

**Secciones disponibles**:
- **Encabezado del Menú**: Encabezado con imagen de fondo (mesa_carta.jpg)
- **Introducción**: Texto introductorio al menú
- **Categorías**: Títulos y descripciones para cada categoría de platos

**Categorías soportadas**:
- Entrantes, Ensaladas, Arroces, Carnes, Pescados, Bebidas

### 3. Menu Items (`menuItem.ts`) - ¡ACTUALIZADO!
**Propósito**: Platos individuales del menú

**Nuevas características añadidas**:
- **Campo `image`**: Imagen individual para cada plato con hotspot
- **Campo `allergens`**: Lista de alérgenos con opciones predefinidas
- **Mejores previews**: Muestra categoría, precio y si es recomendado

**Alérgenos soportados**:
- Gluten, Mariscos, Pescado, Lácteos, Huevos, Frutos secos, Soja, Apio, Mostaza, Sésamo, Sulfitos

### 4. CONTACT Content (`contactContent.ts`)
**Propósito**: Gestiona el contenido editable de la página de contacto

**Secciones disponibles**:
- **Encabezado**: Título y descripción principal
- **Información de Contacto**: Textos descriptivos
- **Horarios**: Información de horarios regulares y especiales
- **Ubicación**: Descripción e indicaciones

**Nota importante**: Los datos centralizados (teléfono, email, dirección exacta) permanecen en `siteConfig` para consistencia.

## Schemas Existentes Mantenidos

### 5. Site Config (`siteConfig.ts`)
**Propósito**: Configuración centralizada del sitio
- Datos de contacto principales
- Información de redes sociales
- Configuraciones generales
- **SE MANTIENE INTACTO** para preservar consistencia

### 6. History Content (`historyContent.ts`)
**Propósito**: Contenido de la página de historia
- Se mantiene sin cambios

### 7. Timeline Event (`timelineEvent.ts`)
**Propósito**: Eventos para la línea de tiempo de historia
- Se mantiene sin cambios

### ~~8. Page Content~~ ❌ **ELIMINADO**
**Razón**: Schema genérico innecesario, reemplazado por schemas específicos por página

## Ventajas de la Nueva Estructura

### Para Editores de Contenido:
1. **Organización Clara**: Contenido separado por páginas principales
2. **Campos Contextuales**: Solo se muestran los campos relevantes para cada sección
3. **Previews Mejorados**: Mejor identificación visual en el CMS
4. **Gestión de Imágenes**: Imágenes específicas para cada contexto

### Para Desarrolladores:
1. **Tipado Mejorado**: Interfaces TypeScript más específicas
2. **Consultas Optimizadas**: Fetch solo el contenido necesario por página
3. **Mantenimiento**: Separación clara de responsabilidades
4. **Escalabilidad**: Fácil añadir nuevas secciones o campos

## Migración y Compatibilidad

- **Schemas existentes**: Se mantienen para evitar breaking changes
- **Datos existentes**: No se pierden, pueden coexistir
- **Transición gradual**: Los componentes pueden usar ambos sistemas durante la migración

## Orden de Prioridad para Contenido

1. **HOME** - Más crítico, contiene la mayoría del contenido visible
2. **MENU** - Importante para la experiencia del usuario
3. **CONTACT** - Importante pero más estático

## Próximos Pasos Recomendados

1. **Crear contenido inicial** en Sanity Studio usando los nuevos schemas
2. **Actualizar componentes frontend** para usar los nuevos schemas
3. **Implementar sistema de fallback** para transición suave
4. **Migrar gradualmente** desde schemas antiguos a nuevos