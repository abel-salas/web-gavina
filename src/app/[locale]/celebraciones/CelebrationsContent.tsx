import { ContactSection } from '@/app/components/sections/ContactSection';
import CelebrationsSlider from '@/app/components/CelebrationsSlider';

// Interfaces para el contenido de celebraciones
interface ImageSliderImage {
  image: {
    asset: {
      _id: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
        };
        lqip?: string;
      };
    };
    alt?: string;
  };
  caption?: {
    es?: string;
    en?: string;
    ca?: string;
    de?: string;
    nl?: string;
  };
}

interface ImageSlider {
  _id: string;
  title?: {
    es?: string;
    en?: string;
    ca?: string;
    de?: string;
    nl?: string;
  };
  isActive: boolean;
  autoplaySpeed?: number;
  showOnMobile?: boolean;
  images: ImageSliderImage[];
}

interface CelebrationType {
  icon: string;
  iconColor?: string;
  title: string;
  description?: string;
  capacity?: string;
  features?: string[];
}

interface Space {
  name: string;
  capacity?: string;
  description?: string;
  features?: string[];
  icon?: string;
}

interface Service {
  icon?: string;
  title: string;
  description?: string;
  included: boolean;
}

interface Feature {
  icon?: string;
  title: string;
  description?: string;
}

interface HighlightedCelebration {
  icon?: string;
  title: string;
  description?: string;
}

interface Button {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

interface CelebrationsContent {
  _id: string;
  locale: string;
  hero: {
    badge?: string;
    title: string;
    subtitle?: string;
    description?: string;
    heroSlider?: ImageSlider;
  };
  celebrationTypesSection: {
    title: string;
    subtitle?: string;
    description?: string;
    celebrationTypes: CelebrationType[];
  };
  capacitySection: {
    title: string;
    subtitle?: string;
    description?: string;
    spaces: Space[];
  };
  servicesSection: {
    title: string;
    subtitle?: string;
    description?: string;
    services: Service[];
  };
  whyChooseSection: {
    title: string;
    subtitle?: string;
    description?: string;
    features: Feature[];
    highlightedCelebrations?: {
      title: string;
      celebrations: HighlightedCelebration[];
    };
  };
  contactCta?: {
    title?: string;
    description?: string;
    buttons?: Button[];
  };
}

interface CelebrationsContentProps {
  content: CelebrationsContent;
  locale: string;
}

export default function CelebrationsContent({ content, locale }: CelebrationsContentProps) {
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Contenido de celebraciones no disponible</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section con Slider */}
      <section className="relative w-full aspect-video overflow-hidden">
        {content.hero.heroSlider && content.hero.heroSlider.isActive && content.hero.heroSlider.images.length > 0 ? (
          <CelebrationsSlider
            images={content.hero.heroSlider.images.map(img => ({
              caption: img.caption || undefined,
              alt: img.image.alt || '',
              image: img.image
            }))}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 flex items-center justify-center">
            <div className="text-center text-white">
              <span className="material-icons-outlined text-8xl mb-4 opacity-50">celebration</span>
              <p className="text-xl opacity-75">Celebraciones frente al mar</p>
            </div>
          </div>
        )}

