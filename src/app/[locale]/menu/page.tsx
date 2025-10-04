import type { Metadata } from 'next';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';

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

  const categories = [
    { key: 'starters', data: dict.menu.categories.starters },
    { key: 'salads', data: dict.menu.categories.salads },
    { key: 'rice', data: dict.menu.categories.rice },
    { key: 'meat', data: dict.menu.categories.meat },
    { key: 'fish', data: dict.menu.categories.fish },
    { key: 'drinks', data: dict.menu.categories.drinks }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.menu.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{dict.menu.subtitle}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.menu.description}
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
              {data.items.map((item, index) => (
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