import Link from 'next/link';
import type { Route } from 'next';
// import { getContactInfo } from "@/app/lib/contact-utils"; // No usado actualmente
import HoursSection from "@/app/components/HoursSection";
import SocialMedia from '@/app/components/SocialMedia';
import ReservationForm from "@/app/components/ReservationForm";
import { getLocalizedData } from '@/app/lib/localization';

// Interfaz para datos desde Sanity
interface ContactContent {
  _id?: string;
  locale?: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  reservationCta: {
    title: string;
    description: string;
    buttonText: string;
  };
  celebrationsSection: {
    title: string;
    subtitle?: string;
    description: string;
    celebrationTypes: Array<{
      icon: string;
      iconColor: string;
      title: string;
      features: string[];
    }>;
    ctaText: string;
  };
  contactInfo: {
    title: string;
    subtitle?: string;
    description?: string;
    contactMethods: Array<{
      type: 'phone' | 'whatsapp' | 'email' | 'address';
      icon: string;
      label: string;
      value: string;
      link?: string;
    }>;
  };
  scheduleSection: {
    title: string;
    subtitle?: string;
    description?: string;
    scheduleNote?: string;
    schedules: Array<{
      period: string;
      days: string;
      hours: string;
      note?: string;
    }>;
  };
  locationSection: {
    title: string;
    subtitle?: string;
    address: string;
    mapDescription?: string;
    transportInfo?: Array<{
      type: 'car' | 'public' | 'walking';
      icon: string;
      title: string;
      description: string;
    }>;
  };
  contactForm: {
    title: string;
    description?: string;
    successMessage: string;
    errorMessage: string;
  };
  finalCta: {
    title: string;
    description: string;
    buttons: Array<{
      text: string;
      href: string;
      variant: 'primary' | 'secondary' | 'outline';
      icon?: string;
    }>;
  };
}

interface ContactContentProps {
  content: ContactContent;
  locale: string;
}

export default function ContactContent({ content, locale }: ContactContentProps) {
  const { href } = getLocalizedData(locale);
  // const contactInfo = getContactInfo(); // Comentado temporalmente, se usa contenido de Sanity

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full mb-6">
          <span className="text-blue-800 font-medium">{content.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl font-parisienne mb-4">
          {content.hero.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          {content.hero.subtitle}
        </p>
        
        {/* CTA para reservas */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl inline-block">
          <p className="text-blue-800 font-medium mb-4">
            {content.reservationCta.title}
          </p>
          <p className="text-gray-700 mb-4">
            {content.reservationCta.description}
          </p>
          <Link 
            href={href('/reservas') as Route}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            {content.reservationCta.buttonText}
          </Link>
        </div>
      </section>

      {/* Sección de Celebraciones */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.celebrationsSection.title}
          </h2>
          {content.celebrationsSection.subtitle && (
            <p className="text-xl text-gray-600 mb-6">
              {content.celebrationsSection.subtitle}
            </p>
          )}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {content.celebrationsSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.celebrationsSection.celebrationTypes.map((celebrationType, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-center mb-4">
                <div 
                  className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: celebrationType.iconColor }}
                >
                  <span className="material-icons-outlined text-2xl">{celebrationType.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {celebrationType.title}
                </h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                {celebrationType.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={href('/celebraciones') as Route}
            className="bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors inline-block"
          >
            {content.celebrationsSection.ctaText}
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Información de Contacto */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            {content.contactInfo.title}
          </h2>
          {content.contactInfo.subtitle && (
            <p className="text-gray-600 mb-4">{content.contactInfo.subtitle}</p>
          )}
          {content.contactInfo.description && (
            <p className="text-gray-700 mb-6">{content.contactInfo.description}</p>
          )}

          <div className="space-y-4">
            {content.contactInfo.contactMethods.map((method, index) => (
              <div key={index} className="flex items-center">
                <span className="material-icons-outlined text-blue-600 text-2xl mr-3">
                  {method.icon}
                </span>
                <div>
                  <h3 className="font-semibold">{method.label}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-blue-600 hover:text-blue-800"
                      {...(method.type === 'phone' || method.type === 'whatsapp' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{method.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Horarios integrados */}
            <div className="flex items-start">
              <span className="material-icons-outlined text-blue-600 text-2xl mr-3 mt-1">schedule</span>
              <div className="flex-1">
                <HoursSection
                  locale={locale}
                  showTitle={true}
                  className="text-gray-600"
                />
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <SocialMedia theme="light" iconSize="large" />
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <ReservationForm 
          title={content.contactForm.title}
          description={content.contactForm.description || ''}
        />
      </div>

      {/* CTA Final */}
      <section className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">
          {content.finalCta.title}
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          {content.finalCta.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {content.finalCta.buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href as Route}
              className={`
                font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2
                ${button.variant === 'primary' 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : button.variant === 'secondary'
                  ? 'bg-blue-500 text-white hover:bg-blue-400'
                  : 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
                }
              `}
            >
              {button.icon && (
                <span className="material-icons-outlined text-xl">{button.icon}</span>
              )}
              {button.text}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}