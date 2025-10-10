import Image from 'next/image';
import Link from 'next/link';
import { getContactInfo } from "@/app/lib/contact-utils";
import WhatsAppReservation from "@/app/components/WhatsAppReservation";
import { getLocalizedData } from '@/app/lib/localization';

interface ReservasContent {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  reservas: {
    title: string;
    subtitle: string;
    telefono: {
      title: string;
      description: string;
    };
    whatsapp: {
      title: string;
      description: string;
    };
    formulario: {
      title: string;
      description: string;
    };
  };
  ventajas: {
    title: string;
    items: string[];
  };
  horarios: {
    title: string;
    description: string;
    especial: string;
  };
  cta: {
    title: string;
    description: string;
  };
}

interface ReservasContentProps {
  locale: string;
  content: ReservasContent;
}

export default function ReservasContent({ locale, content }: ReservasContentProps) {
  const { dict } = getLocalizedData(locale);
  const contactInfo = getContactInfo();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/home/mesa.jpg"
            alt="Reservar mesa Restaurant Banys La Gavina"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-parisienne mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            {content.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Formas de Reservar */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.reservas.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {content.reservas.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Reserva por Teléfono */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-3xl">call</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.reservas.telefono.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.reservas.telefono.description}
              </p>
              <div className="space-y-3">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="block text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="block text-xl text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {contactInfo.mobile}
                </a>
              </div>
            </div>

            {/* Reserva por WhatsApp */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-3xl">chat</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.reservas.whatsapp.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.reservas.whatsapp.description}
              </p>
              <WhatsAppReservation dict={dict} />
            </div>

            {/* Formulario Online */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-3xl">edit_calendar</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.reservas.formulario.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.reservas.formulario.description}
              </p>
              
              <form className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Personas
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white font-bold py-3 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Enviar Reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas de Reservar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.ventajas.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.ventajas.items.map((ventaja: string, index: number) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                  <span className="material-icons-outlined">check</span>
                </div>
                <span className="text-lg text-gray-700">{ventaja}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios y Disponibilidad */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {content.horarios.title}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                {content.horarios.description}
              </p>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-yellow-800 font-medium">
                  💡 {content.horarios.especial}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🕘</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-lg text-gray-700">
                  <div className="flex justify-between">
                    <span>Lunes - Domingo:</span>
                    <span className="font-semibold">9:00 - 23:30</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <span className="text-green-800 font-medium">
                      ✅ Abierto todos los días del año
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {content.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg"
            >
              📞 Llamar Ahora: {contactInfo.phone}
            </a>
            <Link
              href="/es/carta"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Ver Nuestra Carta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}