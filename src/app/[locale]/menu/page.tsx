import type { Metadata } from 'next';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { client } from '../../../../sanity/client';
import { menuContentQuery, menuItemsQuery } from '../../lib/sanity/contentQueries';
import { processMenuContentResponse } from '../../lib/sanity/contentTypes';
import MenuContent from './MenuContent';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  return generatePageMetadata({
    locale: validLocale,
    page: 'menu',
    path: '/menu'
  });
}

export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  // Obtener contenido del menú desde Sanity
  let menuContentData = [];
  let menuItems = [];

  try {
    [menuContentData, menuItems] = await Promise.all([
      client.fetch(menuContentQuery),
      client.fetch(menuItemsQuery)
    ]);
  } catch (error) {
    console.warn('⚠️ No se pudo obtener contenido del menú desde Sanity:', error);
  }

  // Procesar los datos obtenidos
  const menuContent = processMenuContentResponse(menuContentData);

  // Si no hay datos de Sanity, usar JSON como fallback  
  const menuData = menuItems.length > 0 ? menuItems : dict.menu?.categories || {};

  return <MenuContent dict={dict} menuData={menuData} menuContent={menuContent} />;
}