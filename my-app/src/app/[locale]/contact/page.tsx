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
    page: 'contact',
    path: '/contact'
  });
} export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.contact.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{dict.contact.subtitle}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.contact.description}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Información de Contacto</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📍</span>
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">Calle Example, 123<br />08000 Barcelona, España</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">📞</span>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <a href="tel:+34123456789" className="text-blue-600 hover:text-blue-800">
                  +34 123 456 789
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">✉️</span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:info@restaurante-gavina.com" className="text-blue-600 hover:text-blue-800">
                  info@restaurante-gavina.com
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">🕐</span>
              <div>
                <h3 className="font-semibold">Horario</h3>
                <p className="text-gray-600">
                  Lunes - Domingo<br />
                  12:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Envíanos un Mensaje</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}