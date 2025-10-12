import ArrocesContent from './ArrocesContent';
import { generatePageMetadata } from '@/seo/generators/metadata';
import { generateRestaurantJsonLd } from '@/seo/generators/json-ld';

// Función para cargar traducciones específicas de arroces
async function loadArrocesTranslations(locale: string) {
  const arrocesTranslations = await import(`@/app/translations/arroces/${locale}.json`);
  return arrocesTranslations.default || arrocesTranslations;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata({
    locale: locale as 'es' | 'en' | 'ca' | 'nl' | 'de',
    page: 'arroces'
  });
}

export default async function ArrocesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Cargar traducciones específicas de arroces
  const arrocesTranslations = await loadArrocesTranslations(locale);

  const jsonLD = generateRestaurantJsonLd(locale as 'es' | 'en' | 'ca' | 'nl' | 'de');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <ArrocesContent arrocesData={arrocesTranslations} />
    </>
  );
}