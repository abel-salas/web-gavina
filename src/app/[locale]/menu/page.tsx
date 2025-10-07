import type { Metadata } from 'next';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { getAllMenuCategories } from '../../../../sanity/queries';
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

  // Obtener datos del menú desde Sanity
  const sanityMenuData = await getAllMenuCategories(locale).catch(() => null);

  // Si hay datos de Sanity, usarlos; sino, usar JSON como fallback
  const menuData = sanityMenuData || dict.menu?.categories || {};

  return <MenuContent dict={dict} menuData={menuData} />;
}