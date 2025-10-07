import { client } from '../../../sanity/client';
import { contactContentQuery } from '../lib/sanity/contentQueries';
import { getLocalizedText } from '../lib/sanity/contentTypes';

interface HoursSectionProps {
  locale: string;
  className?: string;
  showTitle?: boolean;
  showIcon?: boolean;
  iconOnly?: boolean; // Solo para usar en footer con icono
  isFooter?: boolean; // Para ajustar estilos en footer
}

interface ContactContent {
  _id: string;
  sectionId: string;
  hoursTitle?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
  };
  hoursDescription?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
  };
  specialHours?: {
    es?: string;
    en?: string;
    ca?: string;
    nl?: string;
  };
}

export default async function HoursSection({ 
  locale, 
  className = '', 
  showTitle = false, 
  showIcon = false,
  iconOnly = false,
  isFooter = false
}: HoursSectionProps) {
  // Obtener horarios desde Sanity en el servidor
  let hoursData: ContactContent | null = null;
  
  try {
    const contactContentData: ContactContent[] = await client.fetch(contactContentQuery);
    hoursData = contactContentData.find(section => section.sectionId === 'hours') || null;
  } catch (error) {
    console.warn('⚠️ No se pudo obtener horarios desde Sanity:', error);
  }

  if (!hoursData) {
    // Fallback si no hay datos en Sanity
    const fallbackHours = {
      es: "Abierto todos los días",
      en: "Open every day",
      ca: "Obert tots els dies", 
      nl: "Elke dag geopend"
    };

    const fallbackTitle = {
      es: "Horario",
      en: "Schedule", 
      ca: "Horari",
      nl: "Openingstijden"
    };

    if (iconOnly) {
      return (
        <div className={className}>
          {showIcon && <span className="mr-2">🕐</span>}
          <span>{fallbackHours[locale as keyof typeof fallbackHours] || fallbackHours.es}</span>
        </div>
      );
    }

    const titleClass = isFooter ? "font-semibold mb-1 text-white text-sm" : "font-semibold mb-2 text-gray-900";
    const descriptionClass = isFooter ? "text-gray-300 text-sm" : "text-lg font-medium text-gray-800";

    return (
      <div className={className}>
        {showTitle && (
          <h3 className={titleClass}>
            {fallbackTitle[locale as keyof typeof fallbackTitle] || fallbackTitle.es}
          </h3>
        )}
        <div className={isFooter ? "mb-1" : "mb-3"}>
          {showIcon && <span className="mr-2 text-xl">🕐</span>}
          <span className={descriptionClass}>
            {fallbackHours[locale as keyof typeof fallbackHours] || fallbackHours.es}
          </span>
        </div>
      </div>
    );
  }

  const title = getLocalizedText(hoursData.hoursTitle, locale, '');
  const description = getLocalizedText(hoursData.hoursDescription, locale, '');
  const specialHours = getLocalizedText(hoursData.specialHours, locale, '');

  // Modo solo icono (para footer)
  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`}>
        {showIcon && <span className="mr-2">🕐</span>}
        <span>{description}</span>
      </div>
    );
  }

  // Modo completo (para página de contacto o footer)
  const titleClass = isFooter ? "font-semibold mb-1 text-white text-sm" : "font-semibold mb-2 text-gray-900";
  const descriptionClass = isFooter ? "text-gray-300 text-sm" : "text-lg font-medium text-gray-800";
  const specialHoursClass = isFooter ? "text-xs text-gray-400 mt-1" : "text-sm text-gray-600 mt-2";

  return (
    <div className={className}>
      {showTitle && title && (
        <h3 className={titleClass}>{title}</h3>
      )}
      
      {description && (
        <div className={isFooter ? "mb-1" : "mb-3"}>
          {showIcon && <span className="mr-2 text-xl">🕐</span>}
          <span className={descriptionClass}>{description}</span>
        </div>
      )}
      
      {specialHours && (
        <div className={specialHoursClass}>
          <p className="whitespace-pre-line">{specialHours}</p>
        </div>
      )}
    </div>
  );
}