        {/* Overlay con contenido hero */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {content.hero.badge && (
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                {content.hero.badge}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-parisienne mb-4">
              {content.hero.title}
            </h1>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <span className="material-icons-outlined text-3xl opacity-75">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Tipos de Celebraciones */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-16">
              <h2 className="font-parisine text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {content.celebrationTypesSection.title}
              </h2>
            </div>
            <div className="text-center mb-16">
              {content.hero.subtitle && (
                <p className="text-xl md:text-2xl font-light mb-4 max-w-4xl mx-auto">
                  {content.hero.subtitle}
                </p>
              )}
              {content.hero.description && (
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                  {content.hero.description}
                </p>
              )}
            </div>
          </div>
          <div className="text-center mb-16">

            {content.celebrationTypesSection.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                {content.celebrationTypesSection.subtitle}
              </p>
            )}
            {content.celebrationTypesSection.description && (
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {content.celebrationTypesSection.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.celebrationTypesSection.celebrationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: type.iconColor ? `${type.iconColor}15` : '#f3f4f6' }}
                  >
                    <span
                      className="material-icons-outlined text-2xl"
                      style={{ color: type.iconColor || '#6b7280' }}
                    >
                      {type.icon || 'celebration'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  {type.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {type.description}
                    </p>
                  )}
                  {type.capacity && (
                    <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
                      {type.capacity}
                    </p>
                  )}
                  {type.features && type.features.length > 0 && (
                    <ul className="text-left text-sm text-gray-600 space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="material-icons-outlined text-green-600 text-sm mr-2">check</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidad y Espacios */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-parisine text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {content.capacitySection.title}
            </h2>
            {content.capacitySection.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                {content.capacitySection.subtitle}
              </p>
            )}
            {content.capacitySection.description && (
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {content.capacitySection.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.capacitySection.spaces.map((space, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start mb-4">
                  {space.icon && (
                    <span className="material-icons-outlined text-2xl text-blue-600 mr-4 mt-1">
                      {space.icon}
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {space.name}
                    </h3>
                    {space.capacity && (
                      <div className="flex items-center mb-4">
                        <span className="material-icons-outlined text-blue-600 mr-2">groups</span>
                        <span className="font-semibold text-blue-600">{space.capacity}</span>
                      </div>
                    )}
                  </div>
                </div>
                {space.description && (
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {space.description}
                  </p>
                )}
                {space.features && space.features.length > 0 && (
                  <ul className="text-sm text-gray-600 space-y-2">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="material-icons-outlined text-green-600 text-sm mr-2">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {content.whyChooseSection.title}
            </h2>
            {content.whyChooseSection.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                {content.whyChooseSection.subtitle}
              </p>
            )}
            {content.whyChooseSection.description && (
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {content.whyChooseSection.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {content.whyChooseSection.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon && (
                    <span className="material-icons-outlined text-3xl text-blue-600 mr-4">
                      {feature.icon}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                {feature.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Tipos de Celebraciones Destacadas */}
          {content.whyChooseSection.highlightedCelebrations && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {content.whyChooseSection.highlightedCelebrations.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.whyChooseSection.highlightedCelebrations.celebrations.map((celebration, index) => (
                  <div key={index} className="text-center">
                    {celebration.icon && (
                      <span className="material-icons-outlined text-4xl text-blue-600 mb-2 block">
                        {celebration.icon}
                      </span>
                    )}
                    <h4 className="font-semibold text-gray-800">{celebration.title}</h4>
                    {celebration.description && (
                      <p className="text-sm text-gray-600 mt-1">{celebration.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA de Contacto */}
      {content.contactCta && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {content.contactCta.title && (
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {content.contactCta.title}
              </h2>
            )}
            {content.contactCta.description && (
              <p className="text-xl mb-8 opacity-90">
                {content.contactCta.description}
              </p>
            )}
            {content.contactCta.buttons && (
              <div className="flex flex-wrap gap-4 justify-center">
                {content.contactCta.buttons.map((button, index) => {
                  // Añadir locale a los enlaces si no lo tienen ya
                  const href = button.href.startsWith('/') && !button.href.startsWith(`/${locale}`)
                    ? `/${locale}${button.href}`
                    : button.href;

                  return (
                    <a
                      key={index}
                      href={href}
                      className={`inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all ${button.variant === 'outline'
                        ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600'
                        : button.variant === 'secondary'
                          ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                          : 'bg-white text-blue-600 hover:bg-gray-100'
                        }`}
                    >
                      {button.icon && (
                        <span className="material-icons-outlined mr-2">
                          {button.icon}
                        </span>
                      )}
                      {button.text}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Sección de Contacto */}
      <ContactSection
        locale={locale}
        contactHref={`/${locale}/reservas`}
      />
    </div>
  );
}