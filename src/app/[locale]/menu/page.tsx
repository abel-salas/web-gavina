import type { Metadata } from 'next';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { getAllMenuCategories } from '../../../../sanity/queries';
import { MenuCategory } from '@/app/lib/dictionary.models';

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
} export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  // Obtener datos del menú desde Sanity
  const sanityMenuData = await getAllMenuCategories(locale).catch(() => null);
  
  // Si hay datos de Sanity, usarlos; sino, usar JSON como fallback
  const menuData = sanityMenuData || dict.menu?.categories || {};

  const categories = [
    { key: 'starters', data: menuData.starters },
    { key: 'salads', data: menuData.salads },
    { key: 'rice', data: menuData.rice },
    { key: 'meat', data: menuData.meat },
    { key: 'fish', data: menuData.fish },
    { key: 'drinks', data: menuData.drinks }
  ].filter(category => category.data); // Filtrar categorías que existen

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-parisienne mb-4">{dict.menu?.title || "🍽️ Nuestra Carta"}</h1>
        <p className="text-xl text-gray-600 mb-8">{dict.menu?.subtitle || "Cocina mediterránea inspirada en los productos del mar 🦐"}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.menu?.description || "El chef ha creado este menú inspirándose en los productos del mar y en nuestra cocina mediterránea, sin descuidar las buenas carnes y los platos de temporada. Siempre trabajando con productos de primera calidad y cuidando mucho la presentación."}
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        {categories.map(({ key, data }) => (
          <article key={key} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-blue-800">{data.title}</h2>
              {data.subtitle && (
                <p className="text-sm text-gray-500 italic">{data.subtitle}</p>
              )}
            </div>
            <div className="space-y-4">
              {data.items.map((item: MenuCategory['items'][0], index: number) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900 flex-1">
                      {item.name}
                      {item.recommended && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Recomendado
                        </span>
                      )}
                    </h3>
                    <span className="text-blue-600 font-semibold ml-4">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}