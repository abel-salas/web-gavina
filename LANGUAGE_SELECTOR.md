# Language Selector Popup

## 🌐 Descripción
Sistema de popup para selección de idioma que se activa mediante parámetro URL y está optimizado para SEO.

## 🚀 Uso

### Activar el popup:
Agrega el parámetro `?selectLang=true` a cualquier URL:

```
https://www.banyslagavina.cat/es/menu?selectLang=true
https://www.banyslagavina.cat/en/contact?selectLang=true
https://www.banyslagavina.cat/de/celebrations?selectLang=true
```

### Comportamiento:
1. **Popup se muestra** automáticamente al detectar el parámetro
2. **URL se limpia** inmediatamente (se quita `?selectLang=true` del historial)
3. **Usuario selecciona idioma** y es redirigido a la URL correspondiente
4. **Animaciones suaves** de entrada y salida

## 🔍 SEO Optimization

### URLs que NO se indexan:
- `https://www.banyslagavina.cat/es/menu?selectLang=true` ❌

### URLs que SÍ se indexan:
- `https://www.banyslagavina.cat/es/menu` ✅
- `https://www.banyslagavina.cat/en/menu` ✅
- `https://www.banyslagavina.cat/de/menu` ✅

### Funcionalidades SEO:
- **Meta robots**: `noindex, follow` para URLs con parámetros
- **Canonical URL**: Siempre apunta a la URL limpia sin parámetros
- **Historial limpio**: `window.history.replaceState()` elimina parámetros
- **Sitemap**: Solo incluye URLs canónicas

## 🛠️ Implementación

### Componentes utilizados:
- `LanguageSwitcher.tsx` - Componente reutilizado con modo modal
- `LanguageModal.tsx` - Modal wrapper que usa LanguageSwitcher
- `LanguageSelectorWrapper.tsx` - Wrapper con Suspense
- `useLanguageSelectorPopup.ts` - Hook personalizado
- `NoIndexWithParams.tsx` - Prevención de indexación

### Integración:
- Reutiliza el `LanguageSwitcher` existente del footer
- Modo `isModal=true` activa el diseño de popup con banderas
- Automática en `layout.tsx` de cada locale
- No requiere configuración adicional
- Compatible con todos los idiomas soportados

## 🎨 Características del UI

### Diseño:
- **Modal centrado** con overlay semitransparente
- **Banderas de países** para cada idioma
- **Estado activo** destacado del idioma actual
- **Animaciones CSS** suaves y profesionales
- **Responsive** - se adapta a mobile y desktop

### Interacción:
- **Click en idioma** - cambia inmediatamente
- **Click fuera del modal** - cierra el popup
- **Botón X** - cierra el popup
- **Transiciones** - 300ms de duración

## 🔧 Casos de uso

1. **Enlaces de marketing**: Campañas específicas por idioma
2. **Redirecciones automáticas**: Desde sistemas externos
3. **Testing A/B**: Facilitar selección de idioma en pruebas
4. **Soporte técnico**: Enlaces directos para usuarios específicos

## ⚡ Rendimiento

- **Lazy loading** con Suspense
- **Client-side only** - no afecta SSR
- **Ligero** - <5KB gzipped
- **Zero dependencies** adicionales