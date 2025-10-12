import { client } from '../../../sanity/client';
import { hoursContentQuery } from '../../../sanity/queries';

interface HoursSectionProps {
  locale: string;
  className?: string;
  showTitle?: boolean;
  iconOnly?: boolean; // Solo para usar en footer con icono
  isFooter?: boolean; // Para ajustar estilos en footer
}

interface HoursContent {
  _id: string;
  locale: string;
  title?: string;
  subtitle?: string;
  operatingDays?: string;
  operatingHours?: string;
  specialHours?: Array<{
    title?: string;
    description?: string;
    dates?: string;
    lunch?: string;
    dinner?: string;
    isActive?: boolean;
  }>;
  reservationNote?: string;
  isActive?: boolean;
}

export default async function HoursSection({
  locale,
  className = '',
  showTitle = false,
  iconOnly = false,
  isFooter = false
}: HoursSectionProps) {
  // Obtener horarios desde Sanity en el servidor
  let hoursData: HoursContent | null = null;

  try {
    hoursData = await client.fetch(hoursContentQuery, { locale });
  } catch (error) {
    console.warn('⚠️ No se pudo obtener horarios desde Sanity:', error);
  }

  if (!hoursData) {
    // Fallback si no hay datos en Sanity
    const fallbackTitle = {
      es: "Nuestro Horario",
      en: "Our Schedule",
      ca: "El Nostre Horari",
      de: "Unsere Öffnungszeiten",
      nl: "Onze Openingstijden"
    };

    const fallbackDays = {
      es: "Abrimos de Viernes a Lunes",
      en: "Open from Friday to Monday",
      ca: "Obrim de Divendres a Dilluns",
      de: "Geöffnet von Freitag bis Montag",
      nl: "Open van vrijdag tot maandag"
    };

    const fallbackHours = "11:00 / 00:00";

    if (iconOnly) {
      return (
        <div className={className}>
          <div>
            <div className="text-sm">{fallbackDays[locale as keyof typeof fallbackDays] || fallbackDays.es}</div>
            <div className="text-sm font-medium">{fallbackHours}</div>
          </div>
        </div>
      );
    }

    const titleClass = isFooter ? "font-semibold mb-1 text-white text-sm" : "font-semibold mb-2 text-gray-900";
    const daysClass = isFooter ? "text-gray-300 text-sm" : "text-gray-600 text-lg";
    const hoursClass = isFooter ? "text-gray-100 text-sm font-light" : "text-amber-600 text-3xl font-light tracking-wide";

    return (
      <div className={className}>
        {showTitle && (
          <h3 className={titleClass}>
            {fallbackTitle[locale as keyof typeof fallbackTitle] || fallbackTitle.es}
          </h3>
        )}
        <div className={isFooter ? "mb-1" : "mb-3"}>
          <div className="space-y-2">
            <div className={daysClass}>
              {fallbackDays[locale as keyof typeof fallbackDays] || fallbackDays.es}
            </div>
            <div className="text-center">
              <div className={hoursClass}>{fallbackHours}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const title = hoursData.title || '';
  const subtitle = hoursData.subtitle || '';

  // Obtener horarios simplificados
  const operatingDays = hoursData.operatingDays || '';
  const operatingHours = hoursData.operatingHours || '';

  // Modo solo icono (para footer)
  if (iconOnly) {
    return (
      <div className={`flex items-center ${className}`}>
        <div>
          <div className="text-sm">{operatingDays}</div>
          <div className="text-sm font-medium">{operatingHours}</div>
        </div>
      </div>
    );
  }

  // Modo completo (para página de contacto o footer)
  const titleClass = isFooter ? "font-semibold mb-1 text-white text-sm" : "font-semibold mb-2 text-gray-900";
  const subtitleClass = isFooter ? "text-gray-300 text-xs mb-2" : "text-gray-600 text-sm mb-3";
  const sectionClass = isFooter ? "mb-1" : "mb-3";
  const daysClass = isFooter ? "text-gray-300 text-sm" : "text-gray-600 text-lg mb-2";
  const hoursClass = isFooter ? "text-gray-100 text-sm font-light" : "text-amber-600 text-3xl font-light tracking-wide";

  return (
    <div className={className}>
      {showTitle && title && (
        <h3 className={titleClass}>{title}</h3>
      )}

      {subtitle && (
        <p className={subtitleClass}>{subtitle}</p>
      )}

      {/* Horarios */}
      <div className={sectionClass}>
        <div className="space-y-3">
          {operatingDays && (
            <div className={daysClass}>{operatingDays}</div>
          )}
          {operatingHours && (

            <div className={hoursClass}>{operatingHours}</div>

          )}
        </div>
      </div>
    </div>
  );
}