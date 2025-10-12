import type { Metadata } from 'next';
import { generatePageMetadata, getValidLocale } from '@/seo';
import { client } from '../../../../sanity/client';
import { celebrationsContentQuery } from '../../../../sanity/queries';
import { generateEventSchema } from '@/seo/generators/advanced-schema';
import CelebrationsContent from './CelebrationsContent';



export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  return generatePageMetadata({
    locale: validLocale,
    page: 'celebraciones',
    path: '/celebraciones'
  });
}

export default async function CelebrationsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const validLocale = getValidLocale(locale);

  // Obtener contenido de celebraciones desde Sanity
  let celebrationsContent = null;

  try {
    celebrationsContent = await client.fetch(celebrationsContentQuery, { locale: validLocale });
  } catch (error) {
    console.warn('⚠️ No se pudo obtener contenido de celebraciones desde Sanity:', error);
  }

  if (!celebrationsContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Celebraciones</h1>
          <p className="text-gray-600">Contenido no disponible en este momento.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateEventSchema(validLocale),
        }}
      />
      
      <CelebrationsContent 
        content={celebrationsContent} 
        locale={validLocale} 
      />
    </>
  );
}