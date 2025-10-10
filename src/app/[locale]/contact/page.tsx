import type { Metadata } from 'next';
import Link from 'next/link';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { getContactInfo } from "@/app/lib/contact-utils";
import HoursSection from "@/app/components/HoursSection";
import SocialMedia from '@/app/components/SocialMedia';

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
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  // Información de contacto centralizada
  const contactInfo = getContactInfo();

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-parisienne mb-4">Contacto e Información</h1>
        <p className="text-xl text-gray-600 mb-8">Consultas generales y celebraciones especiales</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Para consultas sobre celebraciones, eventos corporativos, información general o cualquier duda, estamos aquí para ayudarte. 
        </p>
        
        {/* CTA para reservas */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg inline-block">
          <p className="text-blue-800 font-medium mb-3">
            💡 ¿Quieres reservar mesa? Visita nuestra página dedicada:
          </p>
          <Link 
            href="/es/reservas" 
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            Reservar Mesa Ahora
          </Link>
        </div>
      </section>

      {/* Sección de Celebraciones y Eventos */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Celebraciones y Eventos Especiales
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Tu evento perfecto frente al mar Mediterráneo
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Organizamos celebraciones únicas en nuestra terraza con vista panorámica al mar. Más de 65 años de experiencia creando momentos inolvidables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tipos de celebraciones */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-center mb-4">
              <div className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-2xl">favorite</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Bodas y Ceremonias</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Ceremonias frente al mar</li>
              <li>• Banquetes hasta 100 personas</li>
              <li>• Menús personalizados</li>
              <li>• Decoración incluida</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-2xl">business</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Eventos Corporativos</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Cenas de empresa</li>
              <li>• Presentaciones de producto</li>
              <li>• Reuniones de trabajo</li>
              <li>• Team building gastronómico</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-center mb-4">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="material-icons-outlined text-2xl">family_restroom</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Celebraciones Familiares</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Comuniones y bautizos</li>
              <li>• Cumpleaños especiales</li>
              <li>• Aniversarios</li>
              <li>• Reuniones familiares</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/es/celebraciones"
            className="bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors inline-block mr-4"
          >
            Ver Más Sobre Celebraciones
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">{dict.contact?.info_section || 'Información de Contacto'}</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3">place</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.address || 'Dirección'}</h3>
                <p className="text-gray-600 whitespace-pre-line">{contactInfo.address}</p>
                <p className="text-sm text-gray-500 mt-1">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3">phone</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.phone || 'Teléfono'}</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3">smartphone</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.mobile || 'Móvil'}</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-blue-600 hover:text-blue-800">
                  {contactInfo.mobile}
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3 mt-1">schedule</span>
              <div className="flex-1">
                <HoursSection
                  locale={locale}
                  showTitle={true}
                  showIcon={false}
                  className="text-gray-600"
                />
              </div>
            </div>

            <div className="flex items-center">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3">local_parking</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.parking || 'Aparcamiento'}</h3>
                <p className="text-gray-600">{dict.contact?.fields?.parking_description || contactInfo.parking}</p>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <SocialMedia theme="light" iconSize="large" />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Consultas y Celebraciones
          </h2>
          <p className="text-gray-600 mb-6">
            Para consultas sobre celebraciones, eventos especiales o información general, envíanos un mensaje.
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {dict.contact?.fields?.name || 'Nombre'}
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
                {dict.contact?.fields?.email || 'Email'}
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
                {dict.contact?.fields?.message || 'Mensaje'}
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
              {dict.contact?.fields?.send_button || 'Enviar Mensaje'}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}