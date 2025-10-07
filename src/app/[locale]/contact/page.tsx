import type { Metadata } from 'next';
import { getLocalizedData } from "@/app/lib/localization";
import { generatePageMetadata, getValidLocale } from '@/seo';
import { getContactInfo } from "@/app/lib/contact-utils";
import WhatsAppReservation from "@/app/components/WhatsAppReservation";

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
  const contactInfo = getContactInfo(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-parisienne mb-4">{dict.contact?.title || 'Contacto'}</h1>
        <p className="text-xl text-gray-600 mb-8">{dict.contact?.subtitle || 'Estamos aquí para atenderte'}</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {dict.contact?.description || 'Para reservar mesa, llámanos o ven directamente. Te esperamos en primera línea de mar.'}
        </p>
      </section>

      {/* WhatsApp Reservation Section */}
      <div className="mt-6">
        <WhatsAppReservation dict={dict} />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">{dict.contact?.info_section || 'Información de Contacto'}</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📍</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.address || 'Dirección'}</h3>
                <p className="text-gray-600 whitespace-pre-line">{contactInfo.address}</p>
                <p className="text-sm text-gray-500 mt-1">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">📞</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.phone || 'Teléfono'}</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">📱</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.mobile || 'Móvil'}</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-blue-600 hover:text-blue-800">
                  {contactInfo.mobile}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">🕐</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.schedule || 'Horario'}</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">🅿️</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.parking || 'Aparcamiento'}</h3>
                <p className="text-gray-600">{dict.contact?.fields?.parking_description || contactInfo.parking}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-2xl mr-3">�</span>
              <div>
                <h3 className="font-semibold">{dict.contact?.fields?.follow_us || 'Síguenos'}</h3>
                <div className="space-y-1">
                  <div>
                    <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      {dict.contact_info?.facebook || 'Facebook'}
                    </a>
                  </div>
                  <div>
                    <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                      {dict.contact_info?.instagram || 'Instagram'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">{dict.contact?.form_section || 'Envíanos un Mensaje'}</h2>

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