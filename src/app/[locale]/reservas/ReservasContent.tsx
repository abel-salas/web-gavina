import Image from 'next/image';
import Link from 'next/link';
import { getContactInfo } from "@/app/lib/contact-utils";
import WhatsAppReservation from "@/app/components/WhatsAppReservation";
import ReservationForm from "@/app/components/ReservationForm";
import HoursSection from "@/app/components/HoursSection";
import { getLocalizedData } from '@/app/lib/localization';

// Interfaz para datos desde Sanity
interface ReservasContent {
  _id?: string;
  locale?: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  reservationMethods: {
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
  advantages: {
    title: string;
    items: string[];
  };
  schedule: {
    title: string;
    description: string;
    horariosSection: {
      title: string;
      verano: {
        label: string;
        horario: string;
      };
      invierno: {
        label: string;
        horario: string;
      };
      reservaNote: string;
    };
    musicSection: {
      title: string;
      verano: {
        title: string;
        description: string;
        subtitle: string;
      };
      finesdeSemana: {
        title: string;
        description: string;
        subtitle: string;
      };
      restaurantNote: string;
    };
    especialTitle: string;
    especial?: string;
  };
  finalCta: {
    title: string;
    description: string;
    buttons: {
      callButton: string;
      menuButton: string;
    };
  };
  seo?: {
    title: string;
    description: string;
    keywords?: string;
  };
}

interface ReservasContentProps {
  locale: string;
  content: ReservasContent | null;
}

export default function ReservasContent({ locale, content }: ReservasContentProps) {
  const { dict } = getLocalizedData(locale);
  const contactInfo = getContactInfo();

  // Si no hay contenido desde Sanity, mostrar fallback
  if (!content) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Reservas</h1>
          <p className="text-gray-600">Contenido no disponible en este momento.</p>
        </div>
      </main>
    );
  }

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
              {content.reservationMethods.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {content.reservationMethods.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Reserva por Teléfono */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-3xl">call</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {content.reservationMethods.telefono.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.reservationMethods.telefono.description}
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
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {content.reservationMethods.whatsapp.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {content.reservationMethods.whatsapp.description}
              </p>
              <WhatsAppReservation dict={dict} />
            </div>

            {/* Formulario Online */}
            <ReservationForm 
              title={content.reservationMethods.formulario.title}
              description={content.reservationMethods.formulario.description}
            />
          </div>
        </div>
      </section>

      {/* Ventajas de Reservar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {content.advantages.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {content.advantages.items.map((ventaja: string, index: number) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <span className="material-icons-outlined text-blue-600 text-2xl">check_circle</span>
                </div>
                <span className="text-lg text-gray-700">{ventaja}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios y Eventos Musicales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {content.schedule.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.schedule.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horarios */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-outlined text-3xl">schedule</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.schedule.horariosSection.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-lg text-gray-700 mb-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg mb-2">
                      <span className="font-semibold">
                        {content.schedule.horariosSection.verano.label}
                      </span>
                      <span>
                        {content.schedule.horariosSection.verano.horario}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-semibold">
                        {content.schedule.horariosSection.invierno.label}
                      </span>
                      <span>
                        {content.schedule.horariosSection.invierno.horario}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-green-50 rounded-lg text-center">
                <span className="text-green-800 font-medium flex items-center justify-center">
                  <span className="material-icons-outlined mr-2">check_circle</span>
                  {content.schedule.horariosSection.reservaNote}
                </span>
              </div>
              
              {/* Horarios desde Sanity */}
              <div className="mt-6">
                <HoursSection 
                  locale={locale}
                  showTitle={false}
                  className="text-center"
                />
              </div>
            </div>

            {/* Eventos Musicales */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-outlined text-3xl">music_note</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {content.schedule.musicSection.title}
                </h3>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center">
                    <span className="material-icons-outlined mr-2 text-orange-500">wb_sunny</span>
                    {content.schedule.musicSection.verano.title}
                  </h4>
                  <p className="text-gray-700">{content.schedule.musicSection.verano.description}</p>
                  <p className="text-sm text-blue-600 mt-1">{content.schedule.musicSection.verano.subtitle}</p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center justify-center">
                    <span className="material-icons-outlined mr-2 text-blue-500">weekend</span>
                    {content.schedule.musicSection.finesdeSemana.title}
                  </h4>
                  <p className="text-gray-700">{content.schedule.musicSection.finesdeSemana.description}</p>
                  <p className="text-sm text-purple-600 mt-1">{content.schedule.musicSection.finesdeSemana.subtitle}</p>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-yellow-50 rounded-lg text-center">
                <span className="text-yellow-800 font-medium flex items-center justify-center">
                  <span className="material-icons-outlined mr-2">music_note</span>
                  {content.schedule.musicSection.restaurantNote}
                </span>
              </div>
            </div>
          </div>
          
          {/* Nota especial desde Sanity */}
          {content.schedule.especial && (
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="material-icons-outlined text-blue-600 mr-2">info</span>
                  <span className="font-bold text-blue-900">{content.schedule.especialTitle}</span>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  {content.schedule.especial}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {content.finalCta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {content.finalCta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors text-lg flex items-center justify-center gap-2"
            >
              <span className="material-icons-outlined">call</span>
              {content.finalCta.buttons.callButton}: {contactInfo.phone}
            </a>
            <Link
              href={`/${locale}/carta`}
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {content.finalCta.buttons.menuButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}