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

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.menu.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{dict.menu.subtitle}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.menu.description}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Entrantes</h2>
          <div className="space-y-3">
            <div className="border-b pb-3">
              <h3 className="font-medium">Pan con Tomate</h3>
              <p className="text-gray-600 text-sm">Pan tostado con tomate fresco, ajo y aceite de oliva virgen extra</p>
              <span className="text-blue-600 font-semibold">€4.50</span>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium">Jamón Ibérico</h3>
              <p className="text-gray-600 text-sm">Jamón ibérico de bellota cortado a mano</p>
              <span className="text-blue-600 font-semibold">€12.00</span>
            </div>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Platos Principales</h2>
          <div className="space-y-3">
            <div className="border-b pb-3">
              <h3 className="font-medium">Paella Mediterránea</h3>
              <p className="text-gray-600 text-sm">Arroz con mariscos frescos y pescado del día</p>
              <span className="text-blue-600 font-semibold">€18.00</span>
            </div>
            <div className="border-b pb-3">
              <h3 className="font-medium">Pescado a la Plancha</h3>
              <p className="text-gray-600 text-sm">Pescado fresco del día con verduras de temporada</p>
              <span className="text-blue-600 font-semibold">€16.50</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}