import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Configurar el secreto para la URL manual
const REVALIDATE_SECRET = process.env.SANITY_WEBHOOK_SECRET || 'your-secret';

// Función para revalidar todas las páginas principales
async function revalidateAllPages() {
  const paths = [
    // Páginas de inicio
    '/',
    '/es',
    '/en', 
    '/ca',
    '/nl',
    '/de',
    // Páginas de menú
    '/es/menu',
    '/en/menu',
    '/ca/menu', 
    '/nl/menu',
    '/de/menu',
    // Páginas de celebraciones
    '/es/celebrations',
    '/en/celebrations',
    '/ca/celebrations',
    '/nl/celebrations', 
    '/de/celebrations',
    // Páginas de contacto
    '/es/contact',
    '/en/contact',
    '/ca/contact',
    '/nl/contact',
    '/de/contact',
    // Páginas de galería
    '/es/gallery',
    '/en/gallery',
    '/ca/gallery',
    '/nl/gallery',
    '/de/gallery',
    // Páginas de historia
    '/es/history',
    '/en/history',
    '/ca/history',
    '/nl/history',
    '/de/history'
  ];

  for (const path of paths) {
    revalidatePath(path);
  }
}

// Endpoint GET para revalidación manual (URL secreta)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const pages = searchParams.get('pages'); // Parámetro para páginas específicas
    
    // Verificar secreto en la URL
    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });
    }

    console.log('🔄 Revalidación manual solicitada');
    
    let pathsToRevalidate: string[] = [];
    
    // Si no se especifican páginas, revalidar todas
    if (!pages) {
      console.log('📄 Revalidando todas las páginas...');
      await revalidateAllPages();
      pathsToRevalidate = ['todas las páginas'];
    } else {
      // Revalidar páginas específicas (siempre en todos los idiomas)
      const requestedPages = pages.split(',').map(p => p.trim());
      const allLangs = ['es', 'en', 'ca', 'nl', 'de'];
      
      console.log('📄 Revalidando páginas específicas:', requestedPages);
      
      for (const page of requestedPages) {
        if (page === 'home') {
          // Páginas de inicio
          pathsToRevalidate.push('/');
          for (const lang of allLangs) {
            pathsToRevalidate.push(`/${lang}`);
          }
        } else {
          // Otras páginas
          for (const lang of allLangs) {
            pathsToRevalidate.push(`/${lang}/${page}`);
          }
        }
      }
      
      // Ejecutar revalidación
      for (const path of pathsToRevalidate) {
        revalidatePath(path);
      }
    }
    
    return NextResponse.json({ 
      message: '✅ Páginas revalidadas correctamente',
      timestamp: new Date().toISOString(),
      paths: pathsToRevalidate,
      count: pathsToRevalidate.length
    });
  } catch (error) {
    console.error('❌ Error en revalidación manual:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